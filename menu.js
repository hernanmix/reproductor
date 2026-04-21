// menu.js - copia esto tal cual en tu repo y enlázalo desde GitHub
document.write(`
<style>
  @keyframes shine {
    0% { left: -100%; }
    50% { left: 100%; }
    100% { left: 100%; }
  }
  .shine-effect {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.2) 50%,
      rgba(255,255,255,0) 100%
    );
    transform: skewX(-25deg);
    animation: shine 3s infinite;
    pointer-events: none;
  }
  nav.bottom-menu {
    position:fixed; bottom:0; left:0; right:0;
    width:100%; height:64px;
    background:#050b18;
    display:flex; justify-content:space-around; align-items:center;
    border-top:1px solid #333;
    z-index:9999;
    overflow:hidden;
  }
  .nav-btn { flex:1; text-align:center; color:#aaa; text-decoration:none; }
  .nav-btn svg { width:24px; height:24px; display:block; margin:0 auto; }
  .nav-btn span { font-size:11px; display:block; margin-top:2px; }
  .ads-btn { flex:1; text-align:center; color:#fff; background:#007BFF; border-radius:6px; border:none; padding:8px; cursor:pointer; }
  .ads-btn svg { width:24px; height:24px; display:block; margin:0 auto; }
  .ads-btn span { font-size:11px; display:block; margin-top:2px; }
  .exit-btn { flex:1; text-align:center; color:#fff; background:#d9534f; border-radius:6px; border:none; padding:8px; cursor:pointer; display:none; }
  .exit-btn svg { width:24px; height:24px; display:block; margin:0 auto; }
  .exit-btn span { font-size:11px; display:block; margin-top:2px; }
  /* Modal styles */
  #ads-modal { display:none; align-items:center; justify-content:center; }
  #ads-modal .modal-inner { max-width:400px; width:90%; }
</style>

<nav class="bottom-menu">
  <div class="shine-effect"></div>

  <!-- MENU -->
  <a href="https://hsports4hd.blogspot.com/p/hsportstv.html?m=1" class="nav-btn">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <span>MENU</span>
  </a>

  <!-- TV -->
  <a href="/2026/02/tv.html" class="nav-btn">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <span>TV</span>
  </a>

  <!-- DONAR -->
  <a href="https://hsports4hd.blogspot.com/2026/02/donar.html" class="nav-btn">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <span>DONAR</span>
  </a>

  <!-- DISNEY -->
  <a href="https://hsports4hd.blogspot.com/2026/02/disney2.html" class="nav-btn">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <span>DISNEY</span>
  </a>

  <!-- ADS -->
  <button class="ads-btn" id="ads-btn">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <span>ADS</span>
  </button>

  <!-- EXIT (solo AppCreator24/SmartTV) -->
  <button id="exit-btn" class="exit-btn" onclick="exitApp();">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <span>SALIR</span>
  </button>
</nav>

<!-- Modal flotante ADS -->
<div id="ads-modal" style="position:fixed; inset:0; background:rgba(0,0,0,.9); z-index:10000; display:none; align-items:center; justify-content:center;">
  <div class="modal-inner" style="background:#111; padding:20px; border-radius:10px; text-align:center;">
    <h2 style="color:#4af; margin-bottom:10px;">Publicidad</h2>
    <p style="color:#ccc; margin-bottom:10px;">El anuncio se cerrará automáticamente…</p>
    <div style="position:relative; display:inline-flex; align-items:center; justify-content:center; margin-bottom:10px;">
      <svg style="position:absolute; width:96px; height:96px;" viewBox="0 0 96 96">
        <circle id="progress-ring" cx="48" cy="48" r="44" stroke="#4af" stroke-width="4" fill="transparent" stroke-dasharray="276" stroke-dashoffset="0"></circle>
      </svg>
      <span id="countdown-timer" style="font-size:28px; font-weight:bold; color:#fff; z-index:1;">15</span>
    </div>
    <iframe id="ads-iframe" src="" width="100%" height="250" frameborder="0" style="border-radius:8px;"></iframe>
  </div>
</div>
`);

// Esperar a que el DOM se actualice tras document.write
requestAnimationFrame(() => {
  // Elementos del modal y botones
  const adsModal = document.getElementById('ads-modal');
  const countdownEl = document.getElementById('countdown-timer');
  const adsIframe = document.getElementById('ads-iframe');
  const progressRing = document.getElementById('progress-ring');
  const adsBtn = document.getElementById('ads-btn');
  const exitBtn = document.getElementById('exit-btn');

  let timerInterval = null;

  // Inicializar progreso (por si el SVG no tiene atributos)
  const R = 44;
  const circumference = 2 * Math.PI * R;
  if (progressRing) {
    progressRing.style.strokeDasharray = circumference;
    progressRing.style.strokeDashoffset = circumference;
  }

  function startAds() {
    if (!adsModal || !adsIframe || !countdownEl || !progressRing) return;

    adsModal.style.display = "flex";
    // Cargar anuncio en iframe
    adsIframe.src = "https://annoyingnightmareedit.com/sx8hwavut?key=12d54e488207e905a50e1b60079637db";

    let timeLeft = 15;
    countdownEl.innerText = timeLeft;
    progressRing.style.strokeDashoffset = circumference;

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        closeAds();
        return;
      }
      countdownEl.innerText = timeLeft;
      // stroke offset: 0 = full circle shown, circumference = empty
      const progress = (timeLeft) / 15; // 1 -> 0
      progressRing.style.strokeDashoffset = circumference * (1 - progress);
    }, 1000);
  }

  function closeAds() {
    if (!adsModal || !adsIframe || !countdownEl || !progressRing) return;
    adsModal.style.display = "none";
    adsIframe.src = "";
    countdownEl.innerText = "15";
    progressRing.style.strokeDashoffset = circumference;
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // Conectar botón ADS
  if (adsBtn) {
    adsBtn.addEventListener('click', startAds);
  }

  // Cerrar modal si el usuario hace click fuera del inner
  if (adsModal) {
    adsModal.addEventListener('click', (e) => {
      if (e.target === adsModal) {
        // permitir cerrar manualmente si se desea
        closeAds();
      }
    });
  }

  // Detectar entorno y mostrar botón SALIR solo en AppCreator24/SmartTV
  (function detectAndShowExit() {
    const ua = (navigator && navigator.userAgent) ? navigator.userAgent.toLowerCase() : '';
    // Algunas SmartTVs usan "smart-tv", "smarttv", "smarttv", o marcas específicas.
    // AppCreator24 suele incluir "appcreator24" en el UA; si no, puedes añadir más checks.
    const isAppCreator = ua.includes('appcreator24');
    const isSmartTV = ua.includes('smarttv') || ua.includes('smart-tv') || ua.includes('smarttv') || ua.includes('tizen') || ua.includes('webos');
    if ((isAppCreator || isSmartTV) && exitBtn) {
      exitBtn.style.display = 'block';
    } else if (exitBtn) {
      exitBtn.style.display = 'none';
    }
  })();

  // Acción de salida
  window.exitApp = function() {
    // Para AppCreator24 la acción suele ser un esquema personalizado
    // Si "go:exitFs" no funciona en tu entorno, cámbialo por la acción que use tu APK.
    try {
      // Intentar esquema personalizado
      window.location.href = "go:exitFs";
    } catch (e) {
      // Fallback: intentar cerrar ventana
      try { window.close(); } catch (err) {}
    }
  };

  // Exponer funciones globales por si las necesitas
  window.startAds = startAds;
  window.closeAds = closeAds;
});
