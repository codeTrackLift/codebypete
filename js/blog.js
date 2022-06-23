const blogArticles = `
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button id='blog10Button' onclick="blog10Open()" class="accordion-button collapsed bg-transparent"
                type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen"
                aria-expanded="true" aria-controls="panelsStayOpen-collapseTen">
                <h6 class="my-auto">blog<span style='color:dodgerblue'>[</span><span style="color:cornflowerblue">10</span><span
                        style='color:dodgerblue'>]</span></h6>
                <h5 class="w-100 my-auto" style="margin-left:-0.5rem;">Capstone Videos</h5>
                <div class="d-none d-sm-none d-md-block w-50 text-end">
                    <p class="text-gray my-auto">Jun 20, 2022</p>
                </div>
            </button>
        </h2>
        <div id="blog10" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTen">
            <div class="text-center my-5"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button id='blog9Button' onclick="blog9Open()" class="accordion-button collapsed bg-transparent"
                type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine"
                aria-expanded="true" aria-controls="panelsStayOpen-collapseNine">
                <h6 class="my-auto">blog<span style='color:dodgerblue'>[</span><span style="color:cornflowerblue">9</span><span
                        style='color:dodgerblue'>]</span></h6>
                <h5 class="w-100 my-auto">Front End Architecture</h5>
                <div class="d-none d-sm-none d-md-block w-50 text-end">
                    <p class="text-gray my-auto">May 31, 2022</p>
                </div>
            </button>
        </h2>
        <div id="blog9" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
            <div class="text-center my-5"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button id='blog8Button' onclick="blog8Open()" class="accordion-button collapsed bg-transparent"
                type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight"
                aria-expanded="true" aria-controls="panelsStayOpen-collapseEight">
                <h6 class="my-auto">blog<span style='color:dodgerblue'>[</span><span style="color:cornflowerblue">8</span><span
                        style='color:dodgerblue'>]</span></h6>
                <h5 class="w-100 my-auto">Bad Bank Stock Ticker</h5>
                <div class="d-none d-sm-none d-md-block w-50 text-end">
                    <p class="text-gray my-auto">May 13, 2022</p>
                </div>
            </button>
        </h2>
        <div id="blog8" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
            <div class="text-center my-5"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button id='blog7Button' onclick="blog7Open()" class="accordion-button collapsed bg-transparent"
                type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven"
                aria-expanded="true" aria-controls="panelsStayOpen-collapseSeven">
                <h6 class="my-auto">blog<span style='color:dodgerblue'>[</span><span style="color:cornflowerblue">7</span><span
                        style='color:dodgerblue'>]</span></h6>
                <h5 class="w-100 my-auto">To-Do Dashboard</h5>
                <div class="d-none d-sm-none d-md-block w-50 text-end">
                    <p class="text-gray my-auto">Apr 23, 2022</p>
                </div>
            </button>
        </h2>
        <div id="blog7" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
            <div class="text-center my-5"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button id='blog6Button' onclick="blog6Open()" class="accordion-button collapsed bg-transparent"
                type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix"
                aria-expanded="true" aria-controls="panelsStayOpen-collapseSix">
                <h6 class="my-auto">blog<span style='color:dodgerblue'>[</span><span style="color:cornflowerblue">6</span><span
                        style='color:dodgerblue'>]</span></h6>
                <h5 class="w-100 my-auto">Real-Time Bus Tracker</h5>
                <div class="d-none d-sm-none d-md-block w-50 text-end">
                    <p class="text-gray my-auto">Mar 22, 2022</p>
                </div>
            </button>
        </h2>
        <div id="blog6" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
            <div class="text-center my-5"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button id='blog5Button' onclick="blog5Open()" class="accordion-button collapsed bg-transparent"
                type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="true" aria-controls="panelsStayOpen-collapseFive">
                <h6 class="my-auto">blog<span style='color:dodgerblue'>[</span><span style="color:cornflowerblue">5</span><span
                        style='color:dodgerblue'>]</span></h6>
                <h5 class="w-100 my-auto">PacMan Factory & Eye Movement</h5>
                <div class="d-none d-sm-none d-md-block w-50 text-end">
                    <p class="text-gray my-auto">Mar 15, 2022</p>
                </div>
            </button>
        </h2>
        <div id="blog5" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
            <div class="text-center my-5"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button id='blog4Button' onclick="blog4Open()" class="accordion-button collapsed bg-transparent"
                type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                <h6 class="my-auto">blog<span style='color:dodgerblue'>[</span><span style="color:cornflowerblue">4</span><span
                        style='color:dodgerblue'>]</span></h6>
                <h5 class="w-100 my-auto">Custom CSS Typewriter</h5>
                <div class="d-none d-sm-none d-md-block w-50 text-end">
                    <p class="text-gray my-auto">Mar 5, 2022</p>
                </div>
            </button>
        </h2>
        <div id="blog4" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
            <div class="text-center my-5"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button id='blog3Button' onclick="blog3Open()" class="accordion-button collapsed bg-transparent"
                type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                <h6 class="my-auto">blog<span style='color:dodgerblue'>[</span><span style="color:cornflowerblue">3</span><span
                        style='color:dodgerblue'>]</span></h6>
                <h5 class="w-100 my-auto">PacMan Mini-Game</h5>
                <div class="d-none d-sm-none d-md-block w-50 text-end">
                    <p class="text-gray my-auto">Feb 27, 2022</p>
                </div>
            </button>
        </h2>
        <div id="blog3" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div class="text-center my-5"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button id='blog2Button' onclick="blog2Open()" class="accordion-button collapsed bg-transparent"
                type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                <h6 class="my-auto">blog<span style='color:dodgerblue'>[</span><span style="color:cornflowerblue">2</span><span
                        style='color:dodgerblue'>]</span></h6>
                <h5 class="w-100 my-auto">Magic Ball Challenge</h5>
                <div class="d-none d-sm-none d-md-block w-50 text-end">
                    <p class="text-gray my-auto">Feb 20, 2022</p>
                </div>
            </button>
        </h2>
        <div id="blog2" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="text-center my-5"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button id='blog1Button' onclick="blog1Open()" class="accordion-button collapsed bg-transparent"
                type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                <h6 class="my-auto">blog<span style='color:dodgerblue'>[</span><span style="color:cornflowerblue">1</span><span
                        style='color:dodgerblue'>]</span></h6>
                <h5 class="w-100 my-auto">Creating a GitHub Website</h5>
                <div class="d-none d-sm-none d-md-block w-50 text-end">
                    <p class="text-gray my-auto">Feb 16, 2022</p>
                </div>
            </button>
        </h2>
        <div id="blog1" class="accordion-collapse collapse bg-transparent" aria-labelledby="panelsStayOpen-headingOne">
            <div class="text-center my-5"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button id='blog0Button' onclick='blog0Open()' class="accordion-button collapsed bg-transparent"
                type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseZero"
                aria-expanded="false" aria-controls="panelsStayOpen-collapseZero">
                <h6 class="my-auto">blog<span style='color:dodgerblue'>[</span><span style="color:cornflowerblue">0</span><span
                        style='color:dodgerblue'>]</span></h6>
                <h5 class="w-100 my-auto">Coding Bootcamp Introduction</h5>
                <div class="d-none d-sm-none d-md-block w-50 text-end">
                    <p class="text-gray my-auto">Feb 9, 2022</p>
                </div>
            </button>
        </h2>
        <div id="blog0" class="accordion-collapse collapse bg-transparent" aria-labelledby="panelsStayOpen-headingZero">
            <div class="text-center my-5"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
        </div>
    </div>
`;

const injectBlogArticles = () => {
    document.getElementById('accordionContainer').innerHTML = blogArticles;
}

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