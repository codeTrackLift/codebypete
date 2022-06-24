const accordionContainer = document.getElementById('accordionContainer');

const injectLoading = () => {
    resetBlogOpenStatus();
    accordionContainer.style.backgroundColor = `transparent`;
    accordionContainer.style.boxShadow = `none`;
    accordionContainer.innerHTML = `
        <div class="text-center my-5 text-silver">
            <span class="spinner-border" role="status"></span>
            <p>Loading...</p>
        </div>
    `;
}

const changeNewestButton = () => {
    oldestButton.classList.remove('active');
    oldestButton.setAttribute('onclick', `
        injectLoading();
        changeOldestButton();
        setTimeout(injectBlogArticlesOldest, 500);
    `);
    newestButton.setAttribute('onclick', '');
    newestButton.classList.add('active');
}

const changeOldestButton = () => {
    newestButton.classList.remove('active');
    newestButton.setAttribute('onclick', `
        injectLoading();
        changeNewestButton();
        setTimeout(injectBlogArticlesNewest, 500);
    `);
    oldestButton.classList.add('active');
    oldestButton.setAttribute('onclick', '');
}

const resetAccordion = () => {
    accordionContainer.innerHTML = ``;
    accordionContainer.style.backgroundColor = `black`;
    accordionContainer.style.boxShadow = `box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`;
}

const injectAccordion = (id, number, title, date) => {
    let twoDigits = ``;
    if (id >= 10) {
        twoDigits = ` style="margin-left:-0.5rem;"`;
    }
    return `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button id='blog${id}Button' onclick="blog${id}Open()" class="accordion-button collapsed bg-transparent"
                    type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${number}"
                    aria-expanded="true" aria-controls="panelsStayOpen-collapse${number}">
                    <h6 class="my-auto">blog<span style='color:dodgerblue'>[</span><span style="color:cornflowerblue">${id}</span><span
                            style='color:dodgerblue'>]</span></h6>
                    <h5 class="w-100 my-auto"${twoDigits}>${title}</h5>
                    <div class="d-none d-sm-none d-md-block w-50 text-end">
                        <p class="text-gray my-auto">${date}</p>
                    </div>
                </button>
            </h2>
            <div id="blog${id}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${number}">
                <div class="text-center my-5"><span class="spinner-border" role="status"></span><p>Loading...</p></div>
            </div>
        </div>
    `;
};

const injectBlogArticlesNewest = () => {
    resetAccordion();
    for (let i = 0; i < blogIndex.length; i++) {
        accordionContainer.innerHTML += injectAccordion(
            blogIndex[i].id, 
            blogIndex[i].number, 
            blogIndex[i].title, 
            blogIndex[i].date
        );
    };
};
    
const injectBlogArticlesOldest = () => {
    resetAccordion();
    for (let i = blogIndex.length - 1; i >= 0; i--) {
        accordionContainer.innerHTML += injectAccordion(
            blogIndex[i].id, 
            blogIndex[i].number, 
            blogIndex[i].title, 
            blogIndex[i].date
        );
    };
};

// Bottom nav buttons
const buttonAboutController = new ScrollMagic.Controller();
const buttonAbout = new ScrollMagic.Scene({
    triggerElement: '#buttonAbout',
    offset: -350
})
.setClassToggle('#buttonAbout', 'show')
.addTo(buttonAboutController);

const buttonProjectsController = new ScrollMagic.Controller();
const buttonProjects = new ScrollMagic.Scene({
    triggerElement: '#buttonProjects',
    offset: -350
})
.setClassToggle('#buttonProjects', 'show')
.addTo(buttonProjectsController);