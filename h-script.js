document.addEventListener("DOMContentLoaded", () => {
  // Actualizar fecha automáticamente
  const fecha = new Date();
  const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("agenda-title").innerText = "Agenda - " + fecha.toLocaleDateString('es-ES', opciones);

  // Leer JSON desde GitHub
  fetch("https://hernanmix.github.io/reproductor/hsports.json")
    .then(res => res.json())
    .then(data => {
      const agendaList = document.getElementById("agenda-list");

      data.forEach(ev => {
        // <li class="FLAG">
        const li = document.createElement("li");
        li.className = ev.flag;

        // <a>Evento<span class="t">Hora</span></a>
        const a = document.createElement("a");
        a.href = "#";
        a.innerHTML = `${ev.event}<span class="t">${ev.start}</span>`;
        li.appendChild(a);

        // <ul> con canales
        const ul = document.createElement("ul");
        ul.style.display = "none";

        ev.channels.forEach(ch => {
          const liChannel = document.createElement("li");
          liChannel.className = "subitem1";

          const aChannel = document.createElement("a");
          aChannel.href = ch.url;
          aChannel.target = "_blank";
          aChannel.innerHTML = `${ch.name}<span>${ch.quality}</span>`;

          liChannel.appendChild(aChannel);
          ul.appendChild(liChannel);
        });

        li.appendChild(ul);
        agendaList.appendChild(li);
      });

      // Activar acordeón (igual que tu plantilla original)
      const menu_ul = document.querySelectorAll('.menu > li > ul');
      const menu_a = document.querySelectorAll('.menu > li > a');

      menu_ul.forEach(u => u.style.display = "none");

      menu_a.forEach(a => {
        a.addEventListener("click", function(e) {
          e.preventDefault();
          if (!this.classList.contains("active")) {
            menu_a.forEach(x => x.classList.remove("active"));
            menu_ul.forEach(u => u.style.display = "none");
            this.classList.add("active");
            this.nextElementSibling.style.display = "block";
          } else {
            this.classList.remove("active");
            this.nextElementSibling.style.display = "none";
          }
        });
      });
    })
    .catch(err => console.error("Error cargando JSON:", err));
});
