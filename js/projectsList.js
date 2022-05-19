// List projects newest to oldest
const projectsList = [];
projectsList.push(injectxChangeCard);
projectsList.push(injectTodoCard);
projectsList.push(injectPomodoroCard);
projectsList.push(injectMarkdownPreviewerCard);
projectsList.push(injectLenovaIncCard);
projectsList.push(injectBusTrackerCard);
projectsList.push(injectAnimatedHeadCard);
projectsList.push(injectPacManFactoryCard);
projectsList.push(injectcBPCard);
projectsList.push(injectPacManMiniGameCard);
projectsList.push(injectLmnoPhotoCard);
projectsList.push(injectJsCalcCard);
projectsList.push(injectEtchASketchCard);
projectsList.push(injectRockPaperScissorsCard);
projectsList.push(injectOdinLandingpageCard);

const injectLoading = () => {
    projectsContainer.innerHTML = `
        <div class="text-center my-5 text-silver"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
    `;
}

// Remove active class from all sort buttons
const clearSortButtons = () => {
    categoryButton.classList.remove('active');
    newestButton.classList.remove('active');
    oldestButton.classList.remove('active');
}

// Add onclick to add sort buttons
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

// Project sort injection functions
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
    injectcBPCard(bootcampProjects);
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
    
    for( let i = 0; i < projectsList.length; i++ ) {
        projectsList[i](newestProjects)
    }
}

const injectProjectsOldest = () => {
    projectsContainer.innerHTML = oldestSection;
    
    for( let i = projectsList.length; i > 0; i-- ) {
        projectsList[i - 1](oldestProjects)
    }
}