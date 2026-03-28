// Crear contenedor principal
const container = document.createElement("div");
container.id = "countdown-container";
container.style.backgroundColor = "#0033a0";
container.style.textAlign = "center";
container.style.padding = "10px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.gap = "20px";

// Logo FIFA
const logo = document.createElement("img");
logo.src = "https://digitalhub.fifa.com/transform/7189acb1-8453-4a14-8248-70ab7a76f372/FWC-26-Logo-for-Countdown?&io=transform:fill&quality=75";
logo.alt = "FIFA World Cup 2026";
logo.style.maxWidth = "120px";
logo.style.height = "auto";

// Contador
const countdown = document.createElement("div");
countdown.id = "countdown";
countdown.style.color = "white";
countdown.style.fontSize = "20px";
countdown.style.fontWeight = "bold";
countdown.style.fontFamily = "Arial, sans-serif";

// Insertar elementos
container.appendChild(logo);
container.appendChild(countdown);
document.body.insertBefore(container, document.body.firstChild);

// ⚽ Fecha objetivo fija: calcula una sola vez y ponla aquí
// Ejemplo: si hoy es 28 marzo 2026 a las 11:40, entonces 75 días y 4 horas después es 12 junio 2026 a las 15:40
var targetDate = new Date("June 11, 2026 15:40:00").getTime();

function updateCountdown() {
  var now = new Date().getTime();
  var distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "¡Evento iniciado!";
    return;
  }

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML =
    days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";
}

setInterval(updateCountdown, 1000);
updateCountdown();

