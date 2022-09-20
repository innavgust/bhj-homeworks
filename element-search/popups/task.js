let mainWnd = document.getElementById("modal_main");
let successWnd = document.getElementById("modal_success");

const closeItem = document.getElementsByClassName("modal__close_times");
const mainBtn = document.getElementsByClassName("btn_danger");

mainWnd.classList.add("modal_active");

function closeWnd() {
    mainWnd.classList.remove("modal_active");
}

function sucWnd() {
    mainWnd.classList.remove("modal_active");
    successWnd.classList.add("modal_active");
}

for (let i = 0; i < closeItem.length; i++) {
    closeItem.item(i).onclick = closeWnd;
}

for (let i = 0; i < mainBtn.length; i++) {
    mainBtn.item(i).onclick = sucWnd;
}
