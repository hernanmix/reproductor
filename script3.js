document.addEventListener("DOMContentLoaded", () => {
  // Verificar si estamos en la aplicación (APK)
  const isApp = window.location.href.includes("appcreator24"); // Detecta si está en la APK, cambia esto si tienes otra forma de hacerlo.
  
  // Verificar si ya se mostró la intro en esta sesión (usamos localStorage para mantener el estado entre sesiones)
  if (!localStorage.getItem("introShown") && isApp && window.location.href === "https://hernanmix.github.io/reproductor/ap-hsportsec.html") {
    // Crear contenedor de intro
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

    // Imagen centrada (reemplaza el texto HSP⚽RTSEC)
    const img = document.createElement("img");
    img.src = "https://hernanmix.github.io/reproductor/fifa2026.jpg";
    img.alt = "Intro FIFA 2026";
    img.style.cssText = `
      max-width:90%;
      max-height:90%;
      border-radius:20px;
      box-shadow:0 0 30px rgba(0,0,0,0.8);
    `;

    // Audio
    const audio = document.createElement("audio");
    audio.id = "intro-audio";
    audio.src = "https://hernanmix.github.io/reproductor/audio.mp3";
    audio.autoplay = true;

    // Insertar en DOM
    intro.appendChild(img);
    intro.appendChild(audio);
    document.body.appendChild(intro);

    // Intentar reproducir (en AppCreator24 sí suena, en web puede requerir interacción)
    audio.play().catch(err => console.log("Autoplay bloqueado:", err));

    // Ocultar intro después de 4 segundos
    setTimeout(() => {
      intro.style.opacity = "0";
      setTimeout(() => {
        intro.style.display = "none";
      }, 1000);
    }, 4000);

    // Guardar que ya se mostró la intro en esta sesión usando localStorage
    localStorage.setItem("introShown", "true");
  }

  // Detecta si el usuario navega dentro de la aplicación y no necesita ver el intro nuevamente
  if (isApp && localStorage.getItem("introShown") && window.location.href !== "https://hernanmix.github.io/reproductor/ap-hsportsec.html") {
    // No hacer nada si ya se mostró la intro en esta sesión y estamos navegando a otra sección interna
    return;
  }
});
