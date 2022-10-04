let fontSize = document.getElementsByClassName('font-size');
let book = document.getElementsByClassName('book__content');

let active;

function removeActive() {
    for (let i = 0; i < fontSize.length; i++) {
        fontSize.item(i).classList.remove('font-size_active');
    }
};

function removeFont() {
    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');
}

document.querySelector('.book__control').addEventListener('click', function (e) {let activeItem = e.target;});
removeActive();
removeFont();
if (activeItem.dataset.size == "small") {
    fontSize.item(0).classList.add('font-size_active');
    book.item(0).classList.add('book_fs-small');
} else if (activeItem.dataset.size == "big") {
    fontSize.item(2).classList.add('font-size_active');
    book.item(0).classList.add('book_fs-big');
}

