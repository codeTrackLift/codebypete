var githubContributionsController = new ScrollMagic.Controller();
    var githubContributions = new ScrollMagic.Scene({
            triggerElement: '#githubContributions',
            offset: -100
        })
        .setClassToggle('#githubContributions', 'show')
        .addTo(githubContributionsController);