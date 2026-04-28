// menu-pro.js
document.write(`
<style>
  html, body {
    height: 100%;
    margin: 0;
    background: #000022;
    font-family: 'Be Vietnam Pro', sans-serif;
    display: flex;
    flex-direction: column;
  }
  .content {
    flex: 1;
    position: relative;
    height: calc(100vh - 90px);
    overflow: hidden;
  }
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    transition: transform 0.35s ease, opacity 0.35s ease;
  }
  .slide-out { transform: translateY(-40px); opacity: 0; }
  .slide-in { transform: translateY(0); opacity: 1; }
  .ad-container {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 90%; max-width: 600px;
    height: 80%; max-height: 400px;
    background: #111;
    border: 2px solid #00f;
    display: none;
    flex-direction: column;
    z-index: 1000;
  }
  .countdown {
    position: absolute;
    top: 5px; right: 10px;
    font-size: 20px;
    color: #00f;
    font-weight: bold;
  }
  .bottom-menu {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255,255,255,0.1);
    height: 60px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 50;
  }
  .menu-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    user-select: none;
  }
  .menu-btn:hover, .menu-btn.active { color: white; border-top: 2px solid #0072FF; transform: scale(1.05); }
  .menu-btn .material-symbols-outlined { font-size: 26px; margin-bottom: 4px; }
  @media (min-width: 1200px) {
    .bottom-menu { height: 85px; }
    .menu-btn .material-symbols-outlined { font-size: 34px; }
    .menu-btn { font-size: 14px; }
  }
  /* Modal Ads */
  #ads-modal { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.9); align-items:center; justify-content:center; z-index:10000; }
  #ads-modal .modal-inner { max-width:400px; width:90%; background:#111; padding:20px; border-radius:10px; text-align:center; }
</style>

<div class="content">
  <iframe id="mainFrame" src="https://hernanmix.github.io/reproductor/ap-index.html"></iframe>
  <div class="ad-container" id="adContainer">
    <div class="countdown" id="adCountdown">15</div>
    <iframe id="adFrame"></iframe>
  </div>
</div>

<nav class="bottom-menu">
  <div class="menu-btn active" onclick="navigate('https://hsports4hd.blogspot.com/p/hsportstv.html?m=1')">
    <span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1;">home</span>Inicio
  </div>
  <div class="menu-btn" onclick="navigate('https://hsports4hd.blogspot.com/2026/02/tv.html')">
    <span class="material-symbols-outlined">live_tv</span>TV
  </div>
  <div class="menu-btn" onclick="navigate('https://hsports4hd.blogspot.com/p/hsportstv.html?m=1')">
    <span class="material-symbols-outlined">sports_soccer</span>Agenda
  </div>
  <div class="menu-btn" onclick="navigate('https://hsports4hd.blogspot.com/2026/02/donar.html')">
    <span class="material-symbols-outlined">volunteer_activism</span>Donar
  </div>
  <div class="menu-btn" onclick="navigate('https://hernanmix.github.io/reproductor/ap-index.html')">
    <span class="material-symbols-outlined">movie</span>Disney+
  </div>
  <div class="menu-btn" onclick="navigate('https://hsports4hd.blogspot.com/2026/02/disney2.html')">
    <span class="material-symbols-outlined">movie_filter</span>Disney+
  </div>
  <div class="menu-btn" onclick="showAd()">
    <span class="material-symbols-outlined">ads_click</span>Ads
  </div>
  <div id="exit-btn" class="menu-btn" style="display:none;" onclick="exitApp()">
    <span class="material-symbols-outlined">logout</span>Salir
  </div>
</nav>

<div id="ads-modal">
  <div class="modal-inner">
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

requestAnimationFrame(() => {
  const iframe = document.getElementById('mainFrame');
  const adContainer = document.getElementById('adContainer');
  const adFrame = document.getElementById('adFrame');
  const adCountdownEl = document.getElementById('adCountdown');
  const adsModal = document.getElementById('ads-modal');
  const countdownEl = document.getElementById('countdown-timer');
  const adsIframe = document.getElementById('ads-iframe');
  const progressRing = document.getElementById('progress-ring');
  const exitBtn = document.getElementById('exit-btn');
  let timerInterval = null;
  const R = 44;
  const circumference = 2 * Math.PI * R;
  if (progressRing) progressRing.style.strokeDasharray = circumference;

  window.navigate = function(url) {
    iframe.classList.add('slide-out');
    setTimeout(() => {
      iframe.src = url;
      iframe.classList.remove('slide-out');
      iframe.classList.add('slide-in');
      setTimeout(() => iframe.classList.remove('slide-in'), 400);
    }, 300);
  };

  window.showAd = function() {
    adsModal.style.display = "flex";
    adsIframe.src = "https://annoyingnightmareedit.com/sx8hwavut?key=12d54e488207e905a50e1b60079637db";
    let timeLeft = 15;
    countdownEl.innerText = timeLeft;
    progressRing.style.strokeDashoffset = circumference;
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      countdownEl.innerText = timeLeft;
      progressRing.style.strokeDashoffset = circumference * (1 - timeLeft / 15);
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        adsModal.style.display = "none";
        adsIframe.src = "";
      }
    }, 1000);
  };

  // Mostrar botón Salir solo en AppCreator24 / SmartTV
  const ua = navigator.userAgent.toLowerCase();
  const isAppCreator = ua.includes('appcreator24');
  const isSmartTV = ua.includes('smarttv') || ua.includes('smart-tv') || ua.includes('tizen') || ua.includes('webos');
  ifif ((isAppCreator || isSmartTV) && exitBtn) {
    exitBtn.style.display = 'flex'; // mostrar solo en AppCreator24 o SmartTV
  } else if (exitBtn) {
    exitBtn.style.display = 'none'; // ocultar en Chrome u otros navegadores
  }

  window.exitApp = function() {
    // Intentar cerrar la APK en AppCreator24 / SmartTV
    try {
      window.location.href = "go:exitFs";
    } catch (e) {
      try { window.close(); } catch (err) {}
    }
  };

  // Cerrar modal si se hace click fuera del inner
  if (adsModal) {
    adsModal.addEventListener('click', (e) => {
      if (e.target === adsModal) {
        clearInterval(timerInterval);
        timerInterval = null;
        adsModal.style.display = 'none';
        adsIframe.src = '';
        countdownEl.innerText = "15";
        progressRing.style.strokeDashoffset = circumference;
      }
    });
  }
});
