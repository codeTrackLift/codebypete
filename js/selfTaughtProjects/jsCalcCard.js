const jsCalcCard = `
    <div id='jsCalcCard' class="card col-sm-4" style="width:18rem;">
        <img src="../pics/projects/drumCalc.gif" class="img-fluid mx-auto" alt="Calculator image"
            style="height:10rem;">
        <div class="card-body">
            <h5 class="card-title">Drum Set Calculator</h5>
            <p class="card-text">My <span>third JavaScript Project</span>, this was also completed as part of <a
                    href="https://www.theodinproject.com/" target="_blank">The Odin Project</a> Foundations
                course.
            </p>
            <p class="card-text">Accepts mouse and key inputs, and makes drum sound effects!</p>
            <div class="btnContainer">
                <a id='jsCalcDemo' href="https://codetracklift.github.io/odin-calc/" class="btn btn-secondary"
                    target="_blank">Try
                    Demo</a>
                <a id='jsCalcRepo' href="https://github.com/codeTrackLift/odin-calc#readme"
                    class="btn btn-secondary btnDark" target="'_blank"><img
                        src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='jsCalcCite' class="text-center">Developed in Jan, 2022</cite>
    </div>
`;

const injectJsCalcCard = () => {
    selfTaughtProjects.innerHTML += jsCalcCard;
    setTimeout(() => {
        const jsCalcDemoController = new ScrollMagic.Controller();
        const jsCalcDemo = new ScrollMagic.Scene({
                triggerElement: '#jsCalcDemo',
                offset: -200
            })
            .setClassToggle('#jsCalcDemo', 'show')
            .addTo(jsCalcDemoController);

        const jsCalcRepoController = new ScrollMagic.Controller();
        const jsCalcRepo = new ScrollMagic.Scene({
                triggerElement: '#jsCalcRepo',
                offset: -200
            })
            .setClassToggle('#jsCalcRepo', 'show')
            .addTo(jsCalcRepoController);

        const jsCalcCiteController = new ScrollMagic.Controller();
        const jsCalcCite = new ScrollMagic.Scene({
                triggerElement: '#jsCalcRepo',
                offset: -200
            })
            .setClassToggle('#jsCalcCite', 'hide')
            .addTo(jsCalcCiteController);
    })
}