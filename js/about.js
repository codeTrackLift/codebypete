var githubContributionsController = new ScrollMagic.Controller();
var githubContributions = new ScrollMagic.Scene({
        triggerElement: '#githubContributions',
        offset: -200
    })
    .setClassToggle('#githubContributions', 'show')
    .addTo(githubContributionsController);
    
var buttonContactController = new ScrollMagic.Controller();
var buttonContact = new ScrollMagic.Scene({
        triggerElement: '#buttonContact',
        offset: -300
    })
    .setClassToggle('#buttonContact', 'show')
    .addTo(buttonContactController);

var buttonBlogController = new ScrollMagic.Controller();
var buttonBlog = new ScrollMagic.Scene({
        triggerElement: '#buttonBlog',
        offset: -300
    })
    .setClassToggle('#buttonBlog', 'show')
    .addTo(buttonBlogController);
