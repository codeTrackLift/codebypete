var emailButtonController = new ScrollMagic.Controller();
var emailButton = new ScrollMagic.Scene({
        triggerElement: '#emailButton',
        offset: -100
    })
    .setClassToggle('#emailButton', 'show')
    .addTo(emailButtonController);