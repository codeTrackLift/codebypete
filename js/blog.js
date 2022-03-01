const blog3 = document.getElementById('blog3');
const blog2 = document.getElementById('blog2');
const blog1 = document.getElementById('blog1');
const blog0 = document.getElementById('blog0');
const blog3Button = document.getElementById('blog3Button');
const blog2Button = document.getElementById('blog2Button');
const blog1Button = document.getElementById('blog1Button');
const blog0Button = document.getElementById('blog0Button');
var blog3OpenStatus = true; // Set to true if start open
var blog2OpenStatus = false;
var blog1OpenStatus = false;
var blog0OpenStatus = false;

function blog3Open() {
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