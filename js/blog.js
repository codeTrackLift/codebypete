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
const blog5 = document.getElementById('blog5');
const blog4 = document.getElementById('blog4');
const blog3 = document.getElementById('blog3');
const blog2 = document.getElementById('blog2');
const blog1 = document.getElementById('blog1');
const blog0 = document.getElementById('blog0');

// Blog buttons
const blog5Button = document.getElementById('blog5Button');
const blog4Button = document.getElementById('blog4Button');
const blog3Button = document.getElementById('blog3Button');
const blog2Button = document.getElementById('blog2Button');
const blog1Button = document.getElementById('blog1Button');
const blog0Button = document.getElementById('blog0Button');

// Blog starting values, set to true IF starting open
var blog5OpenStatus = false;
var blog4OpenStatus = false;
var blog3OpenStatus = false;
var blog2OpenStatus = false;
var blog1OpenStatus = false;
var blog0OpenStatus = false;

// Blog videos
const blog5VideoPac = document.getElementById('blog5VideoPac');
const blog5VideoEye = document.getElementById('blog5VideoEye');
const blog4Video = document.getElementById('blog4Video');
const blog3Video = document.getElementById('blog3Video');
const blog2Video = document.getElementById('blog2Video');

// Blog button functions

function blog5Open() {
    if (!blog5OpenStatus) {
        blog5OpenStatus = !blog5OpenStatus;
        blog5.classList.add('show');
        blog5Button.classList.remove('collapsed');
        // blog5VideoPac.src = 'https://youtube.com/embed/JywuU_yC3PE?&autoplay=1&mute=1';
        // blog5VideoEye.src = 'https://youtube.com/embed/Md5x0Ta30V8?&autoplay=1&mute=1';
        return
    }
    blog5OpenStatus = !blog5OpenStatus;
    blog5.classList.remove('show');
    blog5Button.classList.add('collapsed');
    // blog5VideoPac.src = 'https://youtube.com/embed/JywuU_yC3PE';
    // blog5VideoEye.src = 'https://youtube.com/embed/Md5x0Ta30V8';
}

function blog4Open() {
    if (!blog4OpenStatus) {
        blog4OpenStatus = !blog4OpenStatus;
        blog4.classList.add('show');
        blog4Button.classList.remove('collapsed');
        blog4Video.src = 'https://youtube.com/embed/YYzOL7NGuxM?&autoplay=1&mute=1';
        return
    }
    blog4OpenStatus = !blog4OpenStatus;
    blog4.classList.remove('show');
    blog4Button.classList.add('collapsed');
    blog4Video.src = 'https://youtube.com/embed/YYzOL7NGuxM';
}

function blog3Open() {
    if (!blog3OpenStatus) {
        blog3OpenStatus = !blog3OpenStatus;
        blog3.classList.add('show');
        blog3Button.classList.remove('collapsed');
        blog3Video.src = 'https://youtube.com/embed/iOKK8Q2unxE?&autoplay=1&mute=1';
        return
    }
    blog3OpenStatus = !blog3OpenStatus;
    blog3.classList.remove('show');
    blog3Button.classList.add('collapsed');
    blog3Video.src = 'https://youtube.com/embed/iOKK8Q2unxE';
}

function blog2Open() {
    if (!blog2OpenStatus) {
        blog2OpenStatus = !blog2OpenStatus;
        blog2.classList.add('show');
        blog2Button.classList.remove('collapsed');
        blog2Video.src = 'https://youtube.com/embed/f0mTQx5ATQI?&autoplay=1&mute=1';
        return
    }
    blog2OpenStatus = !blog2OpenStatus;
    blog2.classList.remove('show');
    blog2Button.classList.add('collapsed');
    blog2Video.src = 'https://youtube.com/embed/f0mTQx5ATQI';
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