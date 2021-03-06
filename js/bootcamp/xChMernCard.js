const xChangeMernCard = `
    <div id='xChangeMernCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/xchange/xchmern.jpg" class="card-img-top m-auto img-fluid pt-2" style='width: 10rem;' alt="MIT xChangeMern animated gif with stock ticker.">
        <div class="card-body">
            <h5 class="card-title">Full Stack Bank App</h5>
            <p class="card-text"><a href='#xChangeCard'>Bad Bank</a> was upgraded into a full stack MERN app using <span className='text-white'>MongoDB</span>, <span className='text-white'>Mongoose</span>, <span className='text-white'>Express</span>, <span className='text-white'>React</span>, and <span className='text-white'>Redux</span>.</p>
            <p class="card-text">Deployed on <span className='text-white'>Heroku</span> (give it a min to spin up), see <a href="../pages/blog.html#blog9">blog[9]</a> and <a href="../pages/blog.html#blog10">blog[10]</a>.</p>
            <div class="btnContainer">
                <a id='xChangeMernDemo' href="https://xch-mern.herokuapp.com/" class="btn btn-secondary" target="_blank">Try Demo</a>
                <a id='xChangeMernRepo' href="https://github.com/codeTrackLift/xch-mern#readme" class="btn btn-secondary btnDark" target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='xChangeMernCite' class="text-center">Developed May-Jun, 2022</cite>
    </div>
`;

const injectxChangeMernCard = (section) => {
    section.innerHTML += xChangeMernCard;
    setTimeout(() => {
        const xChangeMernDemoController = new ScrollMagic.Controller();
        const xChangeMernDemo = new ScrollMagic.Scene({
                triggerElement: '#xChangeMernDemo',
                offset: -200
            })
            .setClassToggle('#xChangeMernDemo', 'show')
            .addTo(xChangeMernDemoController);
    
        const xChangeMernRepoController = new ScrollMagic.Controller();
        const xChangeMernRepo = new ScrollMagic.Scene({
                triggerElement: '#xChangeMernRepo',
                offset: -200
            })
            .setClassToggle('#xChangeMernRepo', 'show')
            .addTo(xChangeMernRepoController);
            
        const xChangeMernCiteController = new ScrollMagic.Controller();
        const xChangeMernCite = new ScrollMagic.Scene({
                triggerElement: '#xChangeMernRepo',
                offset: -200
            })
            .setClassToggle('#xChangeMernCite', 'hide')
            .addTo(xChangeMernCiteController);
    });
}