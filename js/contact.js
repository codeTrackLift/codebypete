var emailButtonController = new ScrollMagic.Controller();
var emailButton = new ScrollMagic.Scene({
        triggerElement: '#emailButton',
        offset: -300
    })
    .setClassToggle('#emailButton', 'show')
    .addTo(emailButtonController);
    
var buttonResumeController = new ScrollMagic.Controller();
var buttonProjects = new ScrollMagic.Scene({
        triggerElement: '#buttonProjects',
        offset: -350
    })
    .setClassToggle('#buttonProjects', 'show')
    .addTo(buttonResumeController);

var buttonAboutController = new ScrollMagic.Controller();
var buttonAbout = new ScrollMagic.Scene({
        triggerElement: '#buttonAbout',
        offset: -350
    })
    .setClassToggle('#buttonAbout', 'show')
    .addTo(buttonAboutController);