document.addEventListener("DOMContentLoaded", () => {
  const intro = document.createElement("div");
  intro.id = "intro";
  intro.style.cssText = `
    position:fixed;
    top:0;left:0;
    width:100%;height:100%;
    background:black;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:9999;
    transition:opacity 1s ease;
  `;

  const box = document.createElement("div");
  box.textContent = "HSP⚽RTSEC";
  box.style.cssText = `
    background:#b91c1c; /* rojo intenso */
    color:white;
    font-size:clamp(2rem, 6vw, 4rem); /* ajusta según pantalla */
    font-weight:bold;
    padding:20px 40px;
    border-radius:30px; /* esquinas redondeadas */
    text-align:center;
    box-shadow:0 0 30px rgba(0,0,0,0.8);
    max-width:90%;
    word-wrap:break-word;
  `;

  const audio = document.createElement("audio");
  audio.id = "intro-audio";
  audio.src = "https://hernanmix.github.io/reproductor/audio.mp3";
  audio.autoplay = true;

  intro.appendChild(box);
  intro.appendChild(audio);
  document.body.appendChild(intro);

  // Intenta reproducir automáticamente (en app nativa funciona, en web puede requerir interacción)
  audio.play().catch(err => console.log("Autoplay bloqueado:", err));

  // Oculta la intro después de 4 segundos con fade-out
  setTimeout(() => {
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
    }, 1000);
  }, 4000);
});
