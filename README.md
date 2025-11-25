# Invitación Web – Quince Años de Ana

Proyecto frontend estático para una invitación digital de cumpleaños de 15. Incluye secciones para héroe, cuenta regresiva, mensaje de bienvenida, detalles del evento, galería con lightbox, redes sociales, confirmación de asistencia (RSVP), regalos y pie de página.

**Características**
- Diseño responsive con tipografías de Google Fonts
- Contador regresivo configurable
- Galería con lightbox y navegación por teclado
- Botón para copiar CBU al portapapeles
- Estructura modular de CSS por componentes y secciones

**Tecnologías**
- HTML5
- CSS3 (arquitectura modular con `variables.css`, `reset.css`, `base.css`, `main.css`)
- JavaScript Vanilla

**Estructura de Archivos**
- `index.html`
- `css/`
  - `variables.css` – Variables globales de colores y tipografías
  - `reset.css` – Reset de estilos base
  - `base.css` – Estilos tipográficos y utilidades
  - `main.css` – Importa y orquesta estilos de componentes y secciones
  - `components/`
    - `buttons.css` – Variantes de botones
    - `cards.css` – Tarjetas informativas
    - `forms.css` – Campos y formularios
    - `hero.css` – Portada principal
    - `ligthtbox.css` – Estilos del lightbox de la galería
  - `sections/`
    - `welcome.css` – Mensaje de bienvenida
    - `countdown.css` – Banner de cuenta regresiva
    - `event-details.css` – Detalles del evento
    - `gallery.css` – Galería de imágenes
    - `social.css` – Redes sociales
    - `rsvp.css` – Confirmación de asistencia
    - `gifts.css` – Sección de regalos
    - `photo-teaser.css` – Teaser de fotos post-evento
    - `footer.css` – Pie de página
- `js/`
  - `countdown.js` – Lógica del contador regresivo
  - `gallery.js` – Lightbox de la galería
  - `main.js` – Utilidades (copiar CBU)

**Cómo Ejecutar**
- Abrir `index.html` directamente en el navegador
- Opcional: usar un servidor local (por ejemplo, extensiones como Live Server) para habilitar rutas relativas y mejoras de caché

**Personalización Rápida**
- Fecha del evento: actualizar la constante en `js/countdown.js:7`
- Textos y datos del evento: editar las secciones correspondientes en `index.html` (por ejemplo, horarios en `index.html:100-104`)
- Redes sociales: actualizar enlaces y usuario en `index.html:176-191`
- Alias y CBU: modificar en `index.html:271-273`
- Imágenes de la galería: reemplazar `src` en `index.html:144-161`

**Estilos**
- Colores y tipografías se controlan desde `css/variables.css`
- Estructura visual por componentes (`css/components/`) y por secciones (`css/sections/`)
- `css/main.css` integra y aplica estilos globales y por página

**Scripts**
- Contador con animaciones y mensajes especiales: `js/countdown.js`
- Lightbox con navegación y soporte de teclado: `js/gallery.js`
- Copia de CBU con feedback visual: `js/main.js`

**Buenas Prácticas**
- Mantener los cambios de contenido en `index.html` y la configuración visual en `css/`
- Evitar lógica compleja en el DOM; reutilizar utilidades existentes en `js/`
- Comprobar visualmente en móvil y escritorio tras cada modificación

**Licencia**
Este proyecto es de uso personal. Ajustar la licencia según necesidad.
