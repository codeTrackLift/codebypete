// Open Anchor Accordion
if (window.location.hash) {
    hash = `${window.location.hash}Open()`;
    hash = hash.replace('#','').replace('Button','');
    setTimeout(hash);
}

// Bottom nav buttons
const buttonAboutController = new ScrollMagic.Controller();
const buttonAbout = new ScrollMagic.Scene({
    triggerElement: '#buttonAbout',
    offset: -350
})
.setClassToggle('#buttonAbout', 'show')
.addTo(buttonAboutController);

const buttonProjectsController = new ScrollMagic.Controller();
const buttonProjects = new ScrollMagic.Scene({
        triggerElement: '#buttonProjects',
        offset: -350
    })
    .setClassToggle('#buttonProjects', 'show')
    .addTo(buttonProjectsController);