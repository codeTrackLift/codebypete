const blog5Body = `
    <div class="accordion-body">
        <h4 class="text-center mb-4">Greetings!</h4>
        <div class='row'>
            <p class="col-sm-4">Week 5 of <a href="https://xpro.mit.edu/" target="_blank">MIT xPRO</a><span class="text-white"> Full Stack Coding Bootcamp</span> (full-time cohort), we were assigned two projects that would be graded towards our <span class="text-white">Professional Certificate</span>.</p>
            <p class="col-sm-4"><span class="chocolate menloRegular">PacMan Factory</span> <span class="text-white">Basic Requirements</span>: Create PacMen with 2D movement, images should alternate to simulate 'chomping' and horizontal direction change.</p>
            <p class="col-sm-4"><span class="chocolate menloRegular">Eye Movement</span> <span class="text-white">Basic Requirements</span>: Use 'onmousemove' event and array methods to simulate an 'pair of eyes' tracking the mouse cursor.</p>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <iframe id='blog5VideoPac' class='container-fluid ratio ratio-1x1' src="https://youtube.com/embed/JywuU_yC3PE" frameborder="0" allowfullscreen>
                </iframe>
            </div>
            <div class="col-sm-6">
                <iframe id='blog5VideoEye' class='container-fluid ratio ratio-1x1' src="https://youtube.com/embed/Md5x0Ta30V8" frameborder="0" allowfullscreen>
                </iframe>
            </div>
        </div>
        <div class="row">
            <p class="col-sm-4"><span class="cornflowerBlue">Customized Aqua-PacMan</span> to be contained within an <span class="text-white">animated aquarium</span>. The move button has been upgraded to a <span class="text-white">color-coded toggle button</span>. You can also <span class="text-white"><em>ZAP!</em></span> a PacMan if you made too many!</p>
            <p class="col-sm-4"><span class="cornflowerBlue">Customized <span class="text-silver">an</span> Animated Head</span> to '<span class="text-white">blink</span>' and '<span class="text-white">talk</span>' with mouse clicks or mobile touch inputs. Mr. Animated Head is also very <span class="text-white">passionate</span> about his <span class="text-white">bootcamp experience</span>!</p>
            <p class="col-sm-4">Both projects are <span class="text-white menloRegular">fully responsive</span> and <span class="text-white menloRegular">mobile compatible</span>. Please check out the demos or view the GitHub Repositories from my <a href="../pages/projects.html#animatedHeadCard">Projects</a> page.</p>
        </div>
        <div class="'container-fluid row text-end">
            <div>
                <p>Happy coding!</p>
                <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic" style='transform:translateX(-2rem)'>
            </div>
            <div class="my-auto">
                <p style="font-style:italic;color:white;">-Pete</p>
                <p style="font-style:italic;color:white;">Mar 15, 2022</p>
            </div>
        </div>
    </div>
`;

const injectBlog5 = () => blog5.innerHTML = blog5Body;