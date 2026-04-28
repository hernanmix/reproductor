// menu-pro-modern.js

// Crear estilos dinámicamente
const style = document.createElement('style');
style.textContent = `
  html, body { margin:0; padding:0; height:100%; font-family:sans-serif; background:#000022; overflow:hidden; }
  #mainFrame { width:100%; height:calc(100vh - 60px); border:none; display:block; }
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
`;
document.head.appendChild(style);

// Crear iframe principal
const iframe = document.createElement('iframe');
iframe.id = 'mainFrame';
iframe.src = 'https://hsports4hd.blogspot.com/p/hsportstv.html?m=1';
document.body.appendChild(iframe);

// Crear menú
const menu = document.createElement('nav');
menu.className = 'bottom-menu';
document.body.appendChild(menu);

const menuItems = [
  { icon:'home', label:'Inicio', url:'https://hsports4hd.blogspot.com/p/hsportstv.html?m=1' },
  { icon:'live_tv', label:'TV', url:'https://hsports4hd.blogspot.com/2026/02/tv.html' },
  { icon:'sports_soccer', label:'Agenda', url:'https://hsports4hd.blogspot.com/p/hsportstv.html?m=1' },
  { icon:'volunteer_activism', label:'Donar', url:'https://hsports4hd.blogspot.com/2026/02/donar.html' },
  { icon:'movie', label:'Disney+', url:'https://hernanmix.github.io/reproductor/ap-index.html' },
  { icon:'movie_filter', label:'Disney+', url:'https://hsports4hd.blogspot.com/2026/02/disney2.html' },
  { icon:'ads_click', label:'Ads', id:'adsBtn' },
  { icon:'logout', label:'Salir', id:'exitBtn' }
];

menuItems.forEach(item => {
  const btn = document.createElement('div');
  btn.className = 'menu-btn';
  btn.dataset.url = item.url || '';
  if(item.id) btn.id = item.id;
  btn.innerHTML = `<span class="material-symbols-outlined">${item.icon}</span>${item.label}`;
  menu.appendChild(btn);
});

// Crear contenedor de Ads
const adContainer = document.createElement('div');
adContainer.className = 'ad-container';
adContainer.id = 'adContainer';
adContainer.innerHTML = `<div class="countdown" id="adCountdown">15</div><iframe id="adFrame"></iframe>`;
document.body.appendChild(adContainer);

// Funcionalidad menú
const buttons = document.querySelectorAll('.menu-btn');
buttons.forEach(btn => {
  if(btn.dataset.url){
    btn.addEventListener('click', ()=>{
      iframe.src = btn.dataset.url;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  }
});

// Botón Ads
document.getElementById('adsBtn').addEventListener('click', ()=>{
  const adFrame = document.getElementById('adFrame');
  const adCountdownEl = document.getElementById('adCountdown');
  adContainer.style.display='flex';
  adFrame.src='https://annoyingnightmareedit.com/sx8hwavut?key=12d54e488207e905a50e1b60079637db';
  let counter=15;
  adCountdownEl.textContent = counter;
  const timer = setInterval(()=>{
    counter--;
    adCountdownEl.textContent=counter;
    if(counter<=0){
      clearInterval(timer);
      adContainer.style.display='none';
      adFrame.src='';
    }
  },1000);
});

// Botón Salir (solo AppCreator24 o SmartTV)
const exitBtn = document.getElementById('exitBtn');
const ua = (navigator.userAgent||'').toLowerCase();
const isAppCreator = ua.includes('appcreator24');
const isSmartTV = ua.includes('smarttv') || ua.includes('smart-tv') || ua.includes('tizen') || ua.includes('webos');
if(!(isAppCreator||isSmartTV)) exitBtn.style.display='none';
exitBtn.addEventListener('click', ()=>{
  try { window.location.href = 'go:exitFs'; } catch(e){ try{window.close();}catch(err){} }
});
