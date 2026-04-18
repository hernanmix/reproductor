async function loadEvents() {
  const container = document.querySelector("#events");
  const res = await fetch("events.json");
  const events = await res.json();

  events.forEach(ev => {
    const card = document.createElement("div");
    card.className = "flex flex-col gap-6 w-full items-center match-card";
    card.dataset.startTime = ev.start;

    card.innerHTML = `
      <div class="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
        <img alt="" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="${ev.img}"/>
        <div class="absolute inset-0 card-overlay"></div>
        <div class="absolute top-6 right-8 z-10">
          <span class="text-white font-headline font-black text-xs md:text-sm lg:text-base tracking-[0.3em]">HSPORTSEC</span>
        </div>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-6 gap-2 md:gap-4">
          <span class="status-label text-primary font-headline font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter pulse-animation">Pendiente</span>
          <h2 class="text-white font-headline font-bold text-2xl md:text-4xl lg:text-5xl tracking-tight drop-shadow-2xl max-w-[90%] leading-tight">${ev.title}</h2>
        </div>
      </div>
      <a class="w-[90%] md:w-[85%] bg-[#26A5E4] text-white py-4 md:py-6 rounded-full font-black text-lg md:text-xl lg:text-2xl tracking-widest hover:brightness-110 active:scale-[0.97] transition-all shadow-2xl shadow-[#26A5E4]/40 flex items-center justify-center uppercase" href="${ev.url}" target="_blank">
        QUIERO VER
      </a>
    `;
    container.appendChild(card);
  });
}

loadEvents();
