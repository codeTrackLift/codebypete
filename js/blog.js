// Blog div .accordion-collapse 
const blog8 = document.getElementById('blog8');
const blog7 = document.getElementById('blog7');
const blog6 = document.getElementById('blog6');
const blog5 = document.getElementById('blog5');
const blog4 = document.getElementById('blog4');
const blog3 = document.getElementById('blog3');
const blog2 = document.getElementById('blog2');
const blog1 = document.getElementById('blog1');
const blog0 = document.getElementById('blog0');

// Blog buttons
const blog8Button = document.getElementById('blog8Button');
const blog7Button = document.getElementById('blog7Button');
const blog6Button = document.getElementById('blog6Button');
const blog5Button = document.getElementById('blog5Button');
const blog4Button = document.getElementById('blog4Button');
const blog3Button = document.getElementById('blog3Button');
const blog2Button = document.getElementById('blog2Button');
const blog1Button = document.getElementById('blog1Button');
const blog0Button = document.getElementById('blog0Button');

// Blog starting values, set to true IF starting open
let blog8OpenStatus = false;
let blog7OpenStatus = false;
let blog6OpenStatus = false;
let blog5OpenStatus = false;
let blog4OpenStatus = false;
let blog3OpenStatus = false;
let blog2OpenStatus = false;
let blog1OpenStatus = false;
let blog0OpenStatus = false;

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