const tiltCard = `
    <div id='tiltCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/projects/tiltFerrari.jpg" class="card-img-top m-auto img-fluid pt-2" style='width: 10rem;' alt="A red Ferrari spyder that is featured in is UI Experiment Tilt.">
        <div class="card-body">
            <h5 class="card-title">Tilt UI Experiment</h5>
            <p class="card-text">Another "<span class='text-white'>mini-project</span>" developed during my <a href='https://www.linkedin.com/posts/codebypete_webdevelopment-mernstackdeveloper-activity-6931971649504198656-hdBr/' target='_blank'>internship</a>.  It features an elegantly designed asset that is hover and touch responsive.</p>
            <p class="card-text">This app includes an input slider for adjustable effect magnitude.</p>
            <div class="btnContainer">
                <a id='tiltDemo' href="https://codetracklift.github.io/tilt/" class="btn btn-secondary" target="_blank">Try Demo</a>
                <a id='tiltRepo' href="https://github.com/codeTrackLift/tilt#readme" class="btn btn-secondary btnDark" target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='tiltCite' class="text-center">Developed Aug, 2022</cite>
    </div>
`;

const injectTiltCard = (section) => {
    section.innerHTML += tiltCard;
    setTimeout(() => {
        const tiltDemoController = new ScrollMagic.Controller();
        const tiltDemo = new ScrollMagic.Scene({
                triggerElement: '#tiltDemo',
                offset: -200
            })
            .setClassToggle('#tiltDemo', 'show')
            .addTo(tiltDemoController);
    
        const tiltRepoController = new ScrollMagic.Controller();
        const tiltRepo = new ScrollMagic.Scene({
                triggerElement: '#tiltRepo',
                offset: -200
            })
            .setClassToggle('#tiltRepo', 'show')
            .addTo(tiltRepoController);
            
        const tiltCiteController = new ScrollMagic.Controller();
        const tiltCite = new ScrollMagic.Scene({
                triggerElement: '#tiltRepo',
                offset: -200
            })
            .setClassToggle('#tiltCite', 'hide')
            .addTo(tiltCiteController);
    });
}