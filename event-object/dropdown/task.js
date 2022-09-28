let dropdownName = document.getElementsByClassName("dropdown__value");
let dropdownList = document.getElementsByClassName("dropdown__list");
let dropdownLinks = document.getElementsByClassName("dropdown__link");


function dropdownOpen() {
    dropdownList.item(0).classList.add("dropdown__list_active");
}

function dropdownClose() {
    dropdownList.item(0).classList.remove("dropdown__list_active");
}

if (dropdownList.classList.contains("dropdown__list_active")) {
    dropdownLinks.addEventListener("click", function (e) {let activeItem = e.target;});
    dropdownName.textContent = activeItem.textContent;
    for (let i = 0; i < dropdownList.length; i++) {
        dropdownList.item(i) = dropdownClose;
    };
} else { 
    for (let i = 0; i < dropdownList.length; i++) {
        dropdownList.item(i).onclick = dropdownOpen;
    }
}
