const pacManFactoryCard = `
    <div id='pacManFactoryCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/pacman/aquaPacMan.png" class="card-img-top mx-auto pt-4"
            alt="Aqua-PacMan animated gif." style="width:10rem;">
        <div class="card-body">
            <h5 class="card-title">PacMan Factory</h5>
            <p class="card-text">This <a href="https://xpro.mit.edu/" target="_blank">MIT xPRO</a> <span>
                    Bootcamp Project</span> demonstrates use of array methods and DOM manipulation.</p>
            <p class="card-text"><span>Custom features</span> include an 'Aqua' theme and <em>ZAP!</em> PacMan
                button, see <a href="../pages/blog.html#blog5Button">blog[5]</a>.</p>
            <div class="btnContainer">
                <a id='pacManFactoryDemo' href="https://codetracklift.github.io/pacmen_factory/"
                    class="btn btn-secondary" target="_blank">Try Demo</a>
                <a id='pacManFactoryRepo' href="https://github.com/codeTrackLift/pacmen_factory#readme"
                    class="btn btn-secondary btnDark " target="'_blank"><img
                        src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='pacManFactoryCite' class="text-center">Developed in Mar, 2022</cite>
    </div>
`;

const injectPacManFactoryCard = () => bootcampProjects.innerHTML += pacManFactoryCard;