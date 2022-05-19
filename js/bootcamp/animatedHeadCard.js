const animatedHeadCard = `
    <div id='animatedHeadCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/projects/animatedHead.gif" class="card-img-top mx-auto pt-4" alt="Animated head image" style="width:10rem;">
        <div class="card-body">
            <h5 class="card-title">Eye Movement</h5>
            <p class="card-text">This <a href="https://xpro.mit.edu/" target="_blank">MIT xPRO</a><span> Bootcamp Project</span> demonstrates use of 'onmouse' and 'ontouch' event handlers.</p>
            <p class="card-text"><span>Custom CSS</span> 'aesthetics' and 'typewriter' text was added, see <a href="../pages/blog.html#blog5Button">blog[5]</a>.</p>
            <div class="btnContainer">
                <a id='animatedHeadDemo' href="https://codetracklift.github.io/eyemovement/" class="btn btn-secondary" target="_blank">Try Demo</a>
                <a id='animatedHeadRepo' href="https://github.com/codeTrackLift/eyemovement#readme" class="btn btn-secondary btnDark " target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='animatedHeadCite' class="text-center">Developed in Mar, 2022</cite>
    </div>
`;

const injectAnimatedHeadCard = (section) => {
    section.innerHTML += animatedHeadCard;
    setTimeout(() => {
        const animatedHeadDemoController = new ScrollMagic.Controller();
        const animatedHeadDemo = new ScrollMagic.Scene({
                triggerElement: '#animatedHeadDemo',
                offset: -200
            })
            .setClassToggle('#animatedHeadDemo', 'show')
            .addTo(animatedHeadDemoController);
    
        const animatedHeadRepoController = new ScrollMagic.Controller();
        const animatedHeadRepo = new ScrollMagic.Scene({
                triggerElement: '#animatedHeadRepo',
                offset: -200
            })
            .setClassToggle('#animatedHeadRepo', 'show')
            .addTo(animatedHeadRepoController);
    
        const animatedHeadCiteController = new ScrollMagic.Controller();
        const animatedHeadCite = new ScrollMagic.Scene({
                triggerElement: '#animatedHeadRepo',
                offset: -200
            })
            .setClassToggle('#animatedHeadCite', 'hide')
            .addTo(animatedHeadCiteController);
    })
}