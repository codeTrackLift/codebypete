const pacManFactoryCard = `
    <div id='pacManFactoryCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/pacman/aquaPacMan.jpg" class="card-img-top mx-auto pt-3 img-fluid" alt="Aqua-PacMan animated gif." style="width:10rem;">
        <div class="card-body">
            <h5 class="card-title">PacMan Factory</h5>
            <p class="card-text">This <a href="https://xpro.mit.edu/" target="_blank">MIT xPRO</a> <span> Bootcamp Project</span> demonstrates use of array methods and DOM manipulation.</p>
            <p class="card-text"><span>Custom features</span> include an 'Aqua' theme and <em>ZAP!</em> PacMan button, see <a href="../pages/blog.html#blog5Button">blog[5]</a>.</p>
            <div class="btnContainer">
                <a id='pacManFactoryDemo' href="https://codetracklift.github.io/pacmen_factory/" class="btn btn-secondary" target="_blank">Try Demo</a>
                <a id='pacManFactoryRepo' href="https://github.com/codeTrackLift/pacmen_factory#readme" class="btn btn-secondary btnDark " target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='pacManFactoryCite' class="text-center">Developed in Mar, 2022</cite>
    </div>
`;

const injectPacManFactoryCard = (section) => {
    section.innerHTML += pacManFactoryCard;
    setTimeout(() => {
        const pacManFactoryDemoController = new ScrollMagic.Controller();
        const pacManFactoryDemo = new ScrollMagic.Scene({
                triggerElement: '#pacManFactoryDemo',
                offset: -200
            })
            .setClassToggle('#pacManFactoryDemo', 'show')
            .addTo(pacManFactoryDemoController);
    
        const pacManFactoryRepoController = new ScrollMagic.Controller();
        const pacManFactoryRepo = new ScrollMagic.Scene({
                triggerElement: '#pacManFactoryRepo',
                offset: -200
            })
            .setClassToggle('#pacManFactoryRepo', 'show')
            .addTo(pacManFactoryRepoController);
    
        const pacManFactoryCiteController = new ScrollMagic.Controller();
        const pacManFactoryCite = new ScrollMagic.Scene({
                triggerElement: '#pacManFactoryRepo',
                offset: -200
            })
            .setClassToggle('#pacManFactoryCite', 'hide')
            .addTo(pacManFactoryCiteController);
    })
}