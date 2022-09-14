let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

function getHole(index) {
  return document.getElementById(`hole${index}`);
}


  for (let i = 1; i < 10; i++) {
    let clickedHole = getHole(i);
    clickedHole.onclick = function () {
      if (clickedHole.className.includes( 'hole_has-mole' )) {
        dead.textContent -= -1;
      } else {
        lost.textContent -= -1;
      }
      
      if (lost.textContent == 5) {
        alert('Вы проиграли!')
        dead.textContent = 0;
        lost.textContent = 0;
      } else if (dead.textContent == 10) {
        alert('Победа')
        dead.textContent = 0;
        lost.textContent = 0;
      }
    };
  }
