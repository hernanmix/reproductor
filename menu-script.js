/**
 * Archivo: script.js
 * Descripción: Lógica para el menú con contador de anuncios y salida inteligente.
 * Entorno: Blogger, Smart TV, AppCreator24.
 */

const adsModal = document.getElementById('ads-modal');
const countdownEl = document.getElementById('countdown-timer');
const adsIframe = document.getElementById('ads-iframe');

let timerInterval;

/**
 * Inicia el proceso de publicidad
 * Muestra el modal, carga el iframe y arranca el contador de 15 segundos.
 */
function startAds() {
  if (!adsModal || !countdownEl || !adsIframe) return;

  adsModal.classList.remove('hidden');
  adsIframe.src = "https://annoyingnightmareedit.com/sx8hwavut?key=12d54e488207e905a50e1b60079637db";
  
  let timeLeft = 15;
  countdownEl.innerText = timeLeft;

  if(timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft >= 0) {
        countdownEl.innerText = timeLeft;
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      closeAds();
    }
  }, 1000);
}

/**
 * Cierra el modal de publicidad y limpia el iframe
 */
function closeAds() {
  if (!adsModal || !adsIframe) return;
  adsModal.classList.add('hidden');
  adsIframe.src = "";
}

/**
 * Detecta si el entorno es una Smart TV o AppCreator24
 * para mostrar el botón de SALIR.
 */
function detectEnvironment() {
  const userAgent = navigator.userAgent;
  const exitBtn = document.getElementById('exit-btn');
  
  const isAppCreator24 = userAgent.includes('AppCreator24') || typeof Android !== 'undefined';
  const isSmartTV = /SmartTV|HbbTV|Tizen|Web0S|LG|Sony|Samsung|googletv|appletv|roku|firetv/i.test(userAgent);
  
  if (exitBtn && (isAppCreator24 || isSmartTV)) {
    exitBtn.classList.remove('hidden');
  }
}

// Ejecutar detección al cargar la página
window.addEventListener('load', detectEnvironment);
