const start=document.getElementById("start");start.addEventListener("click",()=>document.querySelector(".intro").scrollIntoView({behavior:"smooth"}));
const toast=document.getElementById("toast"), music=document.getElementById("musicBtn");setTimeout(()=>toast.classList.add("show"),1800);
music.addEventListener("click",()=>window.open("https://www.youtube.com/results?search_query=From+The+Start+Laufey","_blank"));
function petal(){const p=document.createElement("i");p.className="petal";p.style.left=Math.random()*100+"vw";p.style.setProperty("--drift",(Math.random()*220-110)+"px");p.style.animationDuration=(6+Math.random()*6)+"s";document.getElementById("petals").appendChild(p);setTimeout(()=>p.remove(),13000)}setInterval(petal,900);
