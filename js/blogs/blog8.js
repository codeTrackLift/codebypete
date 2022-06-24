let blog8OpenStatus = false;

const blog8Body = `
    <div class="accordion-body">
        <div class="d-flex justify-content-evenly">
            <h4 class="text-center my-auto">Greetings!</h4>
            <img src="../pics/xchange/xChangeIco.gif" class="img-fluid p-3 w-25" alt="MIT xCHANGE Logo" style="max-width:8rem;">
        </div>
        <div class="row">
            <div class="col-sm-6">
                <p>
                    <span class="text-white">Full Stack Coding Bootcamp</span> Week 14, our '<span class="menloRegular chocolate">Bad Bank</span>' project is coming due.  Starter files were supplied, but they utilized CDNs and were in React 17.  As such, I chose to build my project from scratch using '<a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank">npx create-react-app</a>' and <span class="chocolate menloRegular">React 18</span>. 
                </p>
            </div>
            <div class="col-sm-6">
                <p>
                    <span class="text-white">Project requirements</span>: styled navbar and homepage, account creation, deposits and withdrawals, user data, and input validation.  See <span class="text-white">video</span> below for a <span class="text-white">walkthrough</span>, or my <a href="https://github.com/codeTrackLift/xchange#readme" target="_blank">GitHub Readme</a> for details and customizations.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 col-sm-6">
                <p>
                    I wanted to integrate a <span class="text-white">currency exchange theme</span> but with an <span class="text-white">MIT xPRO twist</span>.  Thus, the <span class="chocolate menloRegular">MIT xCHANGE</span> was born!  Currency exchange rates are fetched from <a href="https://www.coingecko.com/" target="_blank">CoinGecko</a>, then rendered into horizontally scrolling span elements. 
                </p>
            </div>
            <div class="col-md-5 col-sm-6">
                <p>
                    I used '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect" target="_blank">getBoundingClientRect</a>' to get control of the DOM area.  Then I used '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth" target="_blank">scrollWidth</a>', '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft" target="_blank">scrollLeft</a>', and '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo" target="_blank">scrollTo</a>' to implement movement of the scrollbar.  Check out the deployed demo on my <a href="../pages/projects.html#xChangeCard">Projects</a> page and let me know what you think!
                </p>
            </div>
            <div class="col-md-2 my-auto">
                <img src="../pics/xchange/qrxChange.png" class="img-fluid p-2 d-none d-sm-none d-md-block" alt="MIT xCHANGE QR Code">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 my-auto">
                <iframe id='blog8Video' class='container-fluid ratio-16x9' src="https://youtube.com/embed/qeuvfEmJ7_s" frameborder="0" allowfullscreen>
                </iframe>
            </div>
            <div class="col-sm-6">
                <p class="fs-5 text-end d-none d-sm-none d-md-block">Check out the MIT xCHANGE on mobile!</p>
            </div>
        </div>
        <div class="'container-fluid row">
            <div class="col-sm-6 my-3">
                <img src="../pics/xchange/giphyStockTicker.gif" alt="Currency exchange stock ticker animated gif." class="img-fluid my-auto">
            </div>
            <div class="my-auto col-sm-6">
                <div class="text-end">
                    <p>Happy coding!</p>
                    <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic" style='transform:translateX(-2rem)'>
                </div>
                <p style="text-align:end;font-style:italic;color:white;">-Pete</p>
                <p style="text-align:end;font-style:italic;color:white;">May 13, 2022</p>
            </div>
        </div>
    </div>    
`;

const injectBlog8 = () => blog8.innerHTML = blog8Body;

function blog8Open() {
    const blog8Button = document.getElementById('blog8Button');
    const blog8 = document.getElementById('blog8');
    setTimeout(injectBlog8,500);
    if (!blog8OpenStatus) {
        blog8OpenStatus = !blog8OpenStatus;
        blog8.classList.add('show');
        blog8Button.classList.remove('collapsed');
        return
    }
    blog8OpenStatus = !blog8OpenStatus;
    blog8.classList.remove('show');
    blog8Button.classList.add('collapsed');
}