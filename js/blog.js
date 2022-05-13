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
var blog8OpenStatus = false;
var blog7OpenStatus = false;
var blog6OpenStatus = false;
var blog5OpenStatus = false;
var blog4OpenStatus = false;
var blog3OpenStatus = false;
var blog2OpenStatus = false;
var blog1OpenStatus = false;
var blog0OpenStatus = false;

// Blog button functions

function blog8Open() {
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
    if (!blog4OpenStatus) {
        blog4OpenStatus = !blog4OpenStatus;
        blog4.classList.add('show');
        blog4Button.classList.remove('collapsed');
        // blog4Video.src = 'https://youtube.com/embed/YYzOL7NGuxM?&autoplay=1&mute=1';
        return
    }
    blog4OpenStatus = !blog4OpenStatus;
    blog4.classList.remove('show');
    blog4Button.classList.add('collapsed');
    // blog4Video.src = 'https://youtube.com/embed/YYzOL7NGuxM';
}

function blog3Open() {
    if (!blog3OpenStatus) {
        blog3OpenStatus = !blog3OpenStatus;
        blog3.classList.add('show');
        blog3Button.classList.remove('collapsed');
        // blog3Video.src = 'https://youtube.com/embed/iOKK8Q2unxE?&autoplay=1&mute=1';
        return
    }
    blog3OpenStatus = !blog3OpenStatus;
    blog3.classList.remove('show');
    blog3Button.classList.add('collapsed');
    // blog3Video.src = 'https://youtube.com/embed/iOKK8Q2unxE';
}

function blog2Open() {
    if (!blog2OpenStatus) {
        blog2OpenStatus = !blog2OpenStatus;
        blog2.classList.add('show');
        blog2Button.classList.remove('collapsed');
        // blog2Video.src = 'https://youtube.com/embed/f0mTQx5ATQI?&autoplay=1&mute=1';
        return
    }
    blog2OpenStatus = !blog2OpenStatus;
    blog2.classList.remove('show');
    blog2Button.classList.add('collapsed');
    // blog2Video.src = 'https://youtube.com/embed/f0mTQx5ATQI';
}

function blog1Open() {
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