(function() {
  // Crear contenedor principal
  const container = document.createElement("div");
  container.id = "countdown-container-fifa"; // ID único
  container.style.backgroundColor = "#0033a0";
  container.style.textAlign = "center";
  container.style.padding = "10px";
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.gap = "20px";

  // 🔹 Ocultar al inicio
  container.style.display = "none";

  // Logo FIFA
  const logo = document.createElement("img");
  logo.src = "https://digitalhub.fifa.com/transform/7189acb1-8453-4a14-8248-70ab7a76f372/FWC-26-Logo-for-Countdown?&io=transform:fill&quality=75";
  logo.alt = "FIFA World Cup 2026";
  logo.style.maxWidth = "120px";
  logo.style.height = "auto";

  // Contenedor del contador
  const countdown = document.createElement("div");
  countdown.id = "countdown-fifa"; // ID único
  countdown.style.color = "white";
  countdown.style.fontFamily = "Arial, sans-serif";
  countdown.style.display = "flex";
  countdown.style.gap = "20px";

  // Crear cajas con número arriba y etiqueta abajo
  function createBox(id, label) {
    const box = document.createElement("div");
    box.style.textAlign = "center";
    const num = document.createElement("div");
    num.id = "fifa-" + id; // IDs únicos
    num.style.fontSize = "28px";
    num.style.fontWeight = "bold";
    const txt = document.createElement("div");
    txt.innerText = label;
    txt.style.fontSize = "14px";
    box.appendChild(num);
    box.appendChild(txt);
    return box;
  }

  countdown.appendChild(createBox("days", "Días"));
  countdown.appendChild(createBox("hours", "Horas"));
  countdown.appendChild(createBox("minutes", "Min"));
  countdown.appendChild(createBox("seconds", "Seg"));

  // Insertar elementos
  container.appendChild(logo);
  container.appendChild(countdown);
  document.body.insertBefore(container, document.body.firstChild);

  // ⚽ Fecha objetivo fija
  const targetDate = new Date("June 11, 2026 15:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById("fifa-days").innerText = "0";
      document.getElementById("fifa-hours").innerText = "00";
      document.getElementById("fifa-minutes").innerText = "00";
      document.getElementById("fifa-seconds").innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("fifa-days").innerText = days;
    document.getElementById("fifa-hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("fifa-minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("fifa-seconds").innerText = seconds.toString().padStart(2, "0");
  }

  // 🔹 Mostrar todo el reloj después de 16 segundos
  setTimeout(() => {
    container.style.display = "flex"; // ahora aparece el bloque completo
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }, 16000);
})();
