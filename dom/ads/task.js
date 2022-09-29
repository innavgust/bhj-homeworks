let ads = document.getElementsByClassName('rotator__case');

function adsRotator() {
    for (let i = 0; i < ads.length; i++) {
        ads.item(i).classList.remove('rotator__case_active');
        if ((i + 1) > ads.length) {
            ads.item(0).classList.add('rotator__case_active');
        } else {
            ads.item(i + 1).classList.add('rotator__case_active');
        }
    }
}

setInterval (adsRotator, 1000);