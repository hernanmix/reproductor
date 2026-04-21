document.addEventListener("DOMContentLoaded", () => {
  const menuHTML = `
    <style>
      .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 64px;
        background: #050b18;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: 1px solid rgba(255,255,255,0.1);
        z-index: 9999;
        overflow: hidden;
      }
      .bottom-nav::after {
        content: "";
        position: absolute;
        top: 0;
        left: -150%;
        width: 50%;
        height: 100%;
        background: linear-gradient(
          to right,
          transparent 0%,
          rgba(255, 255, 255, 0.1) 50%,
          transparent 100%
        );
        transform: skewX(-25deg);
        animation: shimmer 4s infinite linear;
        pointer-events: none;
      }
      @keyframes shimmer {
        0% { left: -150%; }
        30% { left: 150%; }
        100% { left: 150%; }
      }
      .nav-btn {
        flex: 1;
        text-align: center;
        color: #8d90a2;
        transition: all 0.3s ease;
        cursor: pointer;
        padding: 6px 0;
        position: relative;
        z-index: 1;
      }
      .nav-btn.active {
        color: #ffffff;
        font-weight: bold;
      }
      .nav-btn i {
        font-size: 22px;
        display: block;
      }
      .nav-btn span {
        font-size: 11px;
        text-transform: uppercase;
        margin-top: 2px;
        display: block;
      }
      #exit-btn { display: none; }
      #ads-modal {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.9);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 10000;
      }
      #ads-box {
        background: #1a1a1a;
        border-radius: 16px;
        padding: 20px;
        text-align: center;
        color: white;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 0 20px rgba(0,0,0,0.6);
      }
      #countdown {
        font-size: 24px;
        font-weight: bold;
        margin: 10px 0;
      }
    </style>

    <nav class="bottom-nav">
      <div class="nav-btn active" onclick="changeSource('URL_MENU', this)">
        <i class="material-symbols-outlined">menu</i>
        <span>MENU</span>
      </div>
      <div class="nav-btn" onclick="changeSource('URL_TV', this)">
        <i class="material-symbols-outlined">live_tv</i>
        <span>TV</span>
      </div>
      <div class="nav-btn" onclick="changeSource('URL_DONAR', this)">
        <i class="material-symbols-outlined">volunteer_activism</i>
        <span>DONAR</span>
      </div>
      <div class="nav-btn" onclick="changeSource('URL_DISNEY', this)">
        <i class="material-symbols-outlined">movie</i>
        <span>DISNEY</span>
      </div>
      <div class="nav-btn" onclick="showAdsModal()">
        <i class="material-symbols-outlined">ad_units</i>
        <span>ADS</span>
      </div>
      <div class="nav-btn" id="exit-btn" onclick="window.location.href='http://action_exit';">
        <i class="material-symbols-outlined">logout</i>
        <span>SALIR</span>
      </div>
    </nav>

    <div id="ads-modal">
      <div id="ads-box">
        <h2>Publicidad</h2>
        <p>Este anuncio se cerrará en:</p>
        <div id="countdown">15</div>
        <iframe frameborder="0" height="200" id="ads-iframe" src="https://annoyingnightmareedit.com/sx8hwavut?key=12d54e488207e905a50e1b60079637db" width="100%"></iframe>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", menuHTML);
});

// Funciones
function checkEnvironment() {
  const ua = navigator.userAgent;
  const exitBtn = document.getElementById('exit-btn');
  const tvKeywords = ['SmartTV','Tizen','Web0S','WebOS','LG','Sony','Samsung','HbbTV','GoogleTV','AppleTV','Pov_TV'];
  const isSmartTV = tvKeywords.some(keyword => ua.includes(keyword));
  const isAppCreator24 = ua.includes("Android") && (ua.includes("wv") || window.location.protocol === "file:" || window.external);
  if (isSmartTV || isAppCreator24) {
    exitBtn.style.display = 'block';
  } else {
    exitBtn.style.display = 'none';
  }
}
window.onload = checkEnvironment;

function changeSource(url, element) {
  const iframe = document.getElementById('content-frame');
  if (iframe && iframe.src !== url) {
    iframe.src = url;
  }
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
}

function showAdsModal() {
  const modal = document.getElementById('ads-modal');
  const countdown = document.getElementById('countdown');
  modal.style.display = 'flex';
  let timeLeft = 15;
  countdown.textContent = timeLeft;
  const timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      closeAdsModal();
    }
  }, 1000);
}

function closeAdsModal() {
  const modal = document.getElementById('ads-modal');
  modal.style.display = 'none';
  const iframe = document.getElementById('ads-iframe');
  if (iframe) iframe.src = "";
}
