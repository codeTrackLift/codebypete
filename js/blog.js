// Blog div .accordion-collapse 
const blog3 = document.getElementById('blog3');
const blog2 = document.getElementById('blog2');
const blog1 = document.getElementById('blog1');
const blog0 = document.getElementById('blog0');

// Blog buttons
const blog3Button = document.getElementById('blog3Button');
const blog2Button = document.getElementById('blog2Button');
const blog1Button = document.getElementById('blog1Button');
const blog0Button = document.getElementById('blog0Button');

// Blog starting values, set to true if starting open
var blog3OpenStatus = false; 
var blog2OpenStatus = false;
var blog1OpenStatus = false;
var blog0OpenStatus = false;

// Blog videos
const blog3Video = document.getElementById('blog3Video');
const blog2Video = document.getElementById('blog2Video');

// Blog button functions
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