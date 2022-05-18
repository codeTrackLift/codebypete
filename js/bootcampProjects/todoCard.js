const todoCard = `
    <div id='todoCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/projects/todoDashboard.gif" class="card-img-top mx-auto pt-4"
            alt="To do dashboard animated gif." style="height:10rem;">
        <div class="card-body">
            <h5 class="card-title">To-Do Dashboard</h5>
            <p class="card-text">This <a href="https://xpro.mit.edu/" target="_blank">MIT xPRO</a> <span>
                    Bootcamp</span> assignment started as a simple to-do list.</p>
            <p class="card-text">Customizations: <span>fetching API data</span>
                with <span>error handling</span>, tasks are
                retained in <span>local storage</span> and persist through a reload, see <a
                href="../pages/blog.html#blog7Button">blog[7]</a>.</p>
            <div class="btnContainer">
                <a id='todoDemo' href="https://codetracklift.github.io/todo/" class="btn btn-secondary"
                    target="_blank">Try Demo</a>
                <a id='todoRepo' href="https://github.com/codeTrackLift/todo#readme" class="btn btn-secondary btnDark "
                    target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='todoCite' class="text-center">Developed in Apr, 2022</cite>
    </div>
`;

const injectTodoCard = () => {
    bootcampProjects.innerHTML += todoCard;
    setTimeout(() => {
        const todoDemoController = new ScrollMagic.Controller();
        const todoDemo = new ScrollMagic.Scene({
                triggerElement: '#todoDemo',
                offset: -200
            })
            .setClassToggle('#todoDemo', 'show')
            .addTo(todoDemoController);
    
        const todoRepoController = new ScrollMagic.Controller();
        const todoRepo = new ScrollMagic.Scene({
                triggerElement: '#todoRepo',
                offset: -200
            })
            .setClassToggle('#todoRepo', 'show')
            .addTo(todoRepoController);
    
        const todoCiteController = new ScrollMagic.Controller();
        const todoCite = new ScrollMagic.Scene({
                triggerElement: '#todoRepo',
                offset: -200
            })
            .setClassToggle('#todoCite', 'hide')
            .addTo(todoCiteController);
    })
}