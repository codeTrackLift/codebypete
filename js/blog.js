// Defining global blog variables
const accordionContainer = document.getElementById('accordionContainer');
let blog11OpenStatus = false;
let blog10OpenStatus = false;
let blog9OpenStatus = false;
let blog8OpenStatus = false;
let blog7OpenStatus = false;
let blog6OpenStatus = false;
let blog5OpenStatus = false;
let blog4OpenStatus = false;
let blog3OpenStatus = false;
let blog2OpenStatus = false;
let blog1OpenStatus = false;
let blog0OpenStatus = false;

const resetBlogOpenStatus = () => {
    blog11OpenStatus = false;
    blog10OpenStatus = false;
    blog9OpenStatus = false;
    blog8OpenStatus = false;
    blog7OpenStatus = false;
    blog6OpenStatus = false;
    blog5OpenStatus = false;
    blog4OpenStatus = false;
    blog3OpenStatus = false;
    blog2OpenStatus = false;
    blog1OpenStatus = false;
    blog0OpenStatus = false;
}

const blogIndex = [
    // {
    //     id: 11,
    //     number: 'Eleven',
    //     title: 'Intern for 120 Hours',
    //     date: 'Jun 25, 2022'
    // },
    {
        id: 10,
        number: 'Ten',
        title: 'Capstone Videos',
        date: 'Jun 20, 2022'
    },
    {
        id: 9,
        number: 'Nine',
        title: 'Frontend Architecture',
        date: 'May 31, 2022'
    },
    {
        id: 8,
        number: 'Eight',
        title: 'Bad Bank Stock Ticker',
        date: 'May 13, 2022'
    },
    {
        id: 7,
        number: 'Seven',
        title: 'To-Do Dashboard',
        date: 'Apr 23, 2022'
    },
    {
        id: 6,
        number: 'Six',
        title: 'Real-Time Bus Tracker',
        date: 'Mar 22, 2022'
    },
    {
        id: 5,
        number: 'Five',
        title: 'PacMan Factory & Eye Movement',
        date: 'Mar 15, 2022'
    },
    {
        id: 4,
        number: 'Four',
        title: 'Custom CSS Typewriter',
        date: 'Mar 5, 2022'
    },
    {
        id: 3,
        number: 'Three',
        title: 'PacMan Mini-Game',
        date: 'Feb 27, 2022'
    },
    {
        id: 2,
        number: 'Two',
        title: 'Magic Ball Challenge',
        date: 'Feb 20, 2022'
    },
    {
        id: 1,
        number: 'One',
        title: 'Creating a GitHub Website',
        date: 'Feb 16, 2022'
    },
    {
        id: 0,
        number: 'Zero',
        title: 'Coding Bootcamp Introduction',
        date: 'Feb 9, 2022'
    },
]

// Add loading animation
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
    accordionContainer.innerHTML = ``;
    accordionContainer.style.backgroundColor = `black`;
    accordionContainer.style.boxShadow = `box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`;
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
    accordionContainer.innerHTML = ``;
    accordionContainer.style.backgroundColor = `black`;
    accordionContainer.style.boxShadow = `box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`;
    for (let i = blogIndex.length - 1; i >= 0; i--) {
        accordionContainer.innerHTML += injectAccordion(
            blogIndex[i].id, 
            blogIndex[i].number, 
            blogIndex[i].title, 
            blogIndex[i].date
        );
    };
};

// Open Anchor Accordion
if (window.location.hash) {
    hash = `${window.location.hash}Open()`;
    hash = hash.replace('#','').replace('Button','');
    setTimeout(hash);
}

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