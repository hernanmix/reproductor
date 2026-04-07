(function(){
  // Crear contenedor flotante
  const overlay = document.createElement("div");
  overlay.id = "floating-ad";
  overlay.style.position = "fixed";
  overlay.style.top = "10px";
  overlay.style.right = "10px";
  overlay.style.width = "320px";
  overlay.style.height = "180px";
  overlay.style.background = "#000";
  overlay.style.borderRadius = "8px";
  overlay.style.overflow = "hidden";
  overlay.style.display = "none";
  overlay.style.zIndex = "9999";
  overlay.style.boxShadow = "0 0 10px rgba(0,0,0,0.6)";

  // Iframe del anuncio
  const frame = document.createElement("iframe");
  frame.style.width = "100%";
  frame.style.height = "100%";
  frame.style.border = "none";
  frame.allow = "autoplay";
  overlay.appendChild(frame);

  // Contador
  const timerBox = document.createElement("div");
  timerBox.id = "ad-timer";
  timerBox.style.position = "absolute";
  timerBox.style.bottom = "5px";
  timerBox.style.right = "10px";
  timerBox.style.background = "rgba(0,0,0,0.7)";
  timerBox.style.color = "#fff";
  timerBox.style.fontSize = "14px";
  timerBox.style.padding = "2px 6px";
  timerBox.style.borderRadius = "4px";
  overlay.appendChild(timerBox);

  document.body.appendChild(overlay);

  // Configuración
  const adUrl = "https://annoyingnightmareedit.com/sx8hwavut?key=12d54e488207e905a50e1b60079637db";
  const showInterval = 5 * 60 * 1000; // cada 5 minutos
  const showDuration = 15; // segundos visibles

  function showAd() {
    frame.src = adUrl;
    overlay.style.display = "block";
    let remaining = showDuration;
    timerBox.innerText = remaining + "s";

    const countdown = setInterval(() => {
      remaining--;
      timerBox.innerText = remaining + "s";
      if (remaining <= 0) {
        clearInterval(countdown);
        overlay.style.display = "none";
        frame.src = "";
      }
    }, 1000);
  }

  // Primera aparición después de 5 minutos
  setTimeout(showAd, showInterval);
  // Repetir cada 5 minutos
  setInterval(showAd, showInterval);
})();
