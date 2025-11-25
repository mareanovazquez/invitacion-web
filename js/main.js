/* ============================================
   COPIAR CBU AL CLIPBOARD
   ============================================ */

const copyButtons = document.querySelectorAll('.gifts__copy-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // El CBU está en el HTML, lo extraemos
        const cbuText = button.closest('.gifts__option').querySelector('.gifts__option-text').textContent;

        // Extraer solo el número del CBU
        const cbuMatch = cbuText.match(/CBU:\s*(\d+)/);

        if (cbuMatch) {
            const cbu = cbuMatch[1];

            // Copiar al clipboard
            navigator.clipboard.writeText(cbu).then(() => {
                // Feedback visual
                const originalText = button.textContent;
                button.textContent = '✓ Copiado';
                button.style.backgroundColor = 'var(--color-success)';
                button.style.color = 'var(--color-text-inverse)';

                // Volver al estado original después de 2 segundos
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                    button.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar:', err);
                alert('No se pudo copiar. Intenta copiarlo manualmente.');
            });
        }
    });
});
