const busTrackerCard = `
    <div id='busTrackerCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/projects/busTracker.gif" class="card-img-top mx-auto pt-4"
            alt="Bus tracker project gif." style="height:10rem;">
        <div class="card-body">
            <h5 class="card-title">Real-Time Bus Tracker</h5>
            <p class="card-text">This <a href="https://xpro.mit.edu/" target="_blank">MIT xPRO</a> <span>
                    Bootcamp Project</span> uses asynchronous JavaScript functions to fetch API data.</p>
            <p class="card-text">Custom styling and extra user interface functionality was added, see <a
                    href="../pages/blog.html#blog6Button">blog[6]</a>.</p>
            <div class="btnContainer">
                <a id='busTrackerDemo' href="https://codetracklift.github.io/bustracker/"
                    class="btn btn-secondary" target="_blank">Try Demo</a>
                <a id='busTrackerRepo' href="https://github.com/codeTrackLift/bustracker#readme"
                    class="btn btn-secondary btnDark " target="'_blank"><img
                        src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='busTrackerCite' class="text-center">Developed in Mar, 2022</cite>
    </div>
`;

const injectBusTrackerCard = (section) => {
    section.innerHTML += busTrackerCard;
    setTimeout(() => {
        const busTrackerDemoController = new ScrollMagic.Controller();
        const busTrackerDemo = new ScrollMagic.Scene({
                triggerElement: '#busTrackerDemo',
                offset: -200
            })
            .setClassToggle('#busTrackerDemo', 'show')
            .addTo(busTrackerDemoController);
    
        const busTrackerRepoController = new ScrollMagic.Controller();
        const busTrackerRepo = new ScrollMagic.Scene({
                triggerElement: '#busTrackerRepo',
                offset: -200
            })
            .setClassToggle('#busTrackerRepo', 'show')
            .addTo(busTrackerRepoController);
    
        const busTrackerCiteController = new ScrollMagic.Controller();
        const busTrackerCite = new ScrollMagic.Scene({
                triggerElement: '#busTrackerRepo',
                offset: -200
            })
            .setClassToggle('#busTrackerCite', 'hide')
            .addTo(busTrackerCiteController);
    })
}