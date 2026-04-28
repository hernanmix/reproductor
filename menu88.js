// menu.js

(function() {
  // Inserta el HTML del menú
  const menuHTML = `
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
    <a href="http://action_exit" class="menu-btn">
      <span class="material-symbols-outlined">logout</span>Salir
    </a>
  </nav>
  `;

  document.body.insertAdjacentHTML('beforeend', menuHTML);

  // Variables para Smart TV
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

  // Funciones originales
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
