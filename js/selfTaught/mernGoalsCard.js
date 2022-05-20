const mernGoalsCard = `
    <div id='mernGoalsCard' class="card col-sm-4" style="width:18rem;">
        <img src="../pics/projects/mernGoals.png" style='width:12rem;' class="card-img-top img-fluid mx-auto dropShadowWhite" alt="Pomodoro Clock React App">
        <div class="card-body">
            <h5 class="card-title">Full Stack Goal Setter App</h5>
            <p class="card-text">My first <span class='text-white'>full stack</span> application using <span class='text-white'>MongoDB</span>, <span class='text-white'>Express</span>, <span class='text-white'>React</span>, and <span class='text-white'>Node</span>.</p>
            <p class="card-text">This was developed following an online tutorial and is deployed on <span class='text-white'>Heroku</span> (may take a min to spin up). See readme for more details.</p>
            <div class="btnContainer">
                <a id='mernGoalsDemo' href="https://goalsbypete.herokuapp.com/" class="btn btn-secondary" target="_blank">Try Demo</a>
                <a id='mernGoalsRepo' href="https://github.com/codeTrackLift/goals#readme" class="btn btn-secondary btnDark" target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='mernGoalsCite' class="text-center">Developed in May, 2022</cite>
    </div>
`;

const injectMernGoalsCard = (section) => {
    section.innerHTML += mernGoalsCard;
    setTimeout(() => {
        const mernGoalsDemoController = new ScrollMagic.Controller();
        const mernGoalsDemo = new ScrollMagic.Scene({
                triggerElement: '#mernGoalsDemo',
                offset: -200
            })
            .setClassToggle('#mernGoalsDemo', 'show')
            .addTo(mernGoalsDemoController);
    
        const mernGoalsRepoController = new ScrollMagic.Controller();
        const mernGoalsRepo = new ScrollMagic.Scene({
                triggerElement: '#mernGoalsRepo',
                offset: -200
            })
            .setClassToggle('#mernGoalsRepo', 'show')
            .addTo(mernGoalsRepoController);
    
        const mernGoalsCiteController = new ScrollMagic.Controller();
        const mernGoalsCite = new ScrollMagic.Scene({
                triggerElement: '#mernGoalsRepo',
                offset: -200
            })
            .setClassToggle('#mernGoalsCite', 'hide')
            .addTo(mernGoalsCiteController);
    })
}