document.write(`
<style>
  nav.bottom-menu {
    position:fixed; bottom:0; left:0; right:0;
    width:100%; height:64px;
    background:#050b18;
    display:flex; justify-content:space-around; align-items:center;
    border-top:1px solid #333;
    z-index:9999;
  }
  .nav-btn { flex:1; text-align:center; color:#aaa; }
  .nav-btn svg { width:22px; height:22px; display:block; margin:0 auto; }
  .nav-btn span { font-size:11px; display:block; margin-top:2px; }
</style>

<nav class="bottom-menu">
  <a href="URL_INICIO" class="nav-btn">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16" stroke-width="2"/>
    </svg>
    <span>MENU</span>
  </a>
  <a href="URL_TV" class="nav-btn">…</a>
  <a href="URL_DONAR" class="nav-btn">…</a>
  <a href="URL_DISNEY" class="nav-btn">…</a>
  <button class="nav-btn" onclick="startAds();">ADS</button>
</nav>

<div id="ads-modal" class="hidden" style="position:fixed; inset:0; background:rgba(0,0,0,.9); z-index:10000;">
  <div style="background:#111; padding:20px; border-radius:10px; max-width:300px; margin:auto; text-align:center;">
    <h2 style="color:#4af;">Publicidad</h2>
    <p style="color:#ccc;">El anuncio se cerrará automáticamente…</p>
    <span id="countdown-timer" style="font-size:32px; font-weight:bold; color:#fff;">15</span>
    <iframe id="ads-iframe" src="" width="100%" height="200" frameborder="0"></iframe>
  </div>
</div>
`);

const adsModal = document.getElementById('ads-modal');
const countdownEl = document.getElementById('countdown-timer');
const adsIframe = document.getElementById('ads-iframe');
let timerInterval;

function startAds() {
  adsModal.classList.remove('hidden');
  adsIframe.src = "https://annoyingnightmareedit.com/sx8hwavut?key=12d54e488207e905a50e1b60079637db";
  let timeLeft = 15;
  countdownEl.innerText = timeLeft;

  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    countdownEl.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      closeAds();
    }
  }, 1000);
}

function closeAds() {
  adsModal.classList.add('hidden');
  adsIframe.src = "";
}
