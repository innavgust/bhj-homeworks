let ads = document.getElementsByClassName('rotator__case');


function adsAdd(e) {
    e.classList.add('rotator__case_active');
}

function adsRemove(e) {
    e.classList.remove('rotator__case_active');
}

let i = 0;
    
function adsRotator() {
    adsRemove(ads.item(i));
    if (ads.item(i).nextElementSibling !== null) {
        adsAdd(ads.item(i).nextElementSibling);
        i++;
    } else {
        i = 0;
        adsAdd(ads.item(i));
    };
};

setInterval (adsRotator, 1000);