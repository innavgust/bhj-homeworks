let reveal = document.getElementsByClassName('reveal');


window.addEventListener('scroll', function() {
    for (let i = 0; i < reveal.length; i++) {
        const viewportHeight = window.innerHeight;
        const revealTop = reveal.item(i).getBoundingClientRect().top;
        const revealBot = reveal.item(i).getBoundingClientRect().bottom;
        if ((revealTop < viewportHeight) && (revealBot < viewportHeight)) {
            reveal.item(i).classList.add ()        
        }
    };
};);
    