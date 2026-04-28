<!-- Menú inferior completo -->
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700;800&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>

<style>
  body { font-family:'Be Vietnam Pro', sans-serif; margin:0; padding-bottom:60px; background:#000022; }
  
  /* Menú inferior */
  .bottom-menu {
    display:grid;
    grid-template-columns:repeat(8,1fr);
    background:rgba(15,23,42,0.8);
    backdrop-filter:blur(20px);
    border-top:1px solid rgba(255,255,255,0.1);
    height:60px;
    width:100%;
    position:fixed;
    bottom:0;
    left:0;
    z-index:9999;
  }

  .menu-btn {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#94a3b8;
    font-size:10px;
    font-weight:600;
    text-transform:uppercase;
    cursor:pointer;
    transition:0.2s;
    text-align:center;
  }

  .menu-btn:hover,
  .menu-btn.active {
    color:white;
    transform:scale(1.05);
    border-top:2px solid #0072FF;
  }

  .menu-btn .material-symbols-outlined { font-size:26px; margin-bottom:4px; }

  @media (min-width:1200px){
    .bottom-menu{height:85px;}
    .menu-btn{font-size:14px;}
    .menu-btn .material-symbols-outlined{font-size:34px;}
  }

  /* Ads flotante */
  .ad-container {
    display:none;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:90%;
    max-width:600px;
    height:80%;
    max-height:400px;
    background:#111;
    border:2px solid #00f;
    z-index:10000;
    flex-direction:column;
  }

  .ad-container iframe{ width:100%; height:100%; border:none; }
  .countdown { position:absolute; top:5px; right:10px; font-size:20px; color:#00f; font-weight:bold; }
</style>

<!-- Contenedor Ads -->
<div class="ad-container" id="adContainer">
  <div class="countdown" id="adCountdown">15</div>
  <iframe id="adFrame"></iframe>
</div>

<!-- Menú inferior -->
<nav class="bottom-menu">
  <div class="menu-btn" data-url="https://hsports4hd.blogspot.com/2026/02/tv.html">
    <span class="material-symbols-outlined">home</span>Inicio
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

<script>
  // Navegación directa
  document.querySelectorAll('.menu-btn[data-url]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      window.location.href = btn.getAttribute('data-url');
    });
  });

  // Ads flotante
  const adsBtn = document.getElementById('adsBtn');
  const adContainer = document.getElementById('adContainer');
  const adFrame = document.getElementById('adFrame');
  const adCountdown = document.getElementById('adCountdown');

  adsBtn.addEventListener('click', ()=>{
    adContainer.style.display = 'flex';
    adFrame.src = 'https://annoyingnightmareedit.com/sx8hwavut?key=12d54e488207e905a50e1b60079637db';
    let counter = 15;
    adCountdown.textContent = counter;
    const timer = setInterval(()=>{
      counter--;
      adCountdown.textContent = counter;
      if(counter <= 0){
        clearInterval(timer);
        adContainer.style.display = 'none';
        adFrame.src = '';
      }
    },1000);
  });

  // Botón salir solo AppCreator24
  const exitBtn = document.getElementById('exitBtn');
  exitBtn.addEventListener('click', ()=>{
    if(window.AppCreator24){ 
      window.AppCreator24.exitApp(); 
    } else { 
      alert('Salir solo disponible en AppCreator24/SmartTV'); 
    }
  });
</script>
