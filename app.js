const eventsContainer = document.getElementById("events");
const channelsContainer = document.getElementById("channels");


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

    // eliminar finalizados después de 1 min
    if (status === "finished" && (now - endTime) > 60000) return;

    const card = document.createElement("div");
    card.className = "card";

    const label =
      status === "live"
        ? "⚡ EN VIVO"
        : status === "upcoming"
        ? "PRÓXIMAMENTE"
        : "FINALIZADO";

    if (status === "finished") {
      card.style.opacity = "0.4";
    }

    card.innerHTML = `
      <div class="img-container">
        <img src="${ev.image}">
        <span class="badge bottom-left ${status}">${label}</span>
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

    // 🔒 solo abre si está en vivo
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
            <span class="badge live top-left">⚡ EN VIVO</span>
          </div>
        `;

        // siempre activo
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
// 🔄 CARGA DE EVENTOS
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
