const grid = document.getElementById("videoGrid");
const shortsRow = document.getElementById("shortsRow");

/* VIDEOS */
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
duration:"1:10:00",
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
function renderVideos(videoList = videos) {

  grid.innerHTML = videoList.map(v => `
    <a class="video-card" href="${v.url}" target="_blank">

      <div class="thumb-wrapper">
        <img src="${v.thumbnail}" alt="${v.title}">
        <span class="duration">${v.duration || ""}</span>
      </div>

      <div class="video-info">

  <div class="video-text">
    <h4>${v.title}</h4>
    <p>${v.channel}</p>
    <p>${v.views} • ${v.date}</p>
  </div>

  <div class="video-menu">
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>

</div>

    </a>
  `).join("");

}


/* RENDER SHORTS */
function renderShorts(){
if(!shortsRow) return;

shortsRow.innerHTML = shorts.map(s => `     <a class="shorts-card" href="${s.url}" target="_blank">       <img src="${s.thumbnail}" alt="${s.title}">       <h4>${s.title}</h4>     </a>
  `).join("");
}

/* SEARCH */
const searchInput = document.getElementById("searchInput");

if(searchInput){
searchInput.addEventListener("keyup", () => {

```
const term = searchInput.value.toLowerCase();

const filtered = videos.filter(video =>
  video.title.toLowerCase().includes(term) ||
  video.channel.toLowerCase().includes(term) ||
  video.category.toLowerCase().includes(term)
);

renderVideos(filtered);
```

});
}

/* DARK MODE */
const darkBtn = document.getElementById("darkBtn");

if(darkBtn){
darkBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
});
}

/* SIDEBAR TOGGLE */
const subsBtn = document.getElementById("subsBtn");
const youBtn = document.getElementById("youBtn");
const seeMore = document.getElementById("seeMore");

const subsList = document.getElementById("subsList");
const youList = document.getElementById("youList");

let moreOpen = false;

/* SUBSCRIPTIONS TOGGLE */
if(subsBtn){
  subsBtn.addEventListener("click", () => {
    subsList.classList.toggle("hidden");
  });
}

/* YOU TOGGLE */
if(youBtn){
  youBtn.addEventListener("click", () => {
    youList.classList.toggle("hidden");
  });
}

/* SHOW MORE */
if(seeMore){
  seeMore.addEventListener("click", () => {
    moreOpen = !moreOpen;

    document.querySelectorAll(".hidden-more").forEach(el => {
      el.style.display = moreOpen ? "block" : "none";
    });

    seeMore.innerHTML = moreOpen
      ? 'Show less <span>▲</span>'
      : 'Show more <span>▼</span>';
  });
}

/* INIT */
renderVideos();
renderShorts();
