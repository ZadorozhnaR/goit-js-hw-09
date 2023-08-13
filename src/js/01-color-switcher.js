const delay = 1000;
let timerId = null;

const refs = {
  butnStart: document.querySelector('button[data-start]'),
  butnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.butnStart.addEventListener('click', changeColor);
refs.butnStop.addEventListener('click', changeStop);

function changeColor() {
  refs.butnStart.disabled = true;
  refs.butnStop.disabled = false;
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, delay);
}

function changeStop() {
  refs.butnStart.disabled = false;
  refs.butnStop.disabled = true;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
