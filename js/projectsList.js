// List projects oldest to newest
const projectsList = [];
projectsList.push(injectOdinLandingpageCard);
projectsList.push(injectRockPaperScissorsCard);
projectsList.push(injectEtchASketchCard);
projectsList.push(injectJsCalcCard);
projectsList.push(injectLmnoPhotoCard);
projectsList.push(injectPacManMiniGameCard);
projectsList.push(injectcBPCard);
projectsList.push(injectPacManFactoryCard);
projectsList.push(injectAnimatedHeadCard);
projectsList.push(injectBusTrackerCard);
projectsList.push(injectLenovaIncCard);
projectsList.push(injectMarkdownPreviewerCard);
projectsList.push(injectPomodoroCard);
projectsList.push(injectTodoCard);
projectsList.push(injectxChangeCard);
projectsList.push(injectMernGoalsCard);

const injectLoading = () => {
    projectsContainer.innerHTML = `
        <div class="text-center my-5 text-silver"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
    `;
}

// Remove active class from all sort buttons
const clearSortButtons = () => {
    categoryButton.classList.remove('active');
    featuredButton.classList.remove('active');
    oldestButton.classList.remove('active');
}

// Add onclick to add sort buttons
const onclickSortButtons = () => {
    categoryButton.setAttribute('onclick', `
        injectLoading();
        changeCategoryButton();
        setTimeout(injectProjectsCategory,500);
    `);
    featuredButton.setAttribute('onclick', `
        injectLoading();
        changeFeaturedButton();
        setTimeout(injectProjectsFeatured,500);
    `);
    oldestButton.setAttribute('onclick', `
        injectLoading();
        changeOldestButton();
        setTimeout(injectProjectsOldest,500);
    `);
}


const changeFeaturedButton = () => {
    clearSortButtons();
    onclickSortButtons();
    featuredButton.classList.add('active');
    featuredButton.setAttribute('onclick', '');
}

const changeCategoryButton = () => {
    clearSortButtons();
    onclickSortButtons();
    categoryButton.setAttribute('onclick', '');
    categoryButton.classList.add('active');
}

const changeOldestButton = () => {
    clearSortButtons();
    onclickSortButtons();
    oldestButton.classList.add('active');
    oldestButton.setAttribute('onclick', '');
}


// Project sort injection functions
const injectProjectsFeatured = () => {
    projectsContainer.innerHTML = featuredProjectsSection;
    injectxChangeCard(featuredProjects);
    injectLenovaIncCard(featuredProjects);
    injectcBPCard(featuredProjects);
    
    projectsContainer.innerHTML += progressionSection;
    injectMernGoalsCard(progressionProjects);
    injectTodoCard(progressionProjects);
    injectPomodoroCard(progressionProjects);
    injectMarkdownPreviewerCard(progressionProjects);
    injectBusTrackerCard(progressionProjects);
    injectAnimatedHeadCard(progressionProjects);
    injectPacManFactoryCard(progressionProjects);
    injectPacManMiniGameCard(progressionProjects);
    injectLmnoPhotoCard(progressionProjects);
    injectJsCalcCard(progressionProjects);
    injectEtchASketchCard(progressionProjects);
    injectRockPaperScissorsCard(progressionProjects);
    injectOdinLandingpageCard(progressionProjects);
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
    injectcBPCard(bootcampProjects);
    injectPacManMiniGameCard(bootcampProjects);
    
    projectsContainer.innerHTML += selfTaughtProjectsSection;
    const selfTaughtProjects = document.getElementById('selfTaughtProjects');
    injectMernGoalsCard(selfTaughtProjects);
    injectPomodoroCard(selfTaughtProjects);
    injectMarkdownPreviewerCard(selfTaughtProjects);
    injectJsCalcCard(selfTaughtProjects);
    injectEtchASketchCard(selfTaughtProjects);
    injectRockPaperScissorsCard(selfTaughtProjects);
    injectOdinLandingpageCard(selfTaughtProjects);
}

const injectProjectsOldest = () => {
    projectsContainer.innerHTML = oldestSection;
    
    for( let i = 0; i < projectsList.length; i++ ) {
        projectsList[i](oldestProjects)
    }
}