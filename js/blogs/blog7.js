const blog7Body = `
    <div class="accordion-body">
        <h4 class="text-center mb-4">Greetings!</h4>
        <div class="row">
            <div class="col-sm-6">
                <p>This <span class="menloRegular text-white">Full Stack Coding Bootacmp</span> assignment was a To-Do List <span class="cornflowerBlue menloRegular">React App</span>.  The base functionality included adding and removing tasks.</p>
                <p>Some customizations were added to transform this into a <span class="chocolate">To-Do Dashboard</span>.  See this video, or the details below for a summary.</p>
            </div>
            <div class="col-sm-6 my-auto">
                <iframe id='blog7Video' class='container-fluid ratio ratio-1x1' src="https://youtube.com/embed/UHPuEAiCqQA" frameborder="0" allowfullscreen>
                </iframe>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-sm-4 col-md-6">
                <p>The base version only required the ability to add and remove tasks. The customized version <span class="text-white">retains the tasks in local storage</span> and will persist in memory through a reload.</p>
                <p>To make this React App a little more useful, the day of the week, date, and time is conveniently displayed.</p>
                <p class="d-none d-md-block">The user can enter a 5-digit zip code to see their local temperature, which is fetched from a <span class="chocolate">weather API</span>.  This feature also includes <span class="text-white">entry validation</span> and <span class="text-white">error handling</span>.</p>
                <p class="d-none d-md-block">Please see the <a href="../pages/projects.html#todoCard">Projects</a> section of my portfolio to check out the <span class="text-white">deployed demo</span>, and let me know what you think.</p>
            </div>
            <div class="col-sm-8 col-md-6 row">
                <img src="../pics/projects/todoDashboard.gif" class="row img-fluid my-auto py-3" alt="To do list assignment animted gif.">
                <p class="col-sm-6 d-md-none">The user can enter a 5-digit zip code to see their local temperature, which is fetched from a <span class="chocolate">weather API</span>.  This feature also includes <span class="text-white">entry validation</span> and <span class="text-white">error handling</span>.</p>
                <p class="col-sm-6 d-md-none">Please see the <a href="../pages/projects.html#todoCard">Projects</a> section of my portfolio to check out the <span class="text-white">deployed demo</span>, and let me know what you think.</p>
            </div>
        </div>
        <div class="'container-fluid row">
            <div class="text-end">
                <p>Happy coding!</p>
                <a href="https://www.linkedin.com/posts/codebypete_reactjs-javascript-html5-activity-6923407311520595968-1P-A" target="_blank" rel='noreferrer'>
                    <img src='../pics/contact/linkedin_white.png' class='linkLogo' alt="LinkedIn Icon" class='img-fluid' style='max-width:2rem;transform:translateX(6.5rem) translateY(-1rem);border-radius:4px;'>
                </a>
                <a href="https://twitter.com/codeTrackLift/status/1517640153182912519?s=20&t=Uo-Gd9kScpktmz4XdxwiqA" target="_blank" rel='noreferrer'>
                    <img src='../pics/contact/Twitter_social_icons-circle-white.png' class='linkLogo' alt="Twitter Icon" class='img-fluid' style='max-width:2rem;border-radius:50%;transform:translateX(7.5rem) translateY(-1rem);'>
                </a>
                <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic" style='transform:translateX(-2rem)'>
            </div>
            <div class="my-auto">
                <p style="text-align:end;font-style:italic;color:white;">-Pete</p>
                <p style="text-align:end;font-style:italic;color:white;">Apr 23, 2022</p>
            </div>
        </div>
    </div>
`;

const injectBlog7 = () => blog7.innerHTML = blog7Body;

function blog7Open() {
    const blog7Button = document.getElementById('blog7Button');
    const blog7 = document.getElementById('blog7');
    setTimeout(injectBlog7,500);
    if (!blog7OpenStatus) {
        blog7OpenStatus = !blog7OpenStatus;
        blog7.classList.add('show');
        blog7Button.classList.remove('collapsed');
        return
    }
    blog7OpenStatus = !blog7OpenStatus;
    blog7.classList.remove('show');
    blog7Button.classList.add('collapsed');
}