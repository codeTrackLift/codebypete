const blogIndex = [
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
        title: 'PacMan Mini-Game',
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

const injectBlogArticles = () => {
    const accordionContainer = document.getElementById('accordionContainer');
    for (let i = 0; i < blogIndex.length; i++) {
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