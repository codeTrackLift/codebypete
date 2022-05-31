let blog9OpenStatus = false;
const blog9Button = document.getElementById('blog9Button');
const blog9 = document.getElementById('blog9');

const blog9Body = `
    <div class="accordion-body">
        <div class="d-flex justify-content-evenly">
            <img id='blog9ReactLogo' src="../pics/about/reactLogo.svg" class="img-fluid p-3 w-25" alt="MIT xCHANGE Logo" style="max-width:8rem;">
            <h4 class="text-center my-auto">Greetings!</h4>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <p>
                    <span class="text-white">Full Stack Coding Bootcamp</span> Week 16, we are on our way to the end of the course.  During this final trimester, we cover <span class='chocolate menloRegular'>back-end development</span> with <a href='https://nodejs.org/' target='_blank'>Node</a>, <a href='https://expressjs.com/' target='_blank'>Express</a>, and <a href='https://www.mongodb.com/' target='_blank'>MongoDB</a>.
                </p>
            </div>
            <div class="col-sm-6">
                <p>
                    Thus far we have covered web development fundamentals: <span class='text-white'>HTML</span>, <span class='text-white'>CSS</span>, and <span class='text-white'>JavaScript</span>.  <a href='https://reactjs.org/' target='_blank'>React</a> was our front end library, which we used to build and dynamically render user interface components.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 col-sm-6">
                <p>
                    Our <span class='menloRegular chocolate'>Capstone project</span> includes a presentation breaking down the individual components of a <span class='text-white'>Full Stack MERN</span> application.  I chose to continue with the <span class='text-white'>MIT xCHANGE Bank</span> as my full stack project.
                </p>
            </div>
            <div class="col-md-5 col-sm-6">
                <p>
                    See the <span class='cornflowerBlue'>Front End Architecture</span> diagram below, click on it to <span class='text-white'>animated it</span>! Check out the deployed demo on my <a href="../pages/projects.html#xChangeMernCard">Projects</a> page and let me know what you think!
                </p>
            </div>
            <div class="col-md-2 my-auto">
                <img src="../pics/xchange/qr-xchmern.png" class="img-fluid p-2 d-none d-sm-none d-md-block" alt="MIT xCHANGE QR Code">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 my-auto">
                <button style='border:none;' onclick='handleReactComponent()'>
                    <img id='xchReactComponents' src='../../pics/xchange/xchMern_reactComponentsStatic.jpg' alt='xCHANGE front end React components diagram.' class='img-fluid'>
                </button>
            </div>
            <div class="col-sm-6">
                <p class="fs-5 text-end d-none d-sm-none d-md-block">MIT xCHANGE MERN is still on mobile!</p>
            </div>
        </div>
        <div class="'container-fluid row">
        <div class="col-sm-6 my-3">
            <img src="../pics/xchange/xChangeMern.gif" alt="MIT xCHANGE MERN Logo." class="img-fluid dropShadowSilverBig my-auto">
        </div>
        <div class="my-auto col-sm-6">
            <div class="text-end">
                <p>Happy coding!</p>
                <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic" style='transform:translateX(-2rem)'>
            </div>
            <p style="text-align:end;font-style:italic;color:white;">-Pete</p>
            <p style="text-align:end;font-style:italic;color:white;">May 31, 2022</p>
        </div>
    </div>
    </div>    
`;

let animatedReactComponents = false;
const handleReactComponent = () => {
    const xchReactComponents = document.getElementById('xchReactComponents');
    if(animatedReactComponents === false) {
        xchReactComponents.src = '../../pics/xchange/hourGlass.gif';
        setTimeout(() => xchReactComponents.src = '../../pics/xchange/xchMern_reactComponentsAnimated.gif', 500)
        animatedReactComponents = true;
        return;
    }
    xchReactComponents.src = '../../pics/xchange/xchMern_reactComponentsStatic.jpg';
    animatedReactComponents = false;
}

const injectBlog9 = () => blog9.innerHTML = blog9Body;

function blog9Open() {
    setTimeout(injectBlog9,500);
    if (!blog9OpenStatus) {
        blog9OpenStatus = !blog9OpenStatus;
        blog9.classList.add('show');
        blog9Button.classList.remove('collapsed');
        return
    }
    blog9OpenStatus = !blog9OpenStatus;
    blog9.classList.remove('show');
    blog9Button.classList.add('collapsed');
}