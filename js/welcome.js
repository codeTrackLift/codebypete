const mainContent = document.getElementById('mainContent');
const myWelcome = `
    <section id="mySection">

    <div class="row container-fluid">
        <div class="text-center mb-4">
            <h5 class='menloRegular' style="color:white;">Join me, on <a href="../pages/blog.html">myCodingJourney</a>...</h5>
        </div>

        <div class="card col-sm-4" style="width: 18rem;">
            <iframe class='container-fluid ratio ratio-1x1 pt-4' src="https://youtube.com/embed/L2MLboXUkUA" frameborder="0" allowfullscreen>
            </iframe>
            <div class="card-body">
                <h5 class="card-title" style="color:cornflowerblue">See My Work</h5>
                <p class="card-text">Demo projects or view source code on GitHub.</p>
                <p class="card-text">Read blog articles about my Coding Bootcamp experience.</p>
                <div class="btnContainer mt-3">
                    <a id='projectsButton' onclick="buttonEffect('projectsButton')" href="../pages/projects.html" class="btn btn-secondary">Projects</a>
                    <a id='blogButton' onclick="buttonEffect('blogButton')" href="../pages/blog.html" class="btn btn-secondary btnRepo">My Blog</a>
                </div>
            </div>
        </div>

        <div class="col-sm-4 myArticles container-fluid my-auto">
            <div class="row justify-content-evenly">
                <img src="../pics/about/html5_logo.gif" class='col-sm-2 img-fluid img-round' alt="HTML5 Logo.">
                <img src="../pics/about/css3_logo.gif" class='col-sm-2 img-fluid img-round' alt="CSS3 Logo.">
                <img src="../pics/about/javascript_logo.gif" class='col-sm-2 img-fluid img-round' alt="JavaScript Logo.">
            </div>
            <h1 class="text-center mb-4 menloRegular">Technology</h1>
        </div>
    </div>

    <div class="row container-fluid">
        <div class="col-sm-4 myArticles container-fluid my-auto">
            <h1 class="text-center mb-4 menloRegular">Stack</h1>
            <div class="row justify-content-evenly">
                <img src="../pics/about/gitLogoOrangeRed.png" class='py-3 col-sm-2 img-fluid img-square' alt="Bootstrap Logo.">
                <img src="../pics/about/vsCodeLogo.png" class='py-3 col-sm-2 img-fluid img-square' alt="Visual Studio Code Logo.">
                <img src="../pics/about/bootstrap-logo.svg" class='py-3 col-sm-2 img-fluid img-square' alt="Bootstrap Logo.">
            </div>
        </div>

        <div class="card col-sm-4" style="width: 18rem;">
            <img src="../pics/about/crushItApple.jpg" class="card-img-top mx-auto" alt="Pac Man image"
                style="width:10rem;">
            <div class="card-body">
                <h5 class="card-title" style="color:cornflowerblue">Passionate About Code</h5>
                <p class="card-text">Degree in Biological Sciences</p>
                <p class="card-text">20 year Pharmaceutical Professional</p>
                <p class="card-text">Full Stack Coding Bootcamp<span style="color:gray"> (in progress, Jul 2022)</span></p>
                <div class="btnContainer mt-3">
                    <a id='aboutButton' onclick="buttonEffect('aboutButton')" href="../pages/about.html" class="btn btn-secondary">About Me</a>
                    <a id='contactButton' onclick="buttonEffect('contactButton')" href="../pages/contact.html" class="btn btn-secondary btnRepo" target="_blank">Contact</a>
                </div>
            </div>
        </div>

    </div>

    </section>
`;

const injectWelcome = () => mainContent.innerHTML = myWelcome;

const injectWelcomeBackground = () => {
    const body = document.querySelector('body');
    body.style.backgroundImage = 'url("../pics/vesselCode_tilt_part.jpg")'
}