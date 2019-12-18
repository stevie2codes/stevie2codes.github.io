$(document).ready(function () {

    let controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: '#experience',
        })
        .setTween("#experience", 0.5, {
            left: 0
        })
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#portfolio'
        })
        .setTween("#portfolio", 0.5, {
            left: 0
        })
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#contact',
            offset: -300
        })
        .setClassToggle('#contact', 'fade-in')
        .addTo(controller);

});

let myButton = document.getElementById('myBtn');

window.onscroll =  () => {
    scrollFunction()
};


let scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

let topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}