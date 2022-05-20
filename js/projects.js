// Projects sections
const projectsContainer = document.getElementById('projectsContainer');
const categoryButton = document.getElementById('categoryButton');
const featuredButton = document.getElementById('featuredButton');
const oldestButton = document.getElementById('oldestButton');

const businessProjectsSection = `
    <div class="container-fluid myArticles">
        <h3>Business Websites</h3>
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
        <h3>Self-Taught Projects</h3>
    </div>
    <div id='selfTaughtProjects' class="myProjects row container-fluid justify-content-center">
    </div>
`;

const featuredProjectsSection = `
    <div class="container-fluid myArticles">
        <h3>Featured Projects</h3>
    </div>
    <div id='featuredProjects' class="myProjects row container-fluid justify-content-center">
    </div>
`;

const progressionSection = `
    <div class="container-fluid myArticles">
        <h3>Progression Projects | Newest to Oldest</h3>
    </div>
    <div id='progressionProjects' class="myProjects row container-fluid justify-content-center">
    </div>
`;

const oldestSection = `
    <div class="container-fluid myArticles">
        <h3>Oldest to Newest</h3>
    </div>
    <div id='oldestProjects' class="myProjects row container-fluid justify-content-center">
    </div>
`;

// Bottom nav buttons
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