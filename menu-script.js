document.addEventListener("DOMContentLoaded", () => {
  const menuHTML = `
    <header class="h-16 w-full z-[9999] bg-black flex items-center justify-center shrink-0 border-b border-white/5">
      <h1 class="font-['Manrope'] font-extrabold tracking-tighter text-2xl md:text-3xl select-none shimmer-text">
        HSP<span class="soccer-green">⚽</span>RTSEC
      </h1>
    </header>
    <main class="flex-grow w-full relative bg-black">
      <iframe class="w-full h-full" id="content-frame" src="https://hsports4hd.blogspot.com/p/hsportstv.html?m=1" title="Main Content Container"></iframe>
    </main>
    <nav class="fixed bottom-0 left-0 w-full h-[64px] sm:h-[72px] z-[9999] shimmer-nav border-t border-white/5">
      <div class="flex justify-around items-center h-full w-full max-w-none px-2">
        <button class="nav-item flex-1 h-full flex flex-col items-center justify-center bg-[#2e4287] text-[#b0c6ff]" onclick="changeSource('https://hsports4hd.blogspot.com/p/hsportstv.html?m=1', this)">
          <span class="material-symbols-outlined">home</span>
          <span class="font-['Manrope'] text-[10px] font-bold uppercase tracking-widest mt-1">Inicio</span>
        </button>
        <button class="nav-item flex-1 h-full flex flex-col items-center justify-center text-[#8d90a2]" onclick="changeSource('https://hsports4hd.blogspot.com/2026/02/tv.html', this)">
          <span class="material-symbols-outlined">live_tv</span>
          <span class="font-['Manrope'] text-[10px] font-bold uppercase tracking-widest mt-1">TV</span>
        </button>
        <button class="nav-item flex-1 h-full flex flex-col items-center justify-center text-[#8d90a2]" onclick="changeSource('https://hsports4hd.blogspot.com/2026/02/donar.html', this)">
          <span class="material-symbols-outlined">volunteer_activism</span>
          <span class="font-['Manrope'] text-[10px] font-bold uppercase tracking-widest mt-1">Donar</span>
        </button>
        <button class="nav-item flex-1 h-full flex flex-col items-center justify-center text-[#8d90a2]" onclick="changeSource('https://hsports4hd.blogspot.com/2026/02/disney2.html', this)">
          <span class="material-symbols-outlined">subscriptions</span>
          <span class="font-['Manrope'] text-[10px] font-bold uppercase tracking-widest mt-1">Disney+</span>
        </button>
        <button class="nav-item flex-1 h-full flex flex-col items-center justify-center text-[#8d90a2]" onclick="showAdsModal()">
          <span class="material-symbols-outlined">ad_units</span>
          <span class="font-['Manrope'] text-[10px] font-bold uppercase tracking-widest mt-1">Ads</span>
        </button>
        <a class="nav-item flex-1 h-full flex flex-col items-center justify-center text-[#8d90a2]" href="http://action_exit">
          <span class="material-symbols-outlined">logout</span>
          <span class="font-['Manrope'] text-[10px] font-bold uppercase tracking-widest mt-1">Salir</span>
        </a>
      </div>
    </nav>
    <div class="hidden fixed inset-0 z-[10000] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4" id="ads-modal">
      <div class="bg-[#0a0a0a] rounded-3xl w-full max-w-xl shadow-2xl border border-white/10 overflow-hidden">
        <div class="p-6 md:p-8 text-center space-y-8">
          <h2 class="text-xl md:text-2xl font-extrabold text-[#b0c6ff] tracking-tight uppercase">HSP⚽RTSEC Premium</h2>
          <p class="text-white/60 font-medium text-sm md:text-base">Espera un momento para continuar</p>
          <div class="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner relative border border-white/5">
            <iframe allow="autoplay" class="w-full h-full" frameborder="0" id="ads-iframe" src=""></iframe>
          </div>
          <div class="flex flex-col items-center justify-center py-6">
            <span class="absolute text-white font-black text-4xl tabular-nums" id="countdown-text">15</span>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.innerHTML += menuHTML;
});

// Funciones
function changeSource(url, element) {
  const iframe = document.getElementById('content-frame');
  if (iframe && iframe.src !== url) {
    iframe.src = url;
  }
  const items = document.querySelectorAll('.nav-item');
  items.forEach(item => {
    item.classList.remove('bg-[#2e4287]', 'text-[#b0c6ff]');
    item.classList.add('text-[#8d90a2]');
  });
  element.classList.add('bg-[#2e4287]', 'text-[#b0c6ff]');
  element.classList.remove('text-[#8d90a2]');
}

function showAdsModal() {
  const modal = document.getElementById('ads-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
}

function closeAdsModal() {
  const modal = document.getElementById('ads-modal');
  if (!modal) return;
  modal.classList.add('hidden');
}
