const cBPCard = `
    <div id='cBPCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/projects/giphycBP.gif" class="card-img-top m-auto" alt="codeByPete welcome animation">
        <div class="card-body">
            <h5 class="card-title">codeByPete v1.0</h5>
            <p class="card-text">Developed using <span class='text-white'>HTML</span>, <span class='text-white'>CSS</span>, and vanilla <span class='text-white'>JavaScript</span> with <span class='text-white'>Bootstrap</span> and <span class='text-white'>ScrollMagic</span> libraries.</p>
            <p class="card-text">Includes a <span class='text-white'>mobile first</span> and <span class='text-white'>responsive design</span> with custom JavaScript functionality and CSS animations, see <a href="../pages/blog.html#blog4">blog[4]</a>.</p>
            <div class="btnContainer">
            <a id='cBP2Demo' href="https://codetracklift.github.io/codebypete/" class="btn btn-secondary">Visit Site</a>
            <a id='cBP2Repo' href="https://github.com/codeTrackLift/codebypete#readme" class="btn btn-secondary btnDark" target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
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