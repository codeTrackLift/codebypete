var githubContributionsWrapperController = new ScrollMagic.Controller();
var githubContributionsWrapper = new ScrollMagic.Scene({
        triggerElement: '#githubContributionsWrapper',
        offset: -200
    })
    .setClassToggle('#githubContributionsWrapper', 'show')
    .addTo(githubContributionsWrapperController);
    
var buttonContactController = new ScrollMagic.Controller();
var buttonContact = new ScrollMagic.Scene({
        triggerElement: '#buttonContact',
        offset: -300
    })
    .setClassToggle('#buttonContact', 'show')
    .addTo(buttonContactController);

var buttonBlogController = new ScrollMagic.Controller();
var buttonBlog = new ScrollMagic.Scene({
        triggerElement: '#buttonBlog',
        offset: -300
    })
    .setClassToggle('#buttonBlog', 'show')
    .addTo(buttonBlogController);


let contribute100 = true;
const viewContributions = () => {
    const contributions = document.getElementById('githubContributions');
    if(contribute100) {
        contributions.style.opacity = 0;
        setTimeout(() => {
            contributions.src = '../pics/about/githubContributions.png';
            contributions.style.opacity = 1;
        }, 750);
        contribute100 = false;
        return
    }
    contributions.style.opacity = 0;
        setTimeout(() => {
            contributions.src = '../pics/about/githubContributions_100Days.jpg';
            contributions.style.opacity = 1;
        }, 750);
    contribute100 = true;
}