document.addEventListener("DOMContentLoaded", () => {
  // Inserta el menú inferior dinámicamente
  const menuHTML = `
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
  `;
  document.body.insertAdjacentHTML("beforeend", menuHTML);
});

// Funciones encapsuladas
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
