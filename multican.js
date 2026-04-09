(function(){
  // Crear el botón
  const btn = document.createElement("button");
  btn.id = "multiBtn";
  btn.textContent = "MultiCanHD";
  btn.style.cssText = `
    padding:15px 40px;
    font-size:24px;
    font-weight:bold;
    color:#fff;
    background:linear-gradient(135deg,#ff0000,#9900ff);
    border:none;
    border-radius:8px;
    cursor:pointer;
    margin-bottom:10px;
  `;

  // Crear contenedor del iframe
  const container = document.createElement("div");
  container.id = "iframeContainer";
  container.style.cssText = `
    display:none; position:fixed; top:0; left:0;
    width:100%; height:100%; background:#000;
    z-index:999;
  `;

  // Botón de cerrar ❌
  const closeBtn = document.createElement("button");
  closeBtn.id = "closeBtn";
  closeBtn.textContent = "❌";
  closeBtn.style.cssText = `
    position:absolute; top:10px; right:20px;
    padding:10px 15px; font-size:22px; font-weight:bold;
    color:#fff; background:rgba(255,0,0,0.3);
    border:none; border-radius:50%; cursor:pointer;
    z-index:1000;
  `;

  // Iframe vacío
  const frame = document.createElement("iframe");
  frame.id = "multiFrame";
  frame.src = "";
  frame.style.cssText = "width:100%; height:100%; border:none;";

  // Armar estructura
  container.appendChild(closeBtn);
  container.appendChild(frame);

  // Insertar el botón arriba del texto HSPORTSECTV-HD🇪🇨
  const target = document.querySelector("h2"); // tu <h2> existente
  if(target){
    target.parentNode.insertBefore(btn, target);
  }
  document.body.appendChild(container);

  // Funciones
  btn.onclick = () => {
    frame.src = "https://hernanmix.github.io/reproductor/scrapeado.html";
    container.style.display = "block";
    if (container.requestFullscreen) container.requestFullscreen();
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock("landscape").catch(()=>{});
    }
  };

  closeBtn.onclick = () => {
    frame.src = ""; // detener transmisión
    container.style.display = "none";
    if (document.exitFullscreen) document.exitFullscreen();
  };
})();
