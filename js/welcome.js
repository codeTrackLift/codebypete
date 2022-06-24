const mainContent = document.getElementById('mainContent');
const myWelcome = `
    <section id="mySection">

    <div class="row container-fluid">
        <div class="text-center mb-4">
            <h5 class='menloRegular textShadowBlack text-silver'><span class='text-white'>Join me</span>, on <a href="../pages/blog.html">myCodingJourney</a>...</h5>
        </div>

        <div id='welcomeCard1' class="card col-sm-4" style="width: 18rem;">
            <img src="../pics/about/crushItApple.jpg" class="card-img-top mx-auto" alt="Pac Man image" style="width:10rem;">
            <div class="card-body">
                <h5 class="card-title" style="color:cornflowerblue">Passionate About Code</h5>
                <p class="card-text">University of Delaware, Degree in Biological Sciences</p>
                <p class="card-text">20 year pharmaceutical professional</p>
                <p class="card-text">Read blog articles about my coding bootcamp experience</p>
                <div class="btnContainer mt-3">
                    <a href="../pages/about.html" class="btn btn-secondary btnDark">About</a>
                    <a href="../pages/blog.html" class="btn btn-secondary">Blog</a>
                </div>
            </div>
        </div>

        <div class="col-sm-4 myArticles container-fluid my-auto">
            <div class="row justify-content-evenly">
                <img src="../pics/about/html5_logo.gif" class='col-sm-2 img-fluid img-round' alt="HTML5 Logo.">
                <img src="../pics/about/css3_logo.gif" class='col-sm-2 img-fluid img-round' alt="CSS3 Logo.">
                <img src="../pics/about/javascript_logo.gif" class='col-sm-2 img-fluid img-round' alt="JavaScript Logo.">
            </div>
            <h1 class="text-center mb-4 menloRegular textShadowBlack">Technology</h1>
        </div>
    </div>

    <div class="row container-fluid">
        <div class="col-sm-4 myArticles container-fluid my-auto">
            <h1 class="text-center mb-4 menloRegular textShadowBlack">Stack</h1>
            <div class="row justify-content-evenly">
                <img src="../pics/about/gitLogoOrangeRed.png" class='py-3 col-sm-2 img-fluid img-square' alt="Bootstrap Logo.">
                <img src="../pics/about/vsCodeLogo.png" class='py-3 col-sm-2 img-fluid img-square' alt="Visual Studio Code Logo.">
                <img src="../pics/about/bootstrap-logo.svg" class='py-3 col-sm-2 img-fluid img-square' alt="Bootstrap Logo.">
                <img src="../pics/about/jest_logo.gif" class='py-3 col-sm-2 img-fluid img-square' alt="Jest Logo.">
            </div>
        </div>

        <div id='welcomeCard2' class="card col-sm-4" style="width: 18rem;">
            <iframe class='container-fluid ratio ratio-1x1 pt-4' src="https://youtube.com/embed/L2MLboXUkUA" frameborder="0" allowfullscreen>
            </iframe>
            <div class="card-body">
                <h5 class="card-title" style="color:cornflowerblue">See My Work</h5>
                <p class="card-text">Demo projects and see my progression</p>
                <p class="card-text">View my source code or documentation on GitHub</p>
                <p class="card-text">Review my qualificaton and work experience</p>
                <div class="btnContainer mt-3">
                    <a href="../pages/projects.html" class="btn btn-secondary">Projects</a>
                    <a href="../pages/resume.html" class="btn btn-secondary btnDark">Resume</a>
                    
                </div>
            </div>
            
        </div>

        <div class="myArticles container-fluid text-center mt-4">
            <img class='img-fluid bg-black rounded m-auto' src="../pics/about/mernStackTrans.png" style='width:25rem;' alt="Mongo DB Express NodeJS ReactJS technology stack.">
        </div>

        <div class="myArticles container-fluid text-center mt-4 d-none d-md-none d-lg-block">
            <h5 class="menloRegular text-gray textShadowBlack text-center mx-auto mb-4" style="max-width:860px;">Mobile First | Responsive Design</h5>
            <img class='img-fluid m-auto' id='qrByPete' src="../pics/about/qrByPete_dark.png" style='width:10rem;' alt="codeByPete QR Code">
        </div>

        <div id='bottomNav' class="container-fluid mt-5">
            <h5 class="menloRegular text-silver textShadowBlack text-center mx-auto" style="max-width:860px;">Let me know you visited...</h5>
            <div class="container-fluid text-center mt-4" style="max-width:480px;">
                <a id='buttonContact' href="../pages/contact.html" class="btn btn-secondary btnDark">Contact Me</a>
        </div>
    </div>

    </div>

    <div id='githubContributionsWrapper' class="container-fluid text-center">
        <button style="border:none;background-color:transparent;" onclick="viewContributions()">
            <img src="../pics/about/githubContributions.png" alt="GitHub contribution" id='githubContributions'>
        </button>
    </div>

    </section>
`;

const initCBPLogo = () => {
    var navbarCBPController = new ScrollMagic.Controller();
    var navbarCBP = new ScrollMagic.Scene({
            triggerElement: '#welcome',
            offset: 0,
            duration: 600
        })
        .setClassToggle('#navbarCBP', 'd-none')
        .addTo(navbarCBPController);
}

const injectWelcome = () => mainContent.innerHTML = myWelcome;

const injectWelcomeBackground = () => {
    const body = document.querySelector('body');
    body.style.backgroundImage = 'url("../pics/backgrounds/vesselCode_tilt_part.jpg")'
}

const initScrollMagic = () => {
    var welcomeCard1Controller = new ScrollMagic.Controller();
    var welcomeCard1 = new ScrollMagic.Scene({
            triggerElement: '#welcomeCard1',
        })
        .setClassToggle('#welcomeCard1', 'shift')
        .addTo(welcomeCard1Controller);

    var welcomeCard2Controller = new ScrollMagic.Controller();
    var welcomeCard2 = new ScrollMagic.Scene({
            triggerElement: '#welcomeCard2',
        })
        .setClassToggle('#welcomeCard2', 'shift')
        .addTo(welcomeCard2Controller);

    var qrByPeteController = new ScrollMagic.Controller();
    var qrByPete = new ScrollMagic.Scene({
            triggerElement: '#qrByPete',
            offset: -200
        })
        .setClassToggle('#qrByPete', 'shift')
        .addTo(qrByPeteController);

    var githubContributionsWrapperController = new ScrollMagic.Controller();
    var githubContributionsWrapper = new ScrollMagic.Scene({
            triggerElement: '#githubContributionsWrapper',
            offset: -200
        })
        .setClassToggle('#githubContributionsWrapper', 'show')
        .addTo(githubContributionsWrapperController);

    var buttonContactController = new ScrollMagic.Controller();
    var buttonContact = new ScrollMagic.Scene({
            triggerElement: '#buttonContact',
            offset: -200
        })
        .setClassToggle('#buttonContact', 'show')
        .addTo(buttonContactController);
}

const unhideCarousel = () => {
    const carousel = document.getElementById('carousel');
    const carouselWrapper = document.getElementById('carouselWrapper');
    carousel.style.transform = 'scale(1)';
    carousel.style.padding = '1rem 0';
    carousel.style.margin = '0';
    carouselWrapper.style.backgroundColor = 'rgb(50,50,50)';
}

let contribute100 = false;
const viewContributions = () => {
    const contributions = document.getElementById('githubContributions');
    if(contribute100) {
        contributions.style.opacity = 0;
        setTimeout(() => {
            contributions.src = '../pics/about/githubContributions.png';
            contributions.style.opacity = 1;
        }, 300);
        contribute100 = false;
        return
    }
    contributions.style.opacity = 0;
        setTimeout(() => {
            contributions.src = '../pics/about/githubContributions_100Days.jpg';
            contributions.style.opacity = 1;
        }, 300);
    contribute100 = true;
}