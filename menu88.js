// --- CONFIGURACIÓN DEL MENÚ ---
document.addEventListener("DOMContentLoaded", function() {
  
  // Añadir el menú al body
  const menuHTML = `
  <div class="ad-container" id="adContainer">
    <div class="countdown" id="adCountdown">15</div>
    <iframe id="adFrame"></iframe>
  </div>

  <nav class="bottom-menu">
    <div class="menu-btn" data-url="https://hsports4hd.blogspot.com/p/hsportstv.html?m=1">
      <span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1;">home</span>
      Inicio
    </div>
    <div class="menu-btn" data-url="https://hsports4hd.blogspot.com/2026/02/tv.html">
      <span class="material-symbols-outlined">live_tv</span>
      TV
    </div>
    <div class="menu-btn" data-url="https://hsports4hd.blogspot.com/p/hsportstv.html?m=1">
      <span class="material-symbols-outlined">sports_soccer</span>
      Agenda
    </div>
    <div class="menu-btn" data-url="https://hsports4hd.blogspot.com/2026/02/donar.html">
      <span class="material-symbols-outlined">volunteer_activism</span>
      Donar
    </div>
    <div class="menu-btn" data-url="https://hernanmix.github.io/reproductor/ap-index.html">
      <span class="material-symbols-outlined">movie</span>
      Disney+
    </div>
    <div class="menu-btn" data-url="https://hsports4hd.blogspot.com/2026/02/disney2.html">
      <span class="material-symbols-outlined">movie_filter</span>
      Disney+
    </div>
    <div class="menu-btn" id="adsBtn">
      <span class="material-symbols-outlined">ads_click</span>
      Ads
    </div>
    <div class="menu-btn" id="exitBtn">
      <span class="material-symbols-outlined">logout</span>
      Salir
    </div>
  </nav>
  `;

  document.body.insertAdjacentHTML('beforeend', menuHTML);

  // --- FUNCIONALIDADES ---
  const menuButtons = document.querySelectorAll('.menu-btn[data-url]');
  const currentUrl = window.location.href;

  // Resaltar ícono activo
  menuButtons.forEach(btn => {
    const btnUrl = btn.getAttribute('data-url');
    if(currentUrl === btnUrl || currentUrl.startsWith(btnUrl)) {
      btn.classList.add('active');
    }
  });

  // Navegación por botón
  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = btn.getAttribute('data-url');
    });
  });

  // Ads flotante
  const adsBtn = document.getElementById('adsBtn');
  const adContainer = document.getElementById('adContainer');
  const adFrame = document.getElementById('adFrame');
  const adCountdown = document.getElementById('adCountdown');

  adsBtn.addEventListener('click', () => {
    adContainer.style.display = 'flex';
    adFrame.src = 'https://annoyingnightmareedit.com/sx8hwavut?key=12d54e488207e905a50e1b60079637db';

    let counter = 15;
    adCountdown.textContent = counter;

    const timer = setInterval(() => {
      counter--;
      adCountdown.textContent = counter;
      if(counter <= 0){
        clearInterval(timer);
        adContainer.style.display = 'none';
        adFrame.src = '';
      }
    }, 1000);
  });

  // Botón Salir AppCreator24
  const exitBtn = document.getElementById('exitBtn');
  exitBtn.addEventListener('click', () => {
    if(window.AppCreator24) {
      window.AppCreator24.exitApp();
    } else {
      alert('Salir solo disponible en AppCreator24/SmartTV');
    }
  });
});
