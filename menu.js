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
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.1) 50%,
      rgba(255,255,255,0) 100%
    );
    transform: skewX(-25deg);
    animation: shine 4s infinite;
    pointer-events: none;
  }
  .bg-custom-dark { background-color: #050b18; }
</style>

<nav class="fixed bottom-0 left-0 w-full bg-custom-dark border-t border-gray-800 shadow-2xl z-40 overflow-hidden">
  <div class="shine-effect"></div>
  <div class="flex justify-around items-center h-16 relative z-10">
    <a href="URL_INICIO" class="nav-btn">…</a>
    <a href="URL_TV" class="nav-btn">…</a>
    <a href="URL_DONAR" class="nav-btn">…</a>
    <a href="URL_DISNEY" class="nav-btn">…</a>
    <button class="nav-btn" onclick="startAds();">ADS</button>
  </div>
</nav>

<div id="ads-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
  … contenido del modal …
</div>
`);
