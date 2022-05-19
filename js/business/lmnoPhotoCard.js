const lmnoPhotoCard = `
    <div id='lmnoPhotoCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/projects/mermaid_camera.gif" class="card-img-top img-fluid pt-4 mx-auto" alt="Mermaid camera logo" style="width:12rem;">
        <div class="card-body">
            <h5 class="card-title">Photographer Landingpage</h5>
            <p class="card-text"><a href="https://www.lmnophoto.biz" target="_blank">LMNOPhoto.biz</a> was my <span>first freelance project</span> and was completed using <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank">Bootstrap</a> and <a href="https://scrollmagic.io/" target="_blank">ScrollMagic</a>.</p>
            <p class="card-text">Need a photography session in the Philadelphia / King of Prussia area?</p>
            <a id='lmnoPhotoDemo' href="https://www.lmnophoto.biz/" class="mx-auto btn btn-secondary" target="_blank">Visit Site</a>
        </div>
        <cite id='lmnoPhotoCite' class="text-center">Developed in Jan, 2022</cite>
    </div>
`;

const injectLmnoPhotoCard = (section) => {
    section.innerHTML += lmnoPhotoCard;
    setTimeout(() => {
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
    });
}