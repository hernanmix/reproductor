(function() {
  // Inserta el HTML del menú y CSS dentro del body
  const menuHTML = `
  <style>
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
    .menu-btn:hover,
    .menu-btn.active {
      color: white;
      transform: scale(1.05);
      border-top: 2px solid #0072FF;
    }
    .menu-btn .material-symbols-outlined { font-size: 26px; margin-bottom: 4px; }
    @media (min-width: 1200px) {
      .bottom-menu { height: 85px; }
      .menu-btn .material-symbols-outlined { font-size: 34px; }
      .menu-btn { font-size: 14px; }
    }

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
      justify-content: center;
      align-items: center;
    }
    .ad-container iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    .countdown {
      position: absolute;
      top: 5px; right: 10px;
      font-size: 20px;
      color: #00f;
      font-weight: bold;
    }
  </style>

  <div class="ad-container" id="adContainer">
    <div class="countdown" id="adCountdown">15</div>
    <iframe id="adFrame"></iframe>
  </div>

  <nav class="bottom-menu">
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
  `;

  document.body.insertAdjacentHTML('beforeend', menuHTML);

  const buttons = document.querySelectorAll('.menu-btn');
  let currentIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      buttons[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % buttons.length;
      buttons[currentIndex].classList.add('active');
    } else if (e.key === 'ArrowLeft') {
      buttons[currentIndex].classList.remove('active');
      currentIndex = (currentIndex - 1 + buttons.length) % buttons.length;
      buttons[currentIndex].classList.add('active');
    } else if (e.key === 'Enter') {
      buttons[currentIndex].click();
    }
  });

  // Navegación iframe
  window.navigate = function(url) {
    const iframe = document.getElementById('mainFrame');
    if (!iframe) return;
    iframe.classList.add('slide-out');
    setTimeout(() => {
      iframe.src = url;
      iframe.classList.remove('slide-out');
      iframe.classList.add('slide-in');
      setTimeout(() => iframe.classList.remove('slide-in'), 400);
    }, 300);
  };

  // Click en botones con data-url
  buttons.forEach(btn => {
    const url = btn.getAttribute('data-url');
    if (url) {
      btn.addEventListener('click', () => navigate(url));
    }
  });

  // Ads
  document.getElementById('adsBtn').addEventListener('click', () => {
    const adContainer = document.getElementById('adContainer');
    const adFrame = document.getElementById('adFrame');
    const adCountdownEl = document.getElementById('adCountdown');

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

  // Salir solo AppCreator24 / SmartTV
  document.getElementById('exitBtn').addEventListener('click', () => {
    if (window.AppCreator24) {
      window.AppCreator24.exitApp();
    } else {
      alert('Salir solo disponible en AppCreator24/SmartTV');
    }
  });
})();
