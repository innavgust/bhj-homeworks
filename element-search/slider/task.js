let sliders = document.getElementsByClassName("slider__item");
let sliderItems = Array.from(sliders);

let prevArrow = document.getElementsByClassName("slider__arrow_prev");
let nextArrow = document.getElementsByClassName("slider__arrow_next");

function next() {
    let indx = sliderItems.findIndex(item => item.classList == "slider__item slider__item_active");
    sliders.classList.remove("slider__item_active");
    if (indx == (sliderItems.length - 1)) {
        sliders.item(0).classList.add("slider__item_active");
    } else{
        sliders.item(indx + 1).classList.add("slider__item_active");
    }
}

function prev() {
    let indx = sliderItems.findIndex(item => item.classList == "slider__item slider__item_active");
    sliders.classList.remove("slider__item_active");
    if (indx == 0) {
        sliders.item(sliderItems.length).classList.add("slider__item_active");
    } else{
        sliders.item(indx + 1).classList.add("slider__item_active");
    }
}

for (let i = 0; i < prevArrow.length; i++) {
    prevArrow.item(i).onclick = prev;
}

for (let i = 0; i < nextArrow.length; i++) {
    nextArrow.item(i).onclick = next;
}
