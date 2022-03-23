var githubContributionsController = new ScrollMagic.Controller();
var githubContributions = new ScrollMagic.Scene({
        triggerElement: '#githubContributions',
        offset: -200
    })
    .setClassToggle('#githubContributions', 'show')
    .addTo(githubContributionsController);

var buttonProjectsController = new ScrollMagic.Controller();
var buttonProjects = new ScrollMagic.Scene({
        triggerElement: '#buttonProjects',
        offset: -300
    })
    .setClassToggle('#buttonProjects', 'show')
    .addTo(buttonProjectsController);

var buttonContactController = new ScrollMagic.Controller();
var buttonContact = new ScrollMagic.Scene({
        triggerElement: '#buttonContact',
        offset: -300
    })
    .setClassToggle('#buttonContact', 'show')
    .addTo(buttonContactController);