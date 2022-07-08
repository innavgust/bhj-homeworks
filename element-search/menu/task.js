let menuElem = document.getElementsByClassName("menu__link");

function closeMenu(parentMenu) {
    parentMenu.item(i).firstChild.classList.remove("menu_active")
}

function openMenu(parentMenu) {
    parentMenu.item(i).firstChild.classList.add("menu_active")
}

for (i = 0; i < menuElem.length; i++) {
    if (menuElem.item(i).firstChild.classList.contains("menu_sub menu_active")) {
        menuElem.item(i).addEventListener("click", closeMenu(menuElem.item(i)));
    } else if (menuElem.item(i).firstChild.classList.contains("menu_sub")) {
        menuElem.item(i).addEventListener("click", openMenu(menuElem.item(i)));
    }
}