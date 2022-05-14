const blog3Body = `
    <div class="accordion-body">
        <div class="'container-fluid row">
            <div class="col-sm-7">
                <div>
                    <h4 class="text-center mb-4">Hello Again!</h4>
                    <div class='m-auto' style="max-width: 480px;">
                        <div class="h6">
                            Welcome to my third blog post & discussion assignment from the <span style="color:white;">MIT xPRO Full Stack Coding Bootcamp</span>.
                        </div>
                        <div class="h6">
                            Starter code was provided and the project scope included coding a '<span style="color:white;">PacMan Exercise</span>' with 2D hard-coded movement, boundary response, and alternating images to animate horizontal movement.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-5 my-auto">
                <iframe id='blog3Video' class='container-fluid ratio ratio-1x1' src="https://youtube.com/embed/iOKK8Q2unxE" frameborder="0" allowfullscreen>
                </iframe>
            </div>
            <div class="row mx-auto">
                <img src="../pics/pacman/pacman_icon.png" class='d-none d-sm-block img-fluid col-sm-2 m-auto p-4' alt="PacMan chasing logo." style="max-width:25vw;">
                <div class="col-sm-10 m-auto" style="max-width: 640px;">
                    <p>I decided to add some additional features: <span style="color:white;">user controls</span>, image support for vertical movement, and integration of the previous 'Magic Ball Challenge' to give PacMan something to do. Check out the images and write-up below for more details.</p>
                </div>
            </div>
        </div>
        <div>
            <h6>Image 1</h6>
            <a href="../pics/pacman/pacman_global.png" target="_blank">
                <img class="img-fluid" src="../pics/pacman/pacman_global.png" alt="Screenshot of JavaScript showing the global variables.">
            </a>
            <div class="row">
                <p class='mx-auto col-sm-4'>Image 1 shows all the <a href="https://developer.mozilla.org/en-US/docs/Glossary/Global_variable" target="'_blank">Global Variables</a>. Additional PacMan images were created for vertical movement and then included in the 'pacArray' variable.</p>
                <p class='mx-auto col-sm-4'>I used the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById" target="_blank">getElementById method</a> to assign aspects of the HTML that would later be manipulated by JavaScript.</p>
                <p class='mx-auto col-sm-4'>Global variables were also assigned for PacMan and the Ball to enable movement and collision detection.</p>
            </div>
        </div>
        <div class="container-fluid row">
            <div class="col-sm-7">
                <div>
                    <h6>Image 2</h6>
                    <a href="../pics/pacman/pacman_utility.png" target="_blank">
                        <img class="img-fluid" src="../pics/pacman/pacman_utility.png" alt="Screenshot of JavaScript showing utility functions.">
                    </a>
                </div>
                <p class="narrowText">Image 2 shows a couple 'utility' functions. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank">Random</a> numbers are always useful, and the <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/orientationchange_event' target='_blank'>onorientationchange method</a> reloads screen to update boundaries upon screen orientation change.</p>
            </div>
            <div class="col-sm-5">
                <div>
                    <h6>Image 3</h6>
                    <a href="../pics/pacman/pacman_userInputs.png" target="_blank">
                        <img class="img-fluid" src="../pics/pacman/pacman_userInputs.png" alt="Screenshot of JavaScript showing user input functions.">
                    </a>
                </div>
                <p class="narrowText">Image 3 shows the functions for User Input. I used <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" target="_blank">Event Listeners</a> and the <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key" target="_blank">Keyboard Event sequence</a> to manage the keyboard inputs and responses.</p>
            </div>
        </div>
        <div class="container-fluid row">
            <div class="col-sm-7">
                <div>
                    <h6>Image 4</h6>
                    <a href="../pics/pacman/pacman_pacman.png" target="_blank">
                        <img class="img-fluid" src="../pics/pacman/pacman_pacman.png" alt="Screenshot of JavaScript showing functions for PacMan's movement.">
                    </a>
                </div>
                <p class="narrowText">Image 4 shows the functions for the PacMan element. The Run function manages which image is shown then calls the Move function, which changes PacMan's position on the screen. The checkCollison and checkLimits functions check for PacMan contacting a boundary or the ball. </p>
            </div>
            <div class="col-sm-5">
                <div>
                    <h6>Image 5</h6>
                    <a href="../pics/pacman/pacman_ball.png" target="_blank">
                        <img class="img-fluid" src="../pics/pacman/pacman_ball.png" alt="Screenshot of JavaScript showing functions for the ball's movement.">
                    </a>
                </div>
                <p class="narrowText">Image 5 shows the functions for the Ball element. Refer to my <a href='./blog.html#blog2Button'>Magic Ball Challenge</a> blog post for more details.</p>
            </div>
        </div>
        <div class="container-fluid row">
            <div class="col-sm-6 my-auto text-center">
                <h6>Click Below to Play</h6>
                <h5><a href="https://codetracklift.github.io/pacman" target="_blank">PacMan Mini-Game</a>
                </h5>
                <p>Thank you for visiting, and happy coding!</p>
            </div>
            <div class="col-sm-6 my-auto">
                <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic" style=>
                <p style="text-align:end;font-style:italic;color:white;">-Pete</p>
                <p style="text-align:end;font-style:italic;color:white;">Feb 27, 2022</p>
                <p style="text-align:end;font-style:italic;color:white;">Student @ MIT xPRO</p>
            </div>
        </div>
    </div>
`;

const injectBlog3 = () => blog3.innerHTML = blog3Body;