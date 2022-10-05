let menuElem = document.getElementsByClassName("menu__link");

//function menuActive() {
//    if (menuElem.item(i).nextElementSibling !== null) {
//        menuElem.item(i).nextElementSibling.classList.toggle('menu_active');
//    };
//}

for (let i =0; i < menuElem.length; i++) {
    menuElem.item(i).onclick = () => {
        if (menuElem.item(i).nextElementSibling !== null) {
        menuElem.item(i).nextElementSibling.classList.toggle('menu_active');
        };
    };
};