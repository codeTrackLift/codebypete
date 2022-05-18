const odinLandingpageCard = `
    <div id='odinLandingpageCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/projects/odin-landingpage.jpg" class="card-img-top mx-auto pt-4"
            alt="Screenshot of a landingpage project." style="width:12rem;">
        <div class="card-body">
            <h5 class="card-title">Landingpage Project</h5>
            <p class="card-text">My <span>first Landingpage</span>, this was completed as part of <a
                    href="https://www.theodinproject.com/" target="_blank">The Odin Project</a> Foundations
                course.
            </p>
            <p class="card-text">This was made using vanilla HTML and CSS after completing the Responsive
                Web
                Design course at <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp.org</a>.
            </p>
            <div class="btnContainer">
                <a id='odinLandingpageDemo' href="https://codetracklift.github.io/odin-landingpage/"
                    class="btn btn-secondary" target="'_blank">Visit Site</a>
                <a id='odinLandingpageRepo' href="https://github.com/codeTrackLift/odin-landingpage#readme"
                    class="btn btn-secondary btnDark" target="'_blank"><img
                        src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='odinLandingpageCite' class="text-center">Developed in Dec, 2021</cite>
    </div>
`;

const injectOdinLandingpageCard = (section) => {    
    section.innerHTML += odinLandingpageCard;
    setTimeout(() => {
        const odinLandingpageDemoController = new ScrollMagic.Controller();
        const odinLandingpageDemo = new ScrollMagic.Scene({
                triggerElement: '#odinLandingpageDemo',
                offset: -200
            })
            .setClassToggle('#odinLandingpageDemo', 'show')
            .addTo(odinLandingpageDemoController);

        const odinLandingpageRepoController = new ScrollMagic.Controller();
        const odinLandingpageRepo = new ScrollMagic.Scene({
                triggerElement: '#odinLandingpageRepo',
                offset: -200
            })
            .setClassToggle('#odinLandingpageRepo', 'show')
            .addTo(odinLandingpageRepoController);

        const odinLandingpageCiteController = new ScrollMagic.Controller();
        const odinLandingpageCite = new ScrollMagic.Scene({
                triggerElement: '#odinLandingpageRepo',
                offset: -200
            })
            .setClassToggle('#odinLandingpageCite', 'hide')
            .addTo(odinLandingpageCiteController);
    })
}