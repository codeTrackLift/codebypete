const projectsContainer = document.getElementById('projectsContainer');
const categoryButton = document.getElementById('categoryButton');
const newestButton = document.getElementById('newestButton');
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

const newestSection = `
    <div class="container-fluid myArticles">
        <h3>Newest to Oldest</h3>
    </div>
    <div id='newestProjects' class="myProjects row container-fluid justify-content-center">
    </div>
`;

const oldestSection = `
    <div class="container-fluid myArticles">
        <h3>Oldest to Newest</h3>
    </div>
    <div id='oldestProjects' class="myProjects row container-fluid justify-content-center">
    </div>
`;

const injectLoading = () => {
    projectsContainer.innerHTML = `
        <div class="text-center my-5 text-silver"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
    `;
}

const clearSortButtons = () => {
    categoryButton.classList.remove('active');
    newestButton.classList.remove('active');
    oldestButton.classList.remove('active');
}

const onclickSortButtons = () => {
    categoryButton.setAttribute('onclick', `
        injectLoading();
        changeCategoryButton();
        setTimeout(injectProjectsCategory,500);
    `);
    newestButton.setAttribute('onclick', `
        injectLoading();
        changeNewestButton();
        setTimeout(injectProjectsNewest,500);
    `);
    oldestButton.setAttribute('onclick', `
        injectLoading();
        changeOldestButton();
        setTimeout(injectProjectsOldest,500);
    `);
}

const changeCategoryButton = () => {
    clearSortButtons();
    onclickSortButtons();
    categoryButton.setAttribute('onclick', '');
    categoryButton.classList.add('active');
}

const changeNewestButton = () => {
    clearSortButtons();
    onclickSortButtons();
    newestButton.classList.add('active');
    newestButton.setAttribute('onclick', '');
}

const changeOldestButton = () => {
    clearSortButtons();
    onclickSortButtons();
    oldestButton.classList.add('active');
    oldestButton.setAttribute('onclick', '');
}

const injectProjectsCategory = () => {
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

const injectProjectsNewest = () => {
    projectsContainer.innerHTML = newestSection;
    injectxChangeCard(newestProjects);
    injectTodoCard(newestProjects);
    injectPomodoroCard(newestProjects);
    injectMarkdownPreviewerCard(newestProjects);
    injectLenovaIncCard(newestProjects);
    injectBusTrackerCard(newestProjects);
    injectAnimatedHeadCard(newestProjects);
    injectPacManFactoryCard(newestProjects);
    injectPacManMiniGameCard(newestProjects);
    injectLmnoPhotoCard(newestProjects);
    injectJsCalcCard(newestProjects);
    injectEtchASketchCard(newestProjects);
    injectRockPaperScissorsCard(newestProjects);
    injectOdinLandingpageCard(newestProjects);
}

const injectProjectsOldest = () => {
    projectsContainer.innerHTML = oldestSection;
    injectOdinLandingpageCard(oldestProjects);
    injectRockPaperScissorsCard(oldestProjects);
    injectEtchASketchCard(oldestProjects);
    injectJsCalcCard(oldestProjects);
    injectLmnoPhotoCard(oldestProjects);
    injectPacManMiniGameCard(oldestProjects);
    injectPacManFactoryCard(oldestProjects);
    injectAnimatedHeadCard(oldestProjects);
    injectBusTrackerCard(oldestProjects);
    injectLenovaIncCard(oldestProjects);
    injectMarkdownPreviewerCard(oldestProjects);
    injectPomodoroCard(oldestProjects);
    injectTodoCard(oldestProjects);
    injectxChangeCard(oldestProjects);
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