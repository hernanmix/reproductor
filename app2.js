const eventsContainer = document.getElementById("events");
const channelsContainer = document.getElementById("channels");


// ⚡ SVG LIVE ICON
const liveSVG = `
<svg class="icon-live" viewBox="-23.6 -23.6 384.39 384.39" xmlns="http://www.w3.org/2000/svg">
  <g>
    <polygon style="fill:#ffffff;" points="168.595,0 168.595,204.521 276.356,204.521"></polygon>
    <polygon style="fill:#ffffff;" points="60.834,132.669 168.595,337.19 168.595,132.669"></polygon>
  </g>
</svg>
`;


// ========================
// 🔥 ESTADO DE EVENTOS
// ========================
function getStatus(start, end) {
  const now = new Date();
  const s = new Date(start);
  const e = new Date(end);

  if (isNaN(s) || isNaN(e)) return "invalid";

  if (now < s) return "upcoming";
  if (now >= s && now <= e) return "live";
  return "finished";
}


// ========================
// 🕒 TIEMPO TRANSCURRIDO
// ========================
function timeAgo(start) {
  const now = new Date();
  const diff = Math.floor((now - new Date(start)) / 60000);

  if (diff < 1) return "Comenzó ahora";
  if (diff < 60) return `Comenzó hace ${diff} min`;
  return `Comenzó hace ${Math.floor(diff / 60)}h ${diff % 60}m`;
}


// ========================
// 🎬 RENDER EVENTOS
// ========================
function renderEvents(data) {
  eventsContainer.innerHTML = "";

  data.forEach(ev => {
    const status = getStatus(ev.start, ev.end);

    if (status === "invalid") return;

    const now = new Date();
    const endTime = new Date(ev.end);

    if (status === "finished" && (now - endTime) > 60000) return;

    const card = document.createElement("div");
    card.className = "card";

    const label =
      status === "live"
        ? `<span class="badge live bottom-left">${liveSVG} EN VIVO</span>`
        : status === "upcoming"
        ? `<span class="badge upcoming bottom-left">PRÓXIMAMENTE</span>`
        : `<span class="badge finished bottom-left">FINALIZADO</span>`;

    if (status === "finished") {
      card.style.opacity = "0.4";
    }

    card.innerHTML = `
      <div class="img-container">
        <img src="${ev.image}">
        ${label}
      </div>

      <div style="padding:10px">
        <small>
          ${
            status === "live"
              ? timeAgo(ev.start)
              : new Date(ev.start).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
          }
        </small>

        <h3>${ev.title}</h3>
        <p>${ev.league}</p>
      </div>
    `;

    if (status === "live") {
      card.style.cursor = "pointer";
      card.onclick = () => window.open(ev.url);
    } else {
      card.style.cursor = "not-allowed";
    }

    eventsContainer.appendChild(card);
  });
}


// ========================
// 📺 RENDER CANALES ESPN
// ========================
function loadChannels() {
  fetch("channels.json")
    .then(res => res.json())
    .then(data => {
      channelsContainer.innerHTML = "";

      data.forEach(ch => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <div class="img-container">
            <img src="${ch.image}">
            <span class="badge live top-left">${liveSVG} EN VIVO</span>
          </div>
        `;

        card.style.cursor = "pointer";
        card.onclick = () => window.open(ch.url);

        channelsContainer.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error cargando canales:", err);
    });
}


// ========================
// 🔄 CARGA
// ========================
function loadEvents() {
  fetch("events.json")
    .then(res => res.json())
    .then(data => renderEvents(data))
    .catch(err => {
      console.error("Error cargando eventos:", err);
      eventsContainer.innerHTML = "<p>Error cargando eventos</p>";
    });
}


// ========================
// 🔁 AUTO REFRESH
// ========================
setInterval(() => {
  loadEvents();
  loadChannels();
}, 30000);


// INIT
loadEvents();
loadChannels();
