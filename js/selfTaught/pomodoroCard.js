const pomodoroCard = `
    <div id='pomodoroClockCard' class="card col-sm-4" style="width:18rem;">
        <img src="../pics/projects/pomodoroClock.jpg" style='width:12rem;' class="card-img-top img-fluid mx-auto" alt="Pomodoro Clock React App">
        <div class="card-body">
            <h5 class="card-title">Pomodoro Clock</h5>
            <p class="card-text">My second <span class="text-white">React App</span>, also part of <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a>'s Front End Development Libraries Certification.</p>
            <p class="card-text">The <span class="text-white">useState() hook</span> was used for this project instead of Class constructors.</p>
            <div class="btnContainer">
                <a id='pomodoroClockDemo' href="https://codetracklift.github.io/pomodoro/" class="btn btn-secondary" target="_blank">Try Demo</a>
                <a id='pomodoroClockRepo' href="https://github.com/codeTrackLift/pomodoro#readme" class="btn btn-secondary btnDark" target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='pomodoroClockCite' class="text-center">Developed in Apr, 2022</cite>
    </div>
`;

const injectPomodoroCard = (section) => {
    section.innerHTML += pomodoroCard;
    setTimeout(() => {
        const pomodoroClockDemoController = new ScrollMagic.Controller();
        const pomodoroClockDemo = new ScrollMagic.Scene({
                triggerElement: '#pomodoroClockDemo',
                offset: -200
            })
            .setClassToggle('#pomodoroClockDemo', 'show')
            .addTo(pomodoroClockDemoController);
    
        const pomodoroClockRepoController = new ScrollMagic.Controller();
        const pomodoroClockRepo = new ScrollMagic.Scene({
                triggerElement: '#pomodoroClockRepo',
                offset: -200
            })
            .setClassToggle('#pomodoroClockRepo', 'show')
            .addTo(pomodoroClockRepoController);
    
        const pomodoroClockCiteController = new ScrollMagic.Controller();
        const pomodoroClockCite = new ScrollMagic.Scene({
                triggerElement: '#pomodoroClockRepo',
                offset: -200
            })
            .setClassToggle('#pomodoroClockCite', 'hide')
            .addTo(pomodoroClockCiteController);
    })
}