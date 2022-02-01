var controllerFadeIn1 = new ScrollMagic.Controller();
var fadeIn1 = new ScrollMagic.Scene({
    triggerElement: '.fadeIn1',
    offset: 100,
    duration: 700
})
.setClassToggle('.fadeIn1', 'show')
.addTo(controllerFadeIn1);

var controllerFadeIn2 = new ScrollMagic.Controller();
var fadeIn2 = new ScrollMagic.Scene({
    triggerElement: '.fadeIn2',
    offset: -200,
    duration: 700
})
.setClassToggle('.fadeIn2', 'show')
.addTo(controllerFadeIn2);

var controllerFadeIn3 = new ScrollMagic.Controller();
var fadeIn3 = new ScrollMagic.Scene({
    triggerElement: '.fadeIn3',
    offset: -350,
    duration: 700
})
.setClassToggle('.fadeIn3', 'show')
.addTo(controllerFadeIn1);
