const navbar = document.getElementById('navbar');
const myNavbar = `
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <img id='pharm2CodeLogo' src='../pics/pharma2code_icon.gif'>
        </button>
        <h3 id='navbarCBP' class="d-block d-sm-none" style="font-style:italic;letter-spacing:2vw;"><span style="color:white;">code</span><span style="color:#00857c;">By</span><span style="color:lime;">Pete</span></h3>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a id='navlinkWelcome' class="nav-link" href="../pages/welcome.html">Welcome</a>
                </li>
                <li class="nav-item">
                    <a id='navlinkAbout' class="nav-link" href="../pages/about.html">About</a>
                </li>
                <li class="nav-item">
                    <a id='navlinkBlog' class="nav-link" href="../pages/blog.html">Blog</a>
                </li>
                <li class="nav-item">
                    <a id='navlinkProjects' class="nav-link" href="../pages/projects.html">Projects</a>
                </li>
                <li class="nav-item">
                    <a id='navlinkResume' class="nav-link" href="../pages/resume.html">Resume</a>
                </li>
                <li class="nav-item">
                    <a id='navlinkContact' class="nav-link" href="../pages/contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </div>`;

const injectMyNavbar = () => navbar.innerHTML = myNavbar;
const setActiveNavlink = (navlink) => {
    document.getElementById(navlink).classList.add('active');
    document.getElementById(navlink).ariaCurrent = 'page';
}
const navbarCBPRemove = () => {
    document.getElementById('navbarCBP').classList.add('d-none');
}