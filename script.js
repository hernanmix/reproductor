// Inyectar estilos CSS directamente desde JavaScript
const estilo = document.createElement("style");
estilo.textContent = `
  .marcador-container {
    position: relative;
    width: 100%;
    height: 48px;
    margin-top: 6px;
  }
  .barra-progreso {
    position: absolute;
    top: 30px;
    left: 0;
    height: 8px;
    background-color: #00ff00;
    width: 0%;
    transition: width 1s linear;
    border-radius: 4px;
  }
  .minuto-overlay {
    position: absolute;
    top: 0;
    font-size: 14px;
    font-weight: bold;
    color: white;
    background-color: red;
    padding: 4px 8px;
    border-radius: 50%;
    text-align: center;
    min-width: 32px;
    transition: left 1s linear;
    display: none; /* oculto hasta que empiece */
  }
  .hora-evento {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
  }
  .estado {
    display: none !important;
  }
`;
document.head.appendChild(estilo);

// Lógica de rayita + marcador
document.addEventListener("DOMContentLoaded", function () {
  const eventos = document.querySelectorAll(".evento");

  eventos.forEach((evento, index) => {
    const hora = new Date(evento.getAttribute("data-hora")).getTime();

    const estadoSpan = evento.querySelector(".estado");
    if (estadoSpan) estadoSpan.style.display = "none";

    const marcador = document.createElement("div");
    marcador.className = "marcador-container";
    marcador.innerHTML = `
      <div class="hora-evento" id="hora-${index}"></div>
      <div class="barra-progreso" id="barra-${index}"></div>
      <div class="minuto-overlay" id="minuto-${index}">1'</div>
    `;
    evento.appendChild(marcador);

    const barra = document.getElementById(`barra-${index}`);
    const minuto = document.getElementById(`minuto-${index}`);
    const horaEl = document.getElementById(`hora-${index}`);
    let ultimaPosicionET = null;

    // Mostrar la hora programada del evento
    const fecha = new Date(hora);
    let h = fecha.getHours();
    let m = fecha.getMinutes().toString().padStart(2, "0");
    const ampm = h >= 12 ? "pm" : "am";
    h = h % 12 || 12;
    horaEl.textContent = `${h}:${m}${ampm}`;

    function actualizarMinuto() {
      const ahora = Date.now();
      const minutosPasados = Math.floor((ahora - hora) / 60000);
      let porcentaje = 0;
      let texto = "";

      if (minutosPasados < 0) {
        porcentaje = 0;
        texto = "";
        minuto.style.display = "none"; // antes de empezar, oculto
      } else if (minutosPasados <= 45) {
        porcentaje = (minutosPasados / 120) * 100;
        texto = minutosPasados + "'";
        minuto.style.display = "block"; // mostrar bolita al iniciar
      } else if (minutosPasados <= 60) {
        porcentaje = (45 / 120) * 100;
        texto = "ET";
        if (ultimaPosicionET === null) {
          ultimaPosicionET = porcentaje;
        }
      } else if (minutosPasados <= 120) {
        const segundoTiempo = minutosPasados - 15;
        porcentaje = (segundoTiempo / 120) * 100;
        texto = segundoTiempo + "'";
      } else {
        porcentaje = 100;
        texto = "FT";
      }

      barra.style.width = porcentaje + "%";
      minuto.textContent = texto;

      if (texto === "ET" && ultimaPosicionET !== null) {
        minuto.style.left = `calc(${ultimaPosicionET}% - 16px)`;
      } else {
        minuto.style.left = `calc(${porcentaje}% - 16px)`;
      }
    }

    actualizarMinuto();
    setInterval(actualizarMinuto, 1000);
  });
});
