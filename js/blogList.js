let blog12OpenStatus = false;
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
    blog12OpenStatus = false;
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
    {
        id: 12,
        number: 'Twelve',
        title: 'Bootcamp Prepper (2022)',
        date: 'Jul 2, 2022'
    },
    {
        id: 11,
        number: 'Eleven',
        title: '3 Week Intern Recap',
        date: 'Jun 25, 2022'
    },
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
];

// Open accordion with url hash
if (window.location.hash) {
    hash = `${window.location.hash}Open()`;
    hash = hash.replace('#','').replace('Button','');

    setTimeout(hash);
}

// if (window.location.hash === '#blog13') {
//     blogIndex.unshift(

//     )
// }