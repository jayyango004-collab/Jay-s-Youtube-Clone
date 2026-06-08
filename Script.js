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
}
];

const shorts = [
{
title:"Dance Short",
thumbnail:"https://img.youtube.com/vi/ngluDfs6BYI/hqdefault.jpg",
url:"https://www.youtube.com/shorts/ngluDfs6BYI"
}
];

const grid = document.getElementById("videoGrid");
const shortsRow = document.getElementById("shortsRow");
const search = document.getElementById("searchInput");

function renderVideos(list){
grid.innerHTML="";
list.forEach(v=>{
grid.innerHTML += `
<a class="video-card" href="${v.url}" target="_blank">

<div class="thumb-wrapper">
<img src="${v.thumbnail}">
<span class="duration">${v.duration}</span>
</div>

<div class="video-info">
<div class="video-text">
<h4>${v.title}</h4>
<p>${v.channel} • ${v.views} • ${v.date}</p>
</div>
</div>

</a>`;
});
}

function renderShorts(){
shortsRow.innerHTML="";
shorts.forEach(s=>{
shortsRow.innerHTML += `
<a class="shorts-card" href="${s.url}" target="_blank">
<img src="${s.thumbnail}">
</a>`;
});
}

renderVideos(videos);
renderShorts();

/* SEARCH */
search.addEventListener("input", e=>{
const val = e.target.value.toLowerCase();
renderVideos(videos.filter(v=>v.title.toLowerCase().includes(val)));
});

/* DARK MODE */
document.getElementById("darkBtn").onclick=()=>{
document.body.classList.toggle("dark");
};

/* TOGGLES */
document.getElementById("subsBtn").onclick=()=>{
document.getElementById("subsList").classList.toggle("hidden");
};

document.getElementById("youBtn").onclick=()=>{
document.getElementById("youList").classList.toggle("hidden");
};