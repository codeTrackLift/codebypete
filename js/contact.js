var emailButtonController = new ScrollMagic.Controller();
var emailButton = new ScrollMagic.Scene({
        triggerElement: '#emailButton',
        offset: -300
    })
    .setClassToggle('#emailButton', 'show')
    .addTo(emailButtonController);

var buttonBlogController = new ScrollMagic.Controller();
var buttonBlog = new ScrollMagic.Scene({
        triggerElement: '#buttonBlog',
        offset: -350
    })
    .setClassToggle('#buttonBlog', 'show')
    .addTo(buttonBlogController);

var buttonProjectsController = new ScrollMagic.Controller();
var buttonProjects = new ScrollMagic.Scene({
        triggerElement: '#buttonProjects',
        offset: -350
    })
    .setClassToggle('#buttonProjects', 'show')
    .addTo(buttonProjectsController);