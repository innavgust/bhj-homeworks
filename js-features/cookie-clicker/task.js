let clickerCounter = document.getElementById("clicker__counter");

const cookie = document.getElementById("cookie");

function cookieClicker() {
  clickerCounter.textContent -= -1;
  if (clickerCounter.textContent % 2) {
    cookie.width = 150;
    cookie.height = 96;
  } else {
    cookie.width = 200;
    cookie.height = 128;
  }
}

cookie.onclick = cookieClicker;