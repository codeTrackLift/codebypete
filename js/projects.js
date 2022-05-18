const projectsContainer = document.getElementById('projectsContainer');

const businessProjectsSection = `
    <div class="container-fluid myArticles">
        <h3>Deployed Business Websites</h3>
    </div>
    <div id='businessProjects' class="myProjects row container-fluid justify-content-center">
    </div>
`;

const bootcampProjectsSection = `
    <div class="container-fluid myArticles">
        <h3>Bootcamp Projects</h3>
    </div>
    <div id='bootcampProjects' class="myProjects row container-fluid justify-content-center">
    </div> 
`;

const selfTaughtProjectsSection = `
    <div class="container-fluid myArticles">
        <h3>Self-Taught Progression Projects</h3>
    </div>
    <div id='selfTaughtProjects' class="myProjects row container-fluid justify-content-center">
    </div>
`;

const injectProjectsContainer = () => {
    projectsContainer.innerHTML += businessProjectsSection;
    const businessProjects = document.getElementById('businessProjects');
    
    projectsContainer.innerHTML += bootcampProjectsSection;
    const bootcampProjects = document.getElementById('bootcampProjects');
    
    projectsContainer.innerHTML += selfTaughtProjectsSection;
    const selfTaughtProjects = document.getElementById('selfTaughtProjects');
}

const buttonBlogController = new ScrollMagic.Controller();
const buttonBlog = new ScrollMagic.Scene({
        triggerElement: '#buttonBlog',
        offset: -350
    })
    .setClassToggle('#buttonBlog', 'show')
    .addTo(buttonBlogController);

const buttonContactController = new ScrollMagic.Controller();
const buttonContact = new ScrollMagic.Scene({
        triggerElement: '#buttonContact',
        offset: -350
    })
    .setClassToggle('#buttonContact', 'show')
    .addTo(buttonContactController);