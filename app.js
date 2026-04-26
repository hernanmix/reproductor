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

fetch("events.json")
.then(res => res.json())
.then(data => {
  data.forEach(ev => {
    const status = getStatus(ev.start, ev.end);

    if (status === "finished") return;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div style="position:relative">
        <img src="${ev.image}">
        <span class="badge ${status}">
          ${status === "live" ? "⚡ EN VIVO" : "PRÓXIMAMENTE"}
        </span>
      </div>
      <div style="padding:10px">
        <small>
          ${status === "live" ? timeAgo(ev.start) : new Date(ev.start).toLocaleTimeString()}
        </small>
        <h3>${ev.title}</h3>
        <p>${ev.league}</p>
      </div>
    `;

    card.onclick = () => window.open(ev.url);
    eventsContainer.appendChild(card);
  });
});

fetch("channels.json")
.then(res => res.json())
.then(data => {
  data.forEach(ch => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div style="position:relative">
        <img src="${ch.image}">
        <span class="badge live">⚡ EN VIVO</span>
      </div>
      <div style="padding:10px">
        <h3>${ch.name}</h3>
      </div>
    `;

    card.onclick = () => window.open(ch.url);
    channelsContainer.appendChild(card);
  });
});
