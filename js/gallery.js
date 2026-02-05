// Crear el lightbox en el DOM
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <div class="lightbox__overlay"></div>
  <button class="lightbox__close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg></button>
  <img class="lightbox__image" src="" alt="">
  <button class="lightbox__prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg></button>
  <button class="lightbox__next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></button>
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