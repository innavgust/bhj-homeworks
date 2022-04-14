let timer = document.getElementById("timer");
function countTime() {
  timer.textContent -= 1;
}

let timerId = setInterval(countTime, 1000);

setTimeout(() => { clearInterval(timerId); alert('Вы победили в конкурсе'); }, timer.textContent * 1000 + 1);
