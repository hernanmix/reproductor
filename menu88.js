// menu-pro-fix.js
document.write(`
<style>
  html, body { margin:0; padding:0; height:100%; font-family:sans-serif; background:#000022; overflow:hidden; }
  #mainFrame { width:100%; height:calc(100vh - 60px); border:none; display:block; transition:transform 0.35s ease, opacity 0.35s ease; }
  .bottom-menu {
    display:grid;
    grid-template-columns: repeat(8, 1fr);
    background: rgba(15,23,42,0.8);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255,255,255,0.1);
    height:60px; width:100%; position:fixed; bottom:0; left:0; z-index:50;
  }
  .menu-btn {
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    color:#94a3b8; font-size:10px; text-transform:uppercase; font-weight:600;
    cursor:pointer; transition:0.2s; user-select:none;
  }
  .menu-btn:hover { color:white; transform:scale(1.05); }
  .menu-btn .material-symbols-outlined { font-size:26px; margin-bottom:4px; }
  .active { color:white; border-top:2px solid #0072FF; }
  .ad-container {
    position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
    width:90%; max-width:600px; height:60%; background:#111;
    border:2px solid #00f; display:none; flex-direction:column; z-index:1000; border-radius:10px;
    align-items:center; justify-content:center; padding:10px;
  }
  .ad-container iframe { width:100%; height:calc(100% - 40px); border-radius:8px; border:none; }
  .countdown { font-size:24px; color:#00f; font-weight:bold; margin-bottom:5px; }
  .slide-out { transform:translateY(-40px); opacity:0; }
  .slide-in { transform:translateY(0); opacity:1; transition:transform 0.35s ease, opacity 0.35s ease; }
</style>

<nav class="bottom-menu" id="bottomMenu">
  <div class="menu-btn active" data-url="https://hsports4hd.blogspot.com/p/hsportstv.html?m=1">
    <span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1;">home</span>Inicio
  </div>
  <div class="menu-btn" data-url="https://hsports4hd.blogspot.com/2026/02/tv.html">
    <span class="material-symbols-outlined">live_tv</span>TV
  </div>
  <div class="menu-btn" data-url="https://hsports4hd.blogspot.com/p/hsportstv.html?m=1">
    <span class="material-symbols-outlined">sports_soccer</span>Agenda
  </div>
  <div class="menu-btn" data-url="https://hsports4hd.blogspot.com/2026/02/donar.html">
    <span class="material-symbols-outlined">volunteer_activism</span>Donar
  </div>
  <div class="menu-btn" data-url="https://hernanmix.github.io/reproductor/ap-index.html">
    <span class="material-symbols-outlined">movie</span>Disney+
  </div>
  <div class="menu-btn" data-url="https://hsports4hd.blogspot.com/2026/02/disney2.html">
    <span class="material-symbols-outlined">movie_filter</span>Disney+
  </div>
  <div class="menu-btn" id="adsBtn">
    <span class="material-symbols-outlined">ads_click</span>Ads
  </div>
  <div class="menu-btn" id="exitBtn">
    <span class="material-symbols-outlined">logout</span>Salir
  </div>
</nav>

<div class="ad-container" id="adContainer">
  <div class="countdown" id="adCountdown">15</div>
  <iframe id="adFrame"></iframe>
</div>
`);

(function() {
  // Crear un solo iframe principal
  const iframe = document.createElement('iframe');
  iframe.id = 'mainFrame';
  iframe.src = 'https://hsports4hd.blogspot.com/p/hsportstv.html?m=1';
  document.body.insertBefore(iframe, document.getElementById('bottomMenu'));

  const adContainer = document.getElementById('adContainer');
  const adFrame = document.getElementById('adFrame');
  const adCountdownEl = document.getElementById('adCountdown');

  const buttons = document.querySelectorAll('.menu-btn');
  let currentIndex = 0;

  // Navegación principal
  buttons.forEach(btn => {
    if (btn.dataset.url) {
      btn.addEventListener('click', () => {
        // eliminar cualquier iframe adicional
        iframe.src = btn.dataset.url;
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    }
  });

  // Botón ADS
  const adsBtn = document.getElementById('adsBtn');
  adsBtn.addEventListener('click', () => {
    adContainer.style.display = 'flex';
    adFrame.src = 'https://annoyingnightmareedit.com/sx8hwavut?key=12d54e488207e905a50e1b60079637db';
    let counter = 15;
    adCountdownEl.textContent = counter;
    const timer = setInterval(() => {
      counter--;
      adCountdownEl.textContent = counter;
      if (counter <= 0) {
        clearInterval(timer);
        adContainer.style.display = 'none';
        adFrame.src = '';
      }
    }, 1000);
  });

  // Botón SALIR solo AppCreator24/SmartTV
  const exitBtn = document.getElementById('exitBtn');
  const ua = (navigator.userAgent || '').toLowerCase();
  const isAppCreator = ua.includes('appcreator24');
  const isSmartTV = ua.includes('smarttv') || ua.includes('smart-tv') || ua.includes('tizen') || ua.includes('webos');
  if (!(isAppCreator || isSmartTV)) exitBtn.style.display = 'none';

  exitBtn.addEventListener('click', () => {
    try { window.location.href = 'go:exitFs'; } catch(e){ try{window.close();}catch(err){} }
  });

})();
