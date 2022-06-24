const blog10Body = `
    <div class="accordion-body">
        <div class="d-flex justify-content-evenly my-4">
            <h4 class="text-center my-auto">Greetings!</h4>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <p>
                    <span class="text-white">Full Stack Coding Bootcamp</span> Week 19, our <span class='menloRegular chocolate'>Capstone</span> rubric was released this week.  It includes a <span class='cornflowerBlue'>full stack MERN application</span> with <span class='text-white'>three video presentations</span>.  Due to the <a href='https://www.linkedin.com/posts/codebypete_webdevelopment-mernstackdeveloper-activity-6931971649504198656-hdBr?utm_source=linkedin_share&utm_medium=member_desktop_web' target='_blank'>Forbes internship</a> that runs from Jun-Aug, I decided to front-load my Capstone efforts so that I could focus on the internship.
                </p>
            </div>
            <div class="col-sm-6">
                <p>
                    Since I started before the rubric was released, I used my own powerpoint template and decided to make the presentations <span class='text-white'>animated</span>.  I also include some short clips for <span class='cornflowerBlue'>presentation style</span> and added some <span class='text-white'>music</span> to accompany the voice-over.  I hope you enjoy the videos, please let me know with any feedback!
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 my-3">
                <div class='text-center'><u>Video 1</u></div>
                <iframe id='blog8Video' class='container-fluid ratio-16x9' src="https://youtube.com/embed/yvSPJEmRH1w" frameborder="0" allowfullscreen>
                </iframe>
                <span>Application overview, frontend architecture, and authentication.</span>
            </div>
            <div class="col-sm-6 my-3">
                <div class='text-center'><u>Video 2</u></div>
                <iframe id='blog8Video' class='container-fluid ratio-16x9' src="https://youtube.com/embed/-0C40KMb4Nc" frameborder="0" allowfullscreen>
                </iframe>
                <span>Database, data abstraction layer, and API.</span>
            </div>
        </div>
        <div class="row">
        <div class="col-sm-6 my-3">
            <div class='text-center'><u>Video 3</u></div>
            <iframe id='blog8Video' class='container-fluid ratio-16x9' src="https://youtube.com/embed/sS5UZLYyZs4" frameborder="0" allowfullscreen>
            </iframe>
            <span>Deployment, hosting, troubleshooting, and reflections.</span>
        </div>
        <div class="col-sm-6 my-3">
            Check out the deployed demo on my <a href="../pages/projects.html#xChangeMernCard">Projects</a> page and let me know what you think!
        </div>
        <div class="row">
            <div class='col-sm-6'>
                <img src="../pics/xchange/qr-xchmern.png" class="img-fluid mx-auto p-2 d-none d-sm-none d-md-block" alt="MIT xCHANGE QR Code" style='width:8rem'>
            </div>
            <div class="my-auto col-sm-6">
                <div class="text-end">
                    <p>Happy coding!</p>
                    <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic" style='transform:translateX(-2rem)'>
                </div>
                <p style="text-align:end;font-style:italic;color:white;">-Pete</p>
                <p style="text-align:end;font-style:italic;color:white;">Jun 20, 2022</p>
            </div>
        </div>
    </div>    
`;

const injectBlog10 = () => blog10.innerHTML = blog10Body;

function blog10Open() {
    const blog10Button = document.getElementById('blog10Button');
    const blog10 = document.getElementById('blog10');
    setTimeout(injectBlog10,500);
    if (!blog10OpenStatus) {
        blog10OpenStatus = !blog10OpenStatus;
        blog10.classList.add('show');
        blog10Button.classList.remove('collapsed');
        return
    }
    blog10OpenStatus = !blog10OpenStatus;
    blog10.classList.remove('show');
    blog10Button.classList.add('collapsed');
}