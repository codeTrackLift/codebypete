const lenovaIncCard = `
    <div id='lenovaIncCard' class="card col-sm-4" style="width: 18rem;">
        <img src="../pics/projects/lenovaIncLogo.gif" class="card-img-top pt-4 mx-auto"
            alt="LeNova, Inc. animated logo" style="width:12rem;border-radius:0">
        <div class="card-body">
            <h5 class="card-title">Engineering Firm Website</h5>
            <p class="card-text">The <a href="https://www.lenovainc.com" target="_blank">LeNova, Inc.</a>
                website was developed in <span class="text-white">collaboration</span> with the <span
                    class="text-white">owners</span> to support <span class="text-white">business
                    expansion</span> initiatives.</p>
            <p class="card-text">This project used HTML, CSS, JavaScript, Bootstrap, and includes <span
                    class="text-white">custom</span> CSS <span class="text-white">animations</span>.</p>
            <a id='lenovaIncDemo' href="https://www.lenovainc.com/" class="btn btn-secondary mx-auto btnDark"
                target="_blank">Visit Site</a>
        </div>
        <cite id='lenovaIncCite' class="text-center">Developed Jan-Apr, 2022</cite>
    </div>
`;

const injectLenovaIncCard = (section) => {
    section.innerHTML += lenovaIncCard;
    setTimeout(() => {
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
    });
}