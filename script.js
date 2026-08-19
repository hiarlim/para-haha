const openBtn=document.getElementById("open");
const letterBtn=document.getElementById("letterBtn");
const bouquet=document.getElementById("bouquet");
const letter=document.getElementById("letter");
const memories=document.getElementById("memories");
const end=document.getElementById("end");
const audio=document.getElementById("audio");
const musicBtn=document.getElementById("musicBtn");

function show(el){el.classList.remove("hidden");el.classList.add("reveal");setTimeout(()=>el.classList.remove("reveal"),900)}
function petals(n=20){for(let i=0;i<n;i++){const p=document.createElement("div");p.className="petal";p.style.left=Math.random()*100+"%";p.style.setProperty("--drift",(Math.random()*180-90)+"px");p.style.animationDuration=(5+Math.random()*5)+"s";p.style.animationDelay=Math.random()*1.5+"s";document.getElementById("petals").appendChild(p);setTimeout(()=>p.remove(),11000)}}

openBtn.onclick=()=>{
  audio.volume=.65;
  audio.play().then(()=>musicBtn.textContent="❚❚").catch(()=>{});
  show(bouquet);petals(30);
  setTimeout(()=>bouquet.scrollIntoView({behavior:"smooth"}),120);
};
letterBtn.onclick=()=>{
  show(letter);petals(20);
  setTimeout(()=>{show(memories);setTimeout(()=>memories.scrollIntoView({behavior:"smooth"}),120);setTimeout(()=>show(end),900)},500);
};
musicBtn.onclick=()=>{
  if(audio.paused){audio.play();musicBtn.textContent="❚❚"}else{audio.pause();musicBtn.textContent="♫"}
};
