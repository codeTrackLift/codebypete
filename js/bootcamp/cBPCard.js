const cBPCard = `
    <div id='cBPCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/projects/giphycBP.gif" class="card-img-top m-auto" alt="codeByPete welcome animation">
        <div class="card-body">
            <h5 class="card-title">codeByPete.com</h5>
            <p class="card-text">Developed using <span class='text-white'>vanilla HTML</span>, <span class='text-white'>CSS</span>, and <span class='text-white'>JavaScript</span> with <span class='text-white'>Bootstrap</span> and <span class='text-white'>ScrollMagic</span> libraries.</p>
            <p class="card-text"><span class='text-white'>Mobile first</span> and <span class='text-white'>responsive design</span>. Custom JavaScript functionality and CSS animations, see <a href="../pages/blog.html#blog4Button">blog[4]</a>.</p>
            <div class="btnContainer">
                <a id='cBPRepo' href="https://github.com/codeTrackLift/codebypete#readme" class="btn btn-secondary mx-auto" target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='cBPCite' class="text-center">Developed Feb-Mar, 2022</cite>
    </div>
`;

const injectcBPCard = (section) => {
    section.innerHTML += cBPCard;
    setTimeout(() => {
    
        const cBPRepoController = new ScrollMagic.Controller();
        const cBPRepo = new ScrollMagic.Scene({
                triggerElement: '#cBPRepo',
                offset: -200
            })
            .setClassToggle('#cBPRepo', 'show')
            .addTo(cBPRepoController);
            
        const cBPCiteController = new ScrollMagic.Controller();
        const cBPCite = new ScrollMagic.Scene({
                triggerElement: '#cBPRepo',
                offset: -200
            })
            .setClassToggle('#cBPCite', 'hide')
            .addTo(cBPCiteController);
    });
}