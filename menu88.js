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
  </style>

  <nav class="bottom-menu">
    <div class="menu-btn active" onclick="navigate('go:p')">
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
    <a href="http://action_exit" class="menu-btn">
      <span class="material-symbols-outlined">logout</span>Salir
    </a>
  </nav>
  `;

  document.body.insertAdjacentHTML('beforeend', menuHTML);

  // Selección de botones para Smart TV
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

  // Función de navegación
  window.navigate = function(url) {
    const iframe = document.getElementById('mainFrame');
    if (!iframe) return;
    iframe.classList.add('slide-out');
    setTimeout(() => {
      iframe.src = url;
      iframe.classList.remove('slide-out');
      iframe.classList.add('slide-in');
      setTimeout(() => { iframe.classList.remove('slide-in'); }, 400);
    }, 300);
  };

  // Función Ads flotante
  window.showAd = function() {
    const adContainer = document.getElementById('adContainer');
    const adFrame = document.getElementById('adFrame');
    const adCountdownEl = document.getElementById('adCountdown');
    if (!adContainer || !adFrame || !adCountdownEl) return;

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
  };
})();
