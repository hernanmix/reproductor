const eventsContainer = document.getElementById("events");
const channelsContainer = document.getElementById("channels");

function getStatus(start, end) {
  const now = new Date();
  const s = new Date(start);
  const e = new Date(end);

  if (now < s) return "upcoming";
  if (now >= s && now <= e) return "live";
  return "finished";
}

function timeAgo(start) {
  const now = new Date();
  const diff = Math.floor((now - new Date(start)) / 60000);

  if (diff < 60) return `Comenzó hace ${diff} min`;
  return `Comenzó hace ${Math.floor(diff/60)}h ${diff%60}m`;
}

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
});
