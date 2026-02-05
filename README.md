# Invitación Web – Casamiento de Fabricio y Valeria

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
```
InvitacionWeb/
├── assets/
├── css/
│   ├── components/
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── forms.css
│   │   ├── hero.css
│   │   └── ligthtbox.css
│   ├── sections/
│   │   ├── countdown.css
│   │   ├── event-details.css
│   │   ├── footer.css
│   │   ├── gallery.css
│   │   ├── gifts.css
│   │   ├── photo-teaser.css
│   │   ├── rsvp.css
│   │   ├── social.css
│   │   └── welcome.css
│   ├── base.css
│   ├── main.css
│   ├── reset.css
│   └── variables.css
├── img/
│   ├── bg-main-desktop.png
│   └── bg-main-mobile.png
├── js/
│   ├── countdown.js
│   ├── gallery.js
│   └── main.js
├── estructura-archivos.txt
├── index.html
└── README.md
```
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
- Las media queries se organizan siguiendo la metodología mobile-first: estilos base para móviles en la parte superior, y media queries con `min-width` al final de cada archivo CSS para dispositivos más grandes

**Licencia**
Este proyecto es de uso personal. Ajustar la licencia según necesidad.
