const music = document.getElementById("music");
const openButton = document.getElementById("openButton");
const musicButton = document.getElementById("musicButton");
const musicPill = document.getElementById("musicPill");

let musicStarted = false;

async function startMusic(){
  try{
    await music.play();
    musicStarted = true;
    musicPill.classList.remove("paused");
    musicButton.textContent = "Ⅱ";
  }catch(e){
    musicPill.classList.add("paused");
  }
}

openButton.addEventListener("click", async () => {
  document.body.classList.add("opened");
  openButton.textContent = "Seu presente está aberto ♡";
  await startMusic();
  document.getElementById("carta").scrollIntoView({behavior:"smooth",block:"center"});
});

musicButton.addEventListener("click", async () => {
  if(music.paused){
    await startMusic();
  }else{
    music.pause();
    musicPill.classList.add("paused");
    musicButton.textContent = "▶";
  }
});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

function makePetal(){
  const p=document.createElement("span");
  p.className="petal-fall";
  p.textContent=Math.random()>.5 ? "✦" : "♡";
  p.style.left=Math.random()*100+"vw";
  p.style.fontSize=(8+Math.random()*10)+"px";
  p.style.animationDuration=(7+Math.random()*7)+"s";
  p.style.opacity=(.25+Math.random()*.45);
  document.body.appendChild(p);
  setTimeout(()=>p.remove(),15000);
}
setInterval(makePetal,850);

window.addEventListener("load",()=>{
  setTimeout(()=>document.querySelector(".intro")?.classList.add("visible"),700);
});
