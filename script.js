const openBtn = document.getElementById("openBtn");
const letterBtn = document.getElementById("letterBtn");
const bouquet = document.getElementById("bouquet");
const letter = document.getElementById("letter");
const ending = document.getElementById("ending");
const musicBtn = document.getElementById("musicBtn");

function reveal(element) {
  element.classList.remove("hidden");
  element.classList.add("reveal");

  setTimeout(() => {
    element.classList.remove("reveal");
  }, 1000);
}

function createPetals(amount = 18) {
  for (let i = 0; i < amount; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";

    const size = Math.random() * 8 + 6;
    const left = Math.random() * 100;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 2;
    const drift = `${Math.random() * 180 - 90}px`;

    petal.style.left = `${left}%`;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.4}px`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.setProperty("--drift", drift);

    document.querySelector(".petals").appendChild(petal);

    setTimeout(() => petal.remove(), (duration + delay) * 1000 + 500);
  }
}

openBtn.addEventListener("click", () => {
  reveal(bouquet);
  createPetals(28);

  setTimeout(() => {
    bouquet.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 150);
});

letterBtn.addEventListener("click", () => {
  reveal(letter);
  createPetals(20);

  setTimeout(() => {
    reveal(ending);

    setTimeout(() => {
      letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 150);
  }, 500);
});

/*
  Se você adicionar um arquivo de áudio autorizado chamado
  "from-the-start.mp3" e descomentar o <audio> no HTML,
  este botão poderá controlar a reprodução.
*/
musicBtn.addEventListener("click", () => {
  const music = document.getElementById("music");

  if (!music) {
    alert("A música ainda não foi adicionada ao site. Para usar a música, adicione um arquivo de áudio que você tenha autorização para utilizar.");
    return;
  }

  if (music.paused) {
    music.play();
    musicBtn.textContent = "❚❚";
  } else {
    music.pause();
    musicBtn.textContent = "♫";
  }
});

window.addEventListener("load", () => {
  setTimeout(() => createPetals(7), 700);
});
