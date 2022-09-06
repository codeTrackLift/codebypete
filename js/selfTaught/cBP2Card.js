const cBP2Card = `
    <div id='cBP2Card' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/projects/giphy_cbpHero.gif" class="card-img-top m-auto img-fluid pt-3" style='width: 14rem;' alt="Hero image for codeByPete.com | Web Developer Portfolio.  The website features a light and dark mode, as well as a number of custom assets.">
        <div class="card-body">
            <h5 class="card-title">codeByPete v2.0</h5>
            <p class="card-text">This is a <span class='text-white'>hand-crafted</span> React app featuring a light and dark mode, and a number of custom assets.</p>
            <p class="card-text">Framer-motion was used for animations.  This site was <span class='text-white'>performance optimized</span> using <a href='https://gtmetrix.com' target='_blank'>GTmetrix</a>.</p>
            <div class="btnContainer">
                <a id='cBP2Demo' href="https://codetracklift.github.io/reactbypete/" class="btn btn-secondary" target="_blank">Visit Site</a>
                <a id='cBP2Repo' href="https://github.com/codeTrackLift/reactbypete#readme" class="btn btn-secondary btnDark" target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='cBP2Cite' class="text-center">Developed Aug-Sep, 2022</cite>
    </div>
`;

const injectCBP2Card = (section) => {
    section.innerHTML += cBP2Card;
    setTimeout(() => {
        const cBP2DemoController = new ScrollMagic.Controller();
        const cBP2Demo = new ScrollMagic.Scene({
                triggerElement: '#cBP2Demo',
                offset: -200
            })
            .setClassToggle('#cBP2Demo', 'show')
            .addTo(cBP2DemoController);
    
        const cBP2RepoController = new ScrollMagic.Controller();
        const cBP2Repo = new ScrollMagic.Scene({
                triggerElement: '#cBP2Repo',
                offset: -200
            })
            .setClassToggle('#cBP2Repo', 'show')
            .addTo(cBP2RepoController);
            
        const cBP2CiteController = new ScrollMagic.Controller();
        const cBP2Cite = new ScrollMagic.Scene({
                triggerElement: '#cBP2Repo',
                offset: -200
            })
            .setClassToggle('#cBP2Cite', 'hide')
            .addTo(cBP2CiteController);
    });
}