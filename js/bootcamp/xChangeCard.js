const xChangeCard = `
    <div id='xChangeCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/xchange/giphyxChangeStockTicker.gif" class="card-img-top m-auto"
            alt="MIT xChange animated gif with stock ticker.">
        <div class="card-body">
            <h5 class="card-title">Currency Exchange Bad Bank</h5>
            <p class="card-text">This React App includes a 'mock'<span className="text-white"> database</span> with <span class="text-white">input validation</span>.</p>
            <p class="card-text">Data is<span className="text-white"> fetched </span>from an <span className="text-white">API</span> and <span className="text-white">rendered</span> in an animated <span className="text-white">stock ticker</span>, see <a
                href="../pages/blog.html#blog8Button">blog[8]</a>.</p>
            <div class="btnContainer">
                <a id='xChangeDemo' href="https://codetracklift.github.io/xchange/" class="btn btn-secondary"
                    target="_blank">Try Demo</a>
                <a id='xChangeRepo' href="https://github.com/codeTrackLift/xchange#readme" class="btn btn-secondary btnDark "
                    target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='xChangeCite' class="text-center">Developed Apr-May, 2022</cite>
    </div>
`;

const injectxChangeCard = (section) => {
    section.innerHTML += xChangeCard;
    setTimeout(() => {
        const xChangeDemoController = new ScrollMagic.Controller();
        const xChangeDemo = new ScrollMagic.Scene({
                triggerElement: '#xChangeDemo',
                offset: -200
            })
            .setClassToggle('#xChangeDemo', 'show')
            .addTo(xChangeDemoController);
    
        const xChangeRepoController = new ScrollMagic.Controller();
        const xChangeRepo = new ScrollMagic.Scene({
                triggerElement: '#xChangeRepo',
                offset: -200
            })
            .setClassToggle('#xChangeRepo', 'show')
            .addTo(xChangeRepoController);
            
        const xChangeCiteController = new ScrollMagic.Controller();
        const xChangeCite = new ScrollMagic.Scene({
                triggerElement: '#xChangeRepo',
                offset: -200
            })
            .setClassToggle('#xChangeCite', 'hide')
            .addTo(xChangeCiteController);
    });
}