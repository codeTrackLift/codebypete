const rockPaperScissorsCard = `
    <div id='rockPaperScissorsCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/projects/rock-paper-scissors.png" class="card-img-top mx-auto"
            alt="Screenshot of a Rock, Paper, Scissors project." style="width:12rem;">
        <div class="card-body">
            <h5 class="card-title">Rock, Paper, Scissors</h5>
            <p class="card-text">My <span>first JavaScript project</span>, this was completed as part of <a
                    href="https://www.theodinproject.com/" target="_blank">The Odin Project</a> Foundations
                course.
            </p>
            <p class="card-text">Accepts text and mouse inputs with text validation and results tracking!</p>
            <div class="btnContainer">
                <a id='rockPaperScissorsDemo' href="https://codetracklift.github.io/rock-paper-scissors/"
                    class="btn btn-secondary" target="'_blank">Play Game</a>
                <a id='rockPaperScissorsRepo' href="https://github.com/codeTrackLift/rock-paper-scissors#readme"
                    class="btn btn-secondary btnDark" target="'_blank"><img
                        src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='rockPaperScissorsCite' class="text-center">Developed in Jan, 2022</cite>
    </div>
`;

const injectRockPaperScissorsCard = (section) => {
    section.innerHTML += rockPaperScissorsCard;
    setTimeout(() => {
        const rockPaperScissorsDemoController = new ScrollMagic.Controller();
        const rockPaperScissorsDemo = new ScrollMagic.Scene({
                triggerElement: '#rockPaperScissorsDemo',
                offset: -200
            })
            .setClassToggle('#rockPaperScissorsDemo', 'show')
            .addTo(rockPaperScissorsDemoController);

        const rockPaperScissorsRepoController = new ScrollMagic.Controller();
        const rockPaperScissorsRepo = new ScrollMagic.Scene({
                triggerElement: '#rockPaperScissorsRepo',
                offset: -200
            })
            .setClassToggle('#rockPaperScissorsRepo', 'show')
            .addTo(rockPaperScissorsRepoController);

        const rockPaperScissorsCiteController = new ScrollMagic.Controller();
        const rockPaperScissorsCite = new ScrollMagic.Scene({
                triggerElement: '#rockPaperScissorsRepo',
                offset: -200
            })
            .setClassToggle('#rockPaperScissorsCite', 'hide')
            .addTo(rockPaperScissorsCiteController);
    })
}