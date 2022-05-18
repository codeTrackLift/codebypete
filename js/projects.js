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

const chronologicalSection = `
    <div class="container-fluid myArticles">
        <h3>Projects in Reverse Chronology</h3>
    </div>
    <div id='chronologicalProjects' class="myProjects row container-fluid justify-content-center">
    </div>
`;

const injectProjectsDefault = () => {
    projectsContainer.innerHTML = businessProjectsSection;
    const businessProjects = document.getElementById('businessProjects');
    injectLenovaIncCard(businessProjects);
    injectLmnoPhotoCard(businessProjects);
    
    projectsContainer.innerHTML += bootcampProjectsSection;
    const bootcampProjects = document.getElementById('bootcampProjects');
    injectxChangeCard(bootcampProjects);
    injectTodoCard(bootcampProjects);
    injectBusTrackerCard(bootcampProjects);
    injectAnimatedHeadCard(bootcampProjects);
    injectPacManFactoryCard(bootcampProjects);
    injectPacManMiniGameCard(bootcampProjects);
    
    projectsContainer.innerHTML += selfTaughtProjectsSection;
    const selfTaughtProjects = document.getElementById('selfTaughtProjects');    
    injectPomodoroCard(selfTaughtProjects);
    injectMarkdownPreviewerCard(selfTaughtProjects);
    injectJsCalcCard(selfTaughtProjects);
    injectEtchASketchCard(selfTaughtProjects);
    injectRockPaperScissorsCard(selfTaughtProjects);
    injectOdinLandingpageCard(selfTaughtProjects);
}

const injectProjectsChronological = () => {
    projectsContainer.innerHTML = chronologicalSection;
    injectxChangeCard(chronologicalProjects);
    injectTodoCard(chronologicalProjects);
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