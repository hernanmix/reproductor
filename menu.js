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
  .nav-btn svg { width:24px; height:24px; display:block; margin:0 auto; }
  .nav-btn span { font-size:11px; display:block; margin-top:2px; }
</style>

<nav class="bottom-menu">
  <!-- otros botones ... -->

  <!-- ADS -->
  <button class="nav-btn" onclick="startAds();">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <span>ADS</span>
  </button>
</nav>

<!-- Modal flotante ADS -->
<div id="ads-modal" class="hidden" style="position:fixed; inset:0; background:rgba(0,0,0,.9); z-index:10000; display:flex; align-items:center; justify-content:center;">
  <div style="background:#111; padding:20px; border-radius:10px; max-width:400px; width:90%; text-align:center;">
    <h2 style="color:#4af; margin-bottom:10px;">Publicidad</h2>
    <p style="color:#ccc; margin-bottom:10px;">El anuncio se cerrará automáticamente…</p>
    <span id="countdown-timer" style="font-size:28px; font-weight:bold; color:#fff; display:block; margin-bottom:10px;">15</span>
    <iframe id="ads-iframe" src="" width="100%" height="250" frameborder="0" style="border-radius:8px;"></iframe>
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
