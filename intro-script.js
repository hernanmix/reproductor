<!-- Intro -->
<div id="intro" style="position:fixed;top:0;left:0;width:100%;height:100%;background:black;display:flex;align-items:center;justify-content:center;z-index:9999;">
  <div style="
    background:#b91c1c;
    color:white;
    font-size:clamp(2rem, 6vw, 4rem); /* se adapta a cualquier pantalla */
    font-weight:bold;
    padding:20px 40px;
    border-radius:30px; /* esquinas redondeadas */
    text-align:center;
    box-shadow:0 0 30px rgba(0,0,0,0.8);
    max-width:90%; /* evita que se corte en pantallas pequeñas */
    word-wrap:break-word;
  ">
    HSP⚽RTSEC
  </div>
  <!-- Audio en mp3 -->
  <audio id="intro-audio" src="https://hernanmix.github.io/reproductor/audio.mp3" autoplay></audio>
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const audio = document.getElementById("intro-audio");

    // Reproduce automáticamente (en app nativa sí funciona, en web puede requerir interacción)
    audio.play().catch(err => console.log("Autoplay bloqueado:", err));

    // Oculta la intro después de 4 segundos
    setTimeout(() => {
      intro.style.transition = "opacity 1s ease";
      intro.style.opacity = "0";
      setTimeout(() => {
        intro.style.display = "none";
      }, 1000);
    }, 4000);
  });
</script>
