const etchASketchCard = `
    <div id='etchASketchCard' class="card col-sm-4" style="width:18rem;">
        <img src="../pics/projects/etch-a-sketch.jpg" class="card-img-top py-4"
            alt="Screenshot of etch-a-sketch project.">
        <div class="card-body">
            <h5 class="card-title">Etch-A-Sketch</h5>
            <p class="card-text">My <span>second JavaScript Project</span>, this was completed as part of <a
                    href="https://www.theodinproject.com/" target="_blank">The Odin Project</a> Foundations
                course.
            </p>
            <p class="card-text">Accepts mouse and key inputs, and the pixel resolution can be resized!</p>
            <div class="btnContainer">
                <a id='etchASketchDemo' href="https://codetracklift.github.io/etch-a-sketch/"
                    class="btn btn-secondary" target="_blank">Try Demo</a>
                <a id='etchASketchRepo' href="https://github.com/codeTrackLift/etch-a-sketch#readme"
                    class="btn btn-secondary btnDark" target="'_blank"><img
                        src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='etchASketchCite' class="text-center">Developed in Jan, 2022</cite>
    </div>
`;

const injectEtchASketchCard = (section) => {
    section.innerHTML += etchASketchCard;
    setTimeout(() => {
        const etchASketchDemoController = new ScrollMagic.Controller();
        const etchASketchDemo = new ScrollMagic.Scene({
                triggerElement: '#etchASketchDemo',
                offset: -200
            })
            .setClassToggle('#etchASketchDemo', 'show')
            .addTo(etchASketchDemoController);

        const etchASketchRepoController = new ScrollMagic.Controller();
        const etchASketchRepo = new ScrollMagic.Scene({
                triggerElement: '#etchASketchRepo',
                offset: -200
            })
            .setClassToggle('#etchASketchRepo', 'show')
            .addTo(etchASketchRepoController);

        const etchASketchCiteController = new ScrollMagic.Controller();
        const etchASketchCite = new ScrollMagic.Scene({
                triggerElement: '#etchASketchRepo',
                offset: -200
            })
            .setClassToggle('#etchASketchCite', 'hide')
            .addTo(etchASketchCiteController);
    })
}