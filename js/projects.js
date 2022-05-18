const businessProjects = document.getElementById('businessProjects');
const bootcampProjects = document.getElementById('bootcampProjects');
const selfTaughtProjects = document.getElementById('selfTaughtProjects');

const lenovaIncDemoController = new ScrollMagic.Controller();
const lenovaIncDemo = new ScrollMagic.Scene({
        triggerElement: '#lenovaIncDemo',
        offset: -200
    })
    .setClassToggle('#lenovaIncDemo', 'show')
    .addTo(lenovaIncDemoController);

const lenovaIncCiteController = new ScrollMagic.Controller();
const lenovaIncCite = new ScrollMagic.Scene({
        triggerElement: '#lenovaIncDemo',
        offset: -200
    })
    .setClassToggle('#lenovaIncCite', 'hide')
    .addTo(lenovaIncCiteController);

const lmnoPhotoDemoController = new ScrollMagic.Controller();
const lmnoPhotoDemo = new ScrollMagic.Scene({
        triggerElement: '#lmnoPhotoDemo',
        offset: -200
    })
    .setClassToggle('#lmnoPhotoDemo', 'show')
    .addTo(lmnoPhotoDemoController);

const lmnoPhotoCiteController = new ScrollMagic.Controller();
const lmnoPhotoCite = new ScrollMagic.Scene({
        triggerElement: '#lmnoPhotoDemo',
        offset: -200
    })
    .setClassToggle('#lmnoPhotoCite', 'hide')
    .addTo(lmnoPhotoCiteController);

const xChangeDemoController = new ScrollMagic.Controller();
const xChangeDemo = new ScrollMagic.Scene({
        triggerElement: '#xChangeDemo',
        offset: -200
    })
    .setClassToggle('#xChangeDemo', 'show')
    .addTo(xChangeDemoController);

const xChangeRepoController = new ScrollMagic.Controller();
const xChangeRepo = new ScrollMagic.Scene({
        triggerElement: '#xChangeRepo',
        offset: -200
    })
    .setClassToggle('#xChangeRepo', 'show')
    .addTo(xChangeRepoController);
    
const xChangeCiteController = new ScrollMagic.Controller();
const xChangeCite = new ScrollMagic.Scene({
        triggerElement: '#xChangeRepo',
        offset: -200
    })
    .setClassToggle('#xChangeCite', 'hide')
    .addTo(xChangeCiteController);

const todoDemoController = new ScrollMagic.Controller();
const todoDemo = new ScrollMagic.Scene({
        triggerElement: '#todoDemo',
        offset: -200
    })
    .setClassToggle('#todoDemo', 'show')
    .addTo(todoDemoController);

const todoRepoController = new ScrollMagic.Controller();
const todoRepo = new ScrollMagic.Scene({
        triggerElement: '#todoRepo',
        offset: -200
    })
    .setClassToggle('#todoRepo', 'show')
    .addTo(todoRepoController);

const todoCiteController = new ScrollMagic.Controller();
const todoCite = new ScrollMagic.Scene({
        triggerElement: '#todoRepo',
        offset: -200
    })
    .setClassToggle('#todoCite', 'hide')
    .addTo(todoCiteController);

const busTrackerDemoController = new ScrollMagic.Controller();
const busTrackerDemo = new ScrollMagic.Scene({
        triggerElement: '#busTrackerDemo',
        offset: -200
    })
    .setClassToggle('#busTrackerDemo', 'show')
    .addTo(busTrackerDemoController);

const busTrackerRepoController = new ScrollMagic.Controller();
const busTrackerRepo = new ScrollMagic.Scene({
        triggerElement: '#busTrackerRepo',
        offset: -200
    })
    .setClassToggle('#busTrackerRepo', 'show')
    .addTo(busTrackerRepoController);

const busTrackerCiteController = new ScrollMagic.Controller();
const busTrackerCite = new ScrollMagic.Scene({
        triggerElement: '#busTrackerRepo',
        offset: -200
    })
    .setClassToggle('#busTrackerCite', 'hide')
    .addTo(busTrackerCiteController);

const animatedHeadDemoController = new ScrollMagic.Controller();
const animatedHeadDemo = new ScrollMagic.Scene({
        triggerElement: '#animatedHeadDemo',
        offset: -200
    })
    .setClassToggle('#animatedHeadDemo', 'show')
    .addTo(animatedHeadDemoController);

const animatedHeadRepoController = new ScrollMagic.Controller();
const animatedHeadRepo = new ScrollMagic.Scene({
        triggerElement: '#animatedHeadRepo',
        offset: -200
    })
    .setClassToggle('#animatedHeadRepo', 'show')
    .addTo(animatedHeadRepoController);

const animatedHeadCiteController = new ScrollMagic.Controller();
const animatedHeadCite = new ScrollMagic.Scene({
        triggerElement: '#animatedHeadRepo',
        offset: -200
    })
    .setClassToggle('#animatedHeadCite', 'hide')
    .addTo(animatedHeadCiteController);

const pacManFactoryDemoController = new ScrollMagic.Controller();
const pacManFactoryDemo = new ScrollMagic.Scene({
        triggerElement: '#pacManFactoryDemo',
        offset: -200
    })
    .setClassToggle('#pacManFactoryDemo', 'show')
    .addTo(pacManFactoryDemoController);

const pacManFactoryRepoController = new ScrollMagic.Controller();
const pacManFactoryRepo = new ScrollMagic.Scene({
        triggerElement: '#pacManFactoryRepo',
        offset: -200
    })
    .setClassToggle('#pacManFactoryRepo', 'show')
    .addTo(pacManFactoryRepoController);

const pacManFactoryCiteController = new ScrollMagic.Controller();
const pacManFactoryCite = new ScrollMagic.Scene({
        triggerElement: '#pacManFactoryRepo',
        offset: -200
    })
    .setClassToggle('#pacManFactoryCite', 'hide')
    .addTo(pacManFactoryCiteController);

const pacManMiniGameDemoController = new ScrollMagic.Controller();
const pacManMiniGameDemo = new ScrollMagic.Scene({
        triggerElement: '#pacManMiniGameDemo',
        offset: -200
    })
    .setClassToggle('#pacManMiniGameDemo', 'show')
    .addTo(pacManMiniGameDemoController);

const pacManMiniGameRepoController = new ScrollMagic.Controller();
const pacManMiniGameRepo = new ScrollMagic.Scene({
        triggerElement: '#pacManMiniGameRepo',
        offset: -200
    })
    .setClassToggle('#pacManMiniGameRepo', 'show')
    .addTo(pacManMiniGameRepoController);

const pacManMiniGameCiteController = new ScrollMagic.Controller();
const pacManMiniGameCite = new ScrollMagic.Scene({
        triggerElement: '#pacManMiniGameRepo',
        offset: -200
    })
    .setClassToggle('#pacManMiniGameCite', 'hide')
    .addTo(pacManMiniGameCiteController);

const pomodoroClockDemoController = new ScrollMagic.Controller();
const pomodoroClockDemo = new ScrollMagic.Scene({
        triggerElement: '#pomodoroClockDemo',
        offset: -200
    })
    .setClassToggle('#pomodoroClockDemo', 'show')
    .addTo(pomodoroClockDemoController);

const pomodoroClockRepoController = new ScrollMagic.Controller();
const pomodoroClockRepo = new ScrollMagic.Scene({
        triggerElement: '#pomodoroClockRepo',
        offset: -200
    })
    .setClassToggle('#pomodoroClockRepo', 'show')
    .addTo(pomodoroClockRepoController);

const pomodoroClockCiteController = new ScrollMagic.Controller();
const pomodoroClockCite = new ScrollMagic.Scene({
        triggerElement: '#pomodoroClockRepo',
        offset: -200
    })
    .setClassToggle('#pomodoroClockCite', 'hide')
    .addTo(pomodoroClockCiteController);

const markdownPreviewerDemoController = new ScrollMagic.Controller();
const markdownPreviewerDemo = new ScrollMagic.Scene({
        triggerElement: '#markdownPreviewerDemo',
        offset: -200
    })
    .setClassToggle('#markdownPreviewerDemo', 'show')
    .addTo(markdownPreviewerDemoController);

const markdownPreviewerRepoController = new ScrollMagic.Controller();
const markdownPreviewerRepo = new ScrollMagic.Scene({
        triggerElement: '#markdownPreviewerRepo',
        offset: -200
    })
    .setClassToggle('#markdownPreviewerRepo', 'show')
    .addTo(markdownPreviewerRepoController);

const markdownPreviewerCiteController = new ScrollMagic.Controller();
const markdownPreviewerCite = new ScrollMagic.Scene({
        triggerElement: '#markdownPreviewerRepo',
        offset: -200
    })
    .setClassToggle('#markdownPreviewerCite', 'hide')
    .addTo(markdownPreviewerCiteController);

const jsCalcDemoController = new ScrollMagic.Controller();
const jsCalcDemo = new ScrollMagic.Scene({
        triggerElement: '#jsCalcDemo',
        offset: -200
    })
    .setClassToggle('#jsCalcDemo', 'show')
    .addTo(jsCalcDemoController);

const jsCalcRepoController = new ScrollMagic.Controller();
const jsCalcRepo = new ScrollMagic.Scene({
        triggerElement: '#jsCalcRepo',
        offset: -200
    })
    .setClassToggle('#jsCalcRepo', 'show')
    .addTo(jsCalcRepoController);

const jsCalcCiteController = new ScrollMagic.Controller();
const jsCalcCite = new ScrollMagic.Scene({
        triggerElement: '#jsCalcRepo',
        offset: -200
    })
    .setClassToggle('#jsCalcCite', 'hide')
    .addTo(jsCalcCiteController);

const etchASketchDemoController = new ScrollMagic.Controller();
const etchASketchDemo = new ScrollMagic.Scene({
        triggerElement: '#etchASketchDemo',
        offset: -200
    })
    .setClassToggle('#etchASketchDemo', 'show')
    .addTo(etchASketchDemoController);

const etchASketchRepoController = new ScrollMagic.Controller();
const etchASketchRepo = new ScrollMagic.Scene({
        triggerElement: '#etchASketchRepo',
        offset: -200
    })
    .setClassToggle('#etchASketchRepo', 'show')
    .addTo(etchASketchRepoController);

const etchASketchCiteController = new ScrollMagic.Controller();
const etchASketchCite = new ScrollMagic.Scene({
        triggerElement: '#etchASketchRepo',
        offset: -200
    })
    .setClassToggle('#etchASketchCite', 'hide')
    .addTo(etchASketchCiteController);

const rockPaperScissorsDemoController = new ScrollMagic.Controller();
const rockPaperScissorsDemo = new ScrollMagic.Scene({
        triggerElement: '#rockPaperScissorsDemo',
        offset: -200
    })
    .setClassToggle('#rockPaperScissorsDemo', 'show')
    .addTo(rockPaperScissorsDemoController);

const rockPaperScissorsRepoController = new ScrollMagic.Controller();
const rockPaperScissorsRepo = new ScrollMagic.Scene({
        triggerElement: '#rockPaperScissorsRepo',
        offset: -200
    })
    .setClassToggle('#rockPaperScissorsRepo', 'show')
    .addTo(rockPaperScissorsRepoController);

const rockPaperScissorsCiteController = new ScrollMagic.Controller();
const rockPaperScissorsCite = new ScrollMagic.Scene({
        triggerElement: '#rockPaperScissorsRepo',
        offset: -200
    })
    .setClassToggle('#rockPaperScissorsCite', 'hide')
    .addTo(rockPaperScissorsCiteController);

const odinLandingpageDemoController = new ScrollMagic.Controller();
const odinLandingpageDemo = new ScrollMagic.Scene({
        triggerElement: '#odinLandingpageDemo',
        offset: -200
    })
    .setClassToggle('#odinLandingpageDemo', 'show')
    .addTo(odinLandingpageDemoController);

const odinLandingpageRepoController = new ScrollMagic.Controller();
const odinLandingpageRepo = new ScrollMagic.Scene({
        triggerElement: '#odinLandingpageRepo',
        offset: -200
    })
    .setClassToggle('#odinLandingpageRepo', 'show')
    .addTo(odinLandingpageRepoController);

const odinLandingpageCiteController = new ScrollMagic.Controller();
const odinLandingpageCite = new ScrollMagic.Scene({
        triggerElement: '#odinLandingpageRepo',
        offset: -200
    })
    .setClassToggle('#odinLandingpageCite', 'hide')
    .addTo(odinLandingpageCiteController);

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