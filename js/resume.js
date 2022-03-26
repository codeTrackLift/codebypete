var yodaJimController = new ScrollMagic.Controller();
var yodaJim = new ScrollMagic.Scene({
        triggerElement: '#yodaJim',
        offset: -100
    })
    .setClassToggle('#yodaJim', 'show')
    .addTo(yodaJimController);

var buttonProjectsController = new ScrollMagic.Controller();
var buttonProjects = new ScrollMagic.Scene({
        triggerElement: '#buttonProjects',
        offset: -350
    })
    .setClassToggle('#buttonProjects', 'show')
    .addTo(buttonProjectsController);

var buttonContactController = new ScrollMagic.Controller();
var buttonContact = new ScrollMagic.Scene({
        triggerElement: '#buttonContact',
        offset: -350
    })
    .setClassToggle('#buttonContact', 'show')
    .addTo(buttonContactController);