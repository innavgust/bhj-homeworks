let menuElem = document.getElementsByClassName("menu__link");

for (let i = 0; i < menuElem.length; i++) {
    if (menuElem.item(i).nextSibling !== null) {
        menuElem.item(i).nextSibling.toggle('menu_active');
    } 
}