/* ============================================
   GALLERY LIGHTBOX
   Click en imagen para ver en grande
   ============================================ */

// Crear el lightbox en el DOM
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <div class="lightbox__overlay"></div>
  <button class="lightbox__close">✕</button>
  <img class="lightbox__image" src="" alt="">
  <button class="lightbox__prev">‹</button>
  <button class="lightbox__next">›</button>
`;
document.body.appendChild(lightbox);

// Elementos
const galleryItems = document.querySelectorAll('.gallery__item');
const lightboxOverlay = lightbox.querySelector('.lightbox__overlay');
const lightboxImage = lightbox.querySelector('.lightbox__image');
const lightboxClose = lightbox.querySelector('.lightbox__close');
const lightboxPrev = lightbox.querySelector('.lightbox__prev');
const lightboxNext = lightbox.querySelector('.lightbox__next');

let currentIndex = 0;
const images = Array.from(document.querySelectorAll('.gallery__image'));

// Abrir lightbox
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        showLightbox();
    });
});

function showLightbox() {
    lightboxImage.src = images[currentIndex].src;
    lightbox.classList.add('lightbox--active');
    document.body.style.overflow = 'hidden'; // Bloquear scroll
}

// Cerrar lightbox
function closeLightbox() {
    lightbox.classList.remove('lightbox--active');
    document.body.style.overflow = ''; // Restaurar scroll
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);

// Navegación
lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImage.src = images[currentIndex].src;
});

lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImage.src = images[currentIndex].src;
});

// Teclado (ESC para cerrar, flechas para navegar)
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('lightbox--active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrev.click();
    if (e.key === 'ArrowRight') lightboxNext.click();
});