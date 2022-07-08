let sliders = document.getElementsByClassName("slider__item");
let sliderItems = Array.from(sliders);

let prevArrow = document.getElementsByClassName("slider__arrow_prev");
let nextArrow = document.getElementsByClassName("slider__arrow_next");

function Next() {
    let activeSlide = document.getElementsByClassName("slider__item_active");
    let indx = sliderItems.findIndex(item => item == activeSlide);
    sliders.classList.remove("slider__item_active");
    if (indx == (sliderItems.length - 1)) {
        sliders.item(0).classList.add("slider__item_active");
    } else{
        sliders.item(indx + 1).classList.add("slider__item_active");
    }
}

function Prev() {
    let activeSlide = document.getElementsByClassName("slider__item_active");
    let indx = sliderItems.findIndex(item => item == activeSlide);
    sliders.classList.remove("slider__item_active");
    if (indx == 0) {
        sliders.item(sliderItems.length).classList.add("slider__item_active");
    } else{
        sliders.item(indx + 1).classList.add("slider__item_active");
    }
}

prevArrow.onclick = Prev;
nextArrow.onclick = Next;
