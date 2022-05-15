// Open Anchor Accordion
function openAnchorAccordion() {
    if (window.location.hash) {
        hash = `${window.location.hash}Open()`;
        hash = hash.replace('#','').replace('Button','');
        setTimeout(hash,50);
    }
}
openAnchorAccordion();

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

// Blog button functions

function blog8Open() {
    setTimeout(injectBlog8,500);
    if (!blog8OpenStatus) {
        blog8OpenStatus = !blog8OpenStatus;
        blog8.classList.add('show');
        blog8Button.classList.remove('collapsed');
        return
    }
    blog8OpenStatus = !blog8OpenStatus;
    blog8.classList.remove('show');
    blog8Button.classList.add('collapsed');
}

function blog7Open() {
    setTimeout(injectBlog7,500);
    if (!blog7OpenStatus) {
        blog7OpenStatus = !blog7OpenStatus;
        blog7.classList.add('show');
        blog7Button.classList.remove('collapsed');
        return
    }
    blog7OpenStatus = !blog7OpenStatus;
    blog7.classList.remove('show');
    blog7Button.classList.add('collapsed');
}

function blog6Open() {
    setTimeout(injectBlog6,500);
    if (!blog6OpenStatus) {
        blog6OpenStatus = !blog6OpenStatus;
        blog6.classList.add('show');
        blog6Button.classList.remove('collapsed');
        return
    }
    blog6OpenStatus = !blog6OpenStatus;
    blog6.classList.remove('show');
    blog6Button.classList.add('collapsed');
}

function blog5Open() {
    setTimeout(injectBlog5,500);
    if (!blog5OpenStatus) {
        blog5OpenStatus = !blog5OpenStatus;
        blog5.classList.add('show');
        blog5Button.classList.remove('collapsed');
        return
    }
    blog5OpenStatus = !blog5OpenStatus;
    blog5.classList.remove('show');
    blog5Button.classList.add('collapsed');
}

function blog4Open() {
    setTimeout(injectBlog4,500);
    if (!blog4OpenStatus) {
        blog4OpenStatus = !blog4OpenStatus;
        blog4.classList.add('show');
        blog4Button.classList.remove('collapsed');
        return
    }
    blog4OpenStatus = !blog4OpenStatus;
    blog4.classList.remove('show');
    blog4Button.classList.add('collapsed');
}

function blog3Open() {
    setTimeout(injectBlog3,500);
    if (!blog3OpenStatus) {
        blog3OpenStatus = !blog3OpenStatus;
        blog3.classList.add('show');
        blog3Button.classList.remove('collapsed');
        return
    }
    blog3OpenStatus = !blog3OpenStatus;
    blog3.classList.remove('show');
    blog3Button.classList.add('collapsed');
}

function blog2Open() {
    setTimeout(injectBlog2,500);
    if (!blog2OpenStatus) {
        blog2OpenStatus = !blog2OpenStatus;
        blog2.classList.add('show');
        blog2Button.classList.remove('collapsed');
        return
    }
    blog2OpenStatus = !blog2OpenStatus;
    blog2.classList.remove('show');
    blog2Button.classList.add('collapsed');
}

function blog1Open() {
    setTimeout(injectBlog1,500);
    if (!blog1OpenStatus) {
        blog1OpenStatus = !blog1OpenStatus;
        blog1.classList.add('show');
        blog1Button.classList.remove('collapsed');
        return
    }
    blog1OpenStatus = !blog1OpenStatus;
    blog1.classList.remove('show');
    blog1Button.classList.add('collapsed');
}

function blog0Open() {
    setTimeout(injectBlog0,500);
    if (!blog0OpenStatus) {
        blog0OpenStatus = !blog0OpenStatus;
        blog0.classList.add('show');
        blog0Button.classList.remove('collapsed');
        return
    }
    blog0OpenStatus = !blog0OpenStatus;
    blog0.classList.remove('show');
    blog0Button.classList.add('collapsed');
}

var buttonAboutController = new ScrollMagic.Controller();
var buttonAbout = new ScrollMagic.Scene({
    triggerElement: '#buttonAbout',
    offset: -350
})
.setClassToggle('#buttonAbout', 'show')
.addTo(buttonAboutController);

var buttonProjectsController = new ScrollMagic.Controller();
var buttonProjects = new ScrollMagic.Scene({
        triggerElement: '#buttonProjects',
        offset: -350
    })
    .setClassToggle('#buttonProjects', 'show')
    .addTo(buttonProjectsController);