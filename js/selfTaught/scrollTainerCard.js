const scrollTainerCard = `
    <div id='scrollTainerCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/projects/scrollTainerM2CS.jpg" class="card-img-top m-auto img-fluid pt-2" style='width: 10rem;' alt="BMW M2 CS, which is a featured asset in the ScrollTainer UI Experiment.">
        <div class="card-body">
            <h5 class="card-title">ScrollTainer UI Experiment</h5>
            <p class="card-text">This "<span class='text-white'>mini-project</span>" was developed during my <a href='https://www.linkedin.com/posts/codebypete_webdevelopment-mernstackdeveloper-activity-6931971649504198656-hdBr/' target='_blank'>Forbes Media internship</a>.  Built with <span class='text-white'>React</span> and <span class='text-white'>Framer-motion</span> for animations.</p>
            <p class="card-text">This was one of my contributions to the <span class='text-white'>Forbes UI Showcase</span>.  See <a href="../pages/blog.html#blog13Button">blog[13]</a>.</p>
            <div class="btnContainer">
                <a id='scrollTainerDemo' href="https://codetracklift.github.io/scrolltainer/" class="btn btn-secondary" target="_blank">Try Demo</a>
                <a id='scrollTainerRepo' href="https://github.com/codeTrackLift/scrolltainer#readme" class="btn btn-secondary btnDark" target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='scrollTainerCite' class="text-center">Developed Jul, 2022</cite>
    </div>
`;

const injectScrollTainerCard = (section) => {
    section.innerHTML += scrollTainerCard;
    setTimeout(() => {
        const scrollTainerDemoController = new ScrollMagic.Controller();
        const scrollTainerDemo = new ScrollMagic.Scene({
                triggerElement: '#scrollTainerDemo',
                offset: -200
            })
            .setClassToggle('#scrollTainerDemo', 'show')
            .addTo(scrollTainerDemoController);
    
        const scrollTainerRepoController = new ScrollMagic.Controller();
        const scrollTainerRepo = new ScrollMagic.Scene({
                triggerElement: '#scrollTainerRepo',
                offset: -200
            })
            .setClassToggle('#scrollTainerRepo', 'show')
            .addTo(scrollTainerRepoController);
            
        const scrollTainerCiteController = new ScrollMagic.Controller();
        const scrollTainerCite = new ScrollMagic.Scene({
                triggerElement: '#scrollTainerRepo',
                offset: -200
            })
            .setClassToggle('#scrollTainerCite', 'hide')
            .addTo(scrollTainerCiteController);
    });
}