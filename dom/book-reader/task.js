let fontSize = document.getElementsByClassName('font-size');
let book = document.getElementsByClassName('book__content');

let active;

for (let i = 0; i < fontSize.length; i++) {
    if (fontSize.item(i).classList.contains('font-size_active')) {
        active = i;
    }
}

document.querySelector('.book__control').addEventListener('click', function (e) {let activeItem = e.target;});
for (let i = 0; i < fontSize.length; i++) {
    if (fontSize.item(i).classList == activeItem.classList) {
        fontSize.item(active).classList.remove('font-size_active');
        active = i;
        fontSize.item(i).classList.add('font-size_active');
        if (active == 2) {
            book.item(0).classList.remove('book_fs-small');
            book.item(0).classList.add('book_fs-big');
        } else if (active == 0) {
            book.item(0).classList.remove('book_fs-big');
            book.item(0).classList.add('book_fs-small');
        } else {
            book.item(0).classList.remove('book_fs-small');
            book.item(0).classList.remove('book_fs-big');
        }
    }
}
