const pacManMiniGameCard = `
    <div id='pacManMiniGameCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/pacman/pacmanMiniGame.gif" class="card-img-top mx-auto pt-4" alt="Pac Man image"
            style="width:8rem;">
        <div class="card-body">
            <h5 class="card-title">PacMan Mini-Game</h5>
            <p class="card-text">This coding exercise was <span>customized</span> into a
                '<span>mini-game</span>'
                with collision detection and score tracking. </p>
            <p class="card-text">This is <span>fully responsive</span> and accepts keyboard, mouse, and mobile
                screen inputs! See <a href='../pages/blog.html#blog3Button'>blog[3]</a>.</p>
            <div class="btnContainer">
                <a id='pacManMiniGameDemo' href="https://codetracklift.github.io/pacman/"
                    class="btn btn-secondary" target="_blank">Play
                    Game</a>
                <a id='pacManMiniGameRepo' href="https://github.com/codeTrackLift/pacman#readme"
                    class="btn btn-secondary btnDark " target="'_blank"><img
                        src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='pacManMiniGameCite' class="text-center">Developed in Feb, 2022</cite>
    </div>
`;

const injectPacManMiniGameCard = () => bootcampProjects.innerHTML += pacManMiniGameCard;