const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));
document.getElementById("open").onclick=()=>document.querySelector(".bouquet").scrollIntoView({behavior:"smooth"});
function petal(){let p=document.createElement("i");p.className="fall";p.style.left=Math.random()*100+"vw";p.style.setProperty("--x",(Math.random()*220-110)+"px");p.style.animationDuration=5+Math.random()*5+"s";document.querySelector(".petals").appendChild(p);setTimeout(()=>p.remove(),11000)}setInterval(petal,850);
document.getElementById("music").onclick=()=>window.open("https://www.youtube.com/results?search_query=From+The+Start+Laufey","_blank");
