const blog6Body = `
    <div class="accordion-body">
        <h4 class="text-center mb-4">Greetings!</h4>
        <div class="row">
            <div class="col-sm-6 my-auto">
                <iframe id='blog6Video' class='container-fluid ratio ratio-1x1'
                    src="https://youtube.com/embed/WS8yUCF8TLI" frameborder="0" allowfullscreen>
                </iframe>
            </div>
            <div class="col-sm-6">
                <p>
                    Our <span class="menloRegular text-white">Full Stack Coding Bootacmp</span> project
                    this week
                    involved <a href="https://developer.mozilla.org/en-US/docs/Web/API/fetch"
                        target="_blank">fetching</a> data from an <span
                        class="menloRegular cornflowerBlue">Application Programming Interface</span> (<a
                        href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank">API</a>)
                    and use it to show and update live bus locations.
                </p>
                <p>
                    This video shows <span class="chocolate">snippets of code</span> and how the bus
                    array is used to create and move individual map markers.
                </p>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-sm-4 col-md-6">
                <p>After figuring out how to <span class="chocolate">move the array</span> of map
                    markers <span class="chocolate">using a loop</span>, I decided to
                    further build upon the project.</p>
                <p><span class="cornflowerBlue menloRegular">Custom features</span> include: map
                    controls, light/dark
                    mode toggle button, refresh timer, and a last updated time.</p>
                <p class="d-none d-md-block">The map markers are also assigned a random color, which is
                    color-coded with a 'bus id' list. The 'bus id' list will show once the application
                    is running.</p>
                <p class="d-none d-md-block">Please see the <a
                        href="../pages/projects.html">Projects</a> section of my portfolio to check out
                    the <span class="text-white">deployed demo</span>, and let me know what you think.
                </p>
            </div>
            <div class="col-sm-8 col-md-6 row">
                <img src="../pics/projects/busTracker.gif" class="row img-fluid my-auto py-3"
                    alt="Bus tracker project gif.">
                <p class="col-sm-6 d-md-none">The map markers are also assigned a random color, which is
                    color-coded with a 'bus id' list. The 'bus id' list will show once the application
                    is running.</p>
                <p class="col-sm-6 d-md-none">Please see the <a
                        href="../pages/projects.html">Projects</a> section of my portfolio to check out
                    the <span class="text-white">deployed demo</span>, and let me know what you think.
                </p>
            </div>
        </div>
        <div class="'container-fluid row">
            <div class="text-end">
                <p>Happy coding!</p>
            </div>
            <div class="my-auto">
                <p style="text-align:end;font-style:italic;color:white;"><img
                        src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic"> -
                    Pete, Mar 22, 2022
                </p>
                <p style="text-align:end;font-style:italic;color:white;">Student @ MIT xPRO</p>
            </div>
        </div>
    </div>
`;

const injectBlog6 = () => blog6.innerHTML = blog6Body;