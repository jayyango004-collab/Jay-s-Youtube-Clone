const grid = document.getElementById("videoGrid");
const shortsRow = document.getElementById("shortsRow");

/* SAFE CHECK (prevents silent crash) */
if (!grid || !shortsRow) {
  console.error("Missing #videoGrid or #shortsRow in HTML");
}

/* VIDEOS (UNCHANGED) */
const videos = [
{
title:"JavaScript Crash Course",
channel:"Tech World",
views:"1.2M views",
date:"2 weeks ago",
duration:"12:45",
thumbnail:"https://img.youtube.com/vi/upDLs1sn7g4/hqdefault.jpg",
url:"https://www.youtube.com/watch?v=upDLs1sn7g4",
category:"Coding"
},
{
title:"React Tutorial",
channel:"Code Academy",
views:"890K views",
date:"1 month ago",
duration:"18:10",
thumbnail:"https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
url:"https://www.youtube.com/watch?v=w7ejDZ8SWv8",
category:"Coding"
},
{
title:"HTML Full Course",
channel:"Programming Hub",
views:"2.5M views",
date:"6 months ago",
duration:"25:00",
thumbnail:"https://img.youtube.com/vi/pQN-pnXPaVg/hqdefault.jpg",
url:"https://www.youtube.com/watch?v=pQN-pnXPaVg",
category:"Coding"
},
{
title:"Tyla - Water",
channel:"Tyla",
views:"85M views",
date:"1 year ago",
duration:"3:20",
thumbnail:"https://img.youtube.com/vi/XoiOOiuH8iI/hqdefault.jpg",
url:"https://www.youtube.com/watch?v=XoiOOiuH8iI",
category:"Music"
},
{
title:"Superman Trailer",
channel:"DC",
views:"18M views",
date:"2 months ago",
duration:"2:40",
thumbnail:"https://img.youtube.com/vi/uhUht6vAsMY/hqdefault.jpg",
url:"https://www.youtube.com/watch?v=uhUht6vAsMY",
category:"Movies"
},
{
title:"TYLA - She Did It Again",
channel:"KYLE HANAGAMI",
views:"294K views",
date:"1 month ago",
duration:"5:37",
thumbnail:"https://img.youtube.com/vi/MkClP-o-S54/hqdefault.jpg",
url:"https://www.youtube.com/watch?v=MkClP-o-S54",
category:"Dance"
},
{
title:"Mega Blockbuster Year",
channel:"Movietime",
views:"34K views",
date:"4 months ago",
duration:"2:40",
thumbnail:"https://img.youtube.com/vi/MkClP-o-S54/hqdefault.jpg",
url:"https://www.youtube.com/watch?v=MkClP-o-S54",
category:"Movies"
},
{
title:"Met Gala 2026",
channel:"Vogue",
views:"17M views",
date:"1 month ago",
duration:"2:39:00",
thumbnail:"https://img.youtube.com/vi/hCjBNYbN_1I/hqdefault.jpg",
url:"https://www.youtube.com/watch?v=hCjBNYbN_1I",
category:"Fashion"
},
{
title:"R&B Playlist",
channel:"Chill R&B Tapes",
views:"2.5M views",
date:"2 months ago",
thumbnail:"https://img.youtube.com/vi/i8W-LdXKT6s/hqdefault.jpg",
url:"https://www.youtube.com/watch?v=i8W-LdXKT6s",
category:"Music"
}
];

/* SHORTS */
const shorts = [
{
title:"Dance Short",
thumbnail:"https://img.youtube.com/vi/ngluDfs6BYI/hqdefault.jpg",
url:"https://www.youtube.com/shorts/ngluDfs6BYI"
},
{
title:"Go Crazy",
thumbnail:"https://img.youtube.com/vi/8cdPfa3dRbE/hqdefault.jpg",
url:"https://www.youtube.com/shorts/8cdPfa3dRbE"
},
{
title:"Parenting Moment",
thumbnail:"https://img.youtube.com/vi/QT3eOe_ed9k/hqdefault.jpg",
url:"https://www.youtube.com/shorts/QT3eOe_ed9k"
},
{
title:"Calm Mind",
thumbnail:"https://img.youtube.com/vi/U5tBGxKhUPo/hqdefault.jpg",
url:"https://www.youtube.com/shorts/U5tBGxKhUPo"
},
{
title:"Funny Clip",
thumbnail:"https://img.youtube.com/vi/ick_ikiWAOE/hqdefault.jpg",
url:"https://www.youtube.com/shorts/ick_ikiWAOE"
},
{
title:"Art Short",
thumbnail:"https://img.youtube.com/vi/qHjr_ldwCg4/hqdefault.jpg",
url:"https://www.youtube.com/shorts/qHjr_ldwCg4"
}
];

/* RENDER VIDEOS */
function renderVideos() {
  grid.innerHTML = videos.map(v => `
    <a class="video-card" href="${v.url}" target="_blank">
      <div class="thumb-wrapper">
        <img src="${v.thumbnail}">
        <span class="duration">${v.duration || ""}</span>
      </div>

      <div class="video-info">
        <div class="video-text">
          <h4>${v.title}</h4>
          <p>${v.channel} • ${v.views} • ${v.date}</p>
        </div>
      </div>
    </a>
  `).join("");
}

/* RENDER SHORTS */
function renderShorts() {
  shortsRow.innerHTML = shorts.map(s => `
    <a class="shorts-card" href="${s.url}" target="_blank">
      <img src="${s.thumbnail}">
    </a>
  `).join("");
}

/* SIDEBAR */
const subsBtn = document.getElementById("subsBtn");
const subsList = document.getElementById("subsList");
const subsArrow = document.querySelector("#subsBtn .arrow");

const youBtn = document.getElementById("youBtn");
const youList = document.getElementById("youList");

const youArrow = document.querySelector("#youBtn .arrow");

subsBtn.addEventListener("click", () => {
  subsList.classList.toggle("hidden");

  if (subsList.classList.contains("hidden")) {
    subsArrow.textContent = "▶";
  } else {
    subsArrow.textContent = "▼";
  }
});

youBtn.addEventListener("click", () => {
  youList.classList.toggle("hidden");

  if (youList.classList.contains("hidden")) {
    youArrow.textContent = "▶";
  } else {
    youArrow.textContent = "▼";
  }
});

/* DARK MODE */
document.getElementById("darkBtn")?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const categoryContainer = document.querySelector(".categories");

document.querySelector(".right-btn").addEventListener("click", () => {
  categoryContainer.scrollBy({
    left: 300,
    behavior: "smooth"
  });
});

document.querySelector(".left-btn").addEventListener("click", () => {
  categoryContainer.scrollBy({
    left: -300,
    behavior: "smooth"
  });
});

/* INIT */
renderVideos();
renderShorts();