document.write(`
<style>
  @keyframes shine {
    0% { left: -100%; }
    20% { left: 100%; }
    100% { left: 100%; }
  }
  .shine-effect {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-25deg);
    animation: shine 4s infinite;
    pointer-events: none;
  }
  .bg-custom-dark { background-color: #050b18; }
  .nav-btn { flex:1; text-align:center; }
  .nav-btn svg { width:22px; height:22px; }
  .nav-btn span { font-size:11px; text-transform:uppercase; margin-top:2px; display:block; }
</style>

<nav class="fixed bottom-0 left-0 w-full bg-custom-dark border-t border-gray-800 shadow-2xl z-40 overflow-hidden">
  <div class="shine-effect"></div>
  <div class="flex justify-around items-center h-16 relative z-10">

    <a href="https://hsports4hd.blogspot.com/p/hsportstv.html?m=1" class="nav-btn text-gray-400 hover:text-white transition-colors flex flex-col items-center">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
      <span>MENU</span>
    </a>

    <a href="/2026/02/tv.html" class="nav-btn text-gray-400 hover:text-white transition-colors flex flex-col items-center">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
      <span>TV</span>
    </a>

    <a href="https://hsports4hd.blogspot.com/2026/02/donar.html" class="nav-btn text-gray-400 hover:text-white transition-colors flex flex-col items-center">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
      <span>DONAR</span>
    </a>

    <a href="https://hsports4hd.blogspot.com/2026/02/disney2.html" class="nav-btn text-gray-400 hover:text-white transition-colors flex flex-col items-center">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
      <span>DISNEY</span>
    </a>

    <button class="nav-btn text-gray-400 hover:text-white transition-colors flex flex-col items-center" onclick="startAds();">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
      <span>ADS</span>
    </button>
  </div>
</nav>

<div id="ads-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
  <div class="bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-sm w-full text-center shadow-2xl">
    <h2 class="text-xl font-bold mb-4 text-blue-400">Publicidad</h2>
    <p class="text-gray-300 mb-6 text-sm">El anuncio se cerrará automáticamente...</p>
    <div class="w-24 h-24 border-4 border-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
      <span class="text-4xl font-black text-white" id="countdown-timer">15</span>
    </div>
    <div class="overflow-hidden rounded-lg bg-black">
      <iframe id="ads-iframe" src="" width="100%" height="200" frameborder="0"></iframe>
    </div>
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
