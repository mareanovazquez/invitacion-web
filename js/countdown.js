/* ============================================
   COUNTDOWN TIMER
   Contador regresivo hasta la fecha del evento
   ============================================ */

// Configuración - CAMBIAR ESTA FECHA
const eventDate = new Date('2026-11-07T21:00:00').getTime();

// Elementos del DOM
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Función para agregar animación
function animateNumber(element) {
  element.style.animation = 'none';
  setTimeout(() => {
    element.style.animation = 'pulse 0.3s ease-in-out';
  }, 10);
}

// Función para actualizar el countdown
function updateCountdown() {
  // Tiempo actual
  const now = new Date().getTime();
  
  // Diferencia entre la fecha del evento y ahora
  const timeLeft = eventDate - now;
  
  // Si el evento ya pasó
  if (timeLeft < 0) {
    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    
    // Opcional: cambiar el título
    document.querySelector('.countdown__title').textContent = '¡El evento ya pasó!';
    
    return;
  }
  
  // Cálculos de tiempo
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
  // Actualizar los números con padding de ceros
  const newDays = String(days).padStart(2, '0');
  const newHours = String(hours).padStart(2, '0');
  const newMinutes = String(minutes).padStart(2, '0');
  const newSeconds = String(seconds).padStart(2, '0');
  
  // Solo actualizar y animar si el valor cambió
  if (daysElement.textContent !== newDays) {
    daysElement.textContent = newDays;
    animateNumber(daysElement);
  }
  
  if (hoursElement.textContent !== newHours) {
    hoursElement.textContent = newHours;
    animateNumber(hoursElement);
  }
  
  if (minutesElement.textContent !== newMinutes) {
    minutesElement.textContent = newMinutes;
    animateNumber(minutesElement);
  }
  
  if (secondsElement.textContent !== newSeconds) {
    secondsElement.textContent = newSeconds;
    animateNumber(secondsElement);
  }
}

// Ejecutar inmediatamente
updateCountdown();

// Actualizar cada segundo
setInterval(updateCountdown, 1000);


/* ============================================
   OPCIONAL: Mensaje especial cuando falte poco
   ============================================ */

function checkSpecialMessages() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  
  const titleElement = document.querySelector('.countdown__title');
  
  if (daysLeft === 0) {
    titleElement.textContent = '¡Es hoy! 🎉';
  } else if (daysLeft === 1) {
    titleElement.textContent = '¡Mañana es el gran día! 💕';
  } else if (daysLeft <= 7) {
    titleElement.textContent = '¡Ya falta muy poco! ⭐';
  } else {
    titleElement.textContent = 'Faltan';
  }
}

// Verificar mensajes especiales cada minuto
checkSpecialMessages();
setInterval(checkSpecialMessages, 60000);