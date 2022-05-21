const mernGoalsCard = `
    <div id='mernGoalsCard' class="card col-sm-4" style="width:18rem;">
        <img src="../pics/projects/mernGoals.png" style='width:12rem;' class="card-img-top img-fluid mx-auto dropShadowSilver" alt="Pomodoro Clock React App">
        <div class="card-body">
            <h5 class="card-title">GoalSetter MERN CRUD App</h5>
            <p class="card-text">My first <span class='text-white'>full stack</span> application using <span class='text-white'>MongoDB</span>, <span class='text-white'>Express</span>, <span class='text-white'>React</span>, and <span class='text-white'>Node</span>.</p>
            <p class="card-text">Dependencies include: <span class='text-white'>JSON Web Tokens</span>, <span class='text-white'>Mongoose</span>, <span class='text-white'>Redux</span>, and <span class='text-white'>Axios</span>.  This app is deployed on <span class='text-white'>Heroku</span> and may take a min to spin up.</p>
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