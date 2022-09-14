let menuElem = document.getElementsByClassName("menu__link");

for (i = 0; i < menuElem.length; i++) {
    if (menuElem.item(i).firstChild.classList.contains("menu_sub menu_active")) {
        menuElem.item(i).addEventListener("click", closeMenu = (menuElem) => {menuElem.item(i).firstChild.classList.remove("menu_active")});
    } else if (menuElem.item(i).firstChild.classList.contains("menu_sub")) {
        menuElem.item(i).addEventListener("click", openMenu = (menuElem) => {menuElem.item(i).firstChild.classList.add("menu_active")});
    }
}