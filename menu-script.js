document.write(`
<nav class="fixed bottom-0 left-0 w-full bg-custom-dark border-t border-gray-800 shadow-2xl z-40 overflow-hidden">
  <div class="shine-effect"></div>
  <div class="flex justify-around items-center h-16 relative z-10">
    <a href="https://hsports4hd.blogspot.com/p/hsportstv.html?m=1" class="nav-btn flex flex-col items-center justify-center text-gray-400 hover:text-white transition-colors">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
      </svg>
      <span class="text-[10px] mt-1 font-bold">MENU</span>
    </a>
    <!-- Repite para TV, DONAR, SERMON, ADS -->
  </div>
</nav>

<!-- Modal Ads -->
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
