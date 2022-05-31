let blog2OpenStatus = false;
const blog2Button = document.getElementById('blog2Button');
const blog2 = document.getElementById('blog2');

const blog2Body = `
    <div class="accordion-body">
        <div class="'container-fluid row">
            <div class="col-sm-8 my-auto">
                <iframe id='blog2Video' class='ratio ratio-4x3' width="420" height="315"
                    src="https://youtube.com/embed/f0mTQx5ATQI" frameborder="0" allowfullscreen>
                </iframe>
            </div>
            <div class="col-sm-4">
                <div style="margin-top:5vw;">
                    <h4 class="text-center">Hello!</h4>
                    This is my second blog post & discussion assignment from the MIT xPRO Full Stack Coding Bootcamp. In this Magic Ball challenge, we used HTML, CSS, and JavaScript to create a ball image and make it move.
                </div>
            </div>
            <div class="row mx-auto" style="max-width:640px;">
                <hr style="background:transparent">
                <p>I decided to have some fun with and added some extra features. Please see the video and write-up below for more details, and some links that I found to be helpful.</p>
            </div>
        </div>
        <div class="container-fluid row">
            <div class="col-sm-7">
                <div>
                    <h6>Image 1</h6>
                    <a href="../pics/magicBall/magicBall_originalDiv.png" target="_blank">
                        <img class="img-fluid pb-2" src="../pics/magicBall/magicBall_originalDiv.png" alt="Screenshot of HTML showing the 'Original Div' portion of my Magic Ball Project.">
                    </a>
                </div>
                <p class="narrowText">Image 1 shows the HTML 'div' for the ball and its style attributes. This was provided by the MIT xPRO Bootcamp. I added the 'body' tags since I was using <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> and the editor indicated that I needed to add those in order to use the <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Live Server Extension</a> (updates the HTML page when I save).</p>
            </div>
            <div class="col-sm-5">
                <div>
                    <h6>Image 2</h6>
                    <a href="../pics/magicBall/magicBall_myLogo.png" target="_blank">
                        <img class="img-fluid pb-2" src="../pics/magicBall/magicBall_myLogo.png" alt="Screenshot of HTML showing my logo in image tags.">
                    </a>
                </div>
                <p class="narrowText">In Image 2, I decided to personalize this challenge by adding my logo to the ball. I did this by using an HTML <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" target="_blank">'img'</a> tag instead of the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div" target="_blank">'div'</a> tags. Note that the 'img' tag does not have a separate closing tag. I then added the 'src' link and kept the 'id' and 'style' attributes the same.</p>
            </div>
        </div>
        <div class="container-fluid row">
            <div class="col-sm-4">
                <div>
                    <h6>Image 3</h6>
                    <a href="../pics/magicBall/magicBall_globalVariables.png" target="_blank">
                        <img class="img-fluid pb-2" src="../pics/magicBall/magicBall_globalVariables.png" alt="Screenshot of JavaScript showing the global variables for 2D ball movement.">
                    </a>
                </div>
                <p class="narrowText">Image 3 shows the opening <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" target="_blank">'script'</a> tag, which denotes the beginning of the JavaScript code in this file. All the <a href='https://developer.mozilla.org/en-US/docs/Glossary/Global_variable' target='_blank'>global variables</a> for 2D ball movement are listed, including the 'ball' variable that is assigned to the HTML <a href='https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById' target='_blank'>document element with the ID tag</a> of 'ball'.</p>
            </div>
            <div class="col-sm-8">
                <div>
                    <h6>Image 4</h6>
                    <a href="../pics/magicBall/magicBall_2dMovementFunction.png" target="_blank">
                        <img class="img-fluid pb-2" src="../pics/magicBall/magicBall_2dMovementFunction.png" alt="Screenshot of JavaScript showing the 2D ball movement function.">
                    </a>
                </div>
                <p class="narrowText">Image 4 shows the 2D ball movement function using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" target="_blank">JavaScript arrow syntax</a>. <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else' target='_blank'>Conditional statements</a> detect if the ball reaches x-axis or y-axis limits. If a limit is reached, the corresponding 'velocity' variable is multiplied by -1 to reverse directions.</p>
                <p class="narrowText">If no limits are reached, the 'position' is updated by adding the 'velocity' variable. The CSS is then updated by assigning the 'left' and 'top' styles to the x-axis and y-axis 'position', respectively. Note that the 'px' suffix is added via <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition' target='_blank'>'addition operator concatenation'</a>.</p>
                <p class="narrowText">Finally, the <a href='https://developer.mozilla.org/en-US/docs/Web/API/setInterval' target='_blank'>'setInterval'</a> method is used to call the 'moveBall2D' function based on the frequency established in the 'speed' variable.</p>
            </div>
        </div>
        <div>
            <h6>Image 5</h6>
            <a href="../pics/magicBall/magicBall_randomColorFunction.png" target="_blank">
                <img class="img-fluid pb-2" src="../pics/magicBall/magicBall_randomColorFunction.png" alt="Screenshot of JavaScript showing the random color function.">
            </a>
            <p>Image 5 shows the random color function, which uses the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor" target="_blank">'Math.floor'</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank">'Math.random'</a> JavaScript methods to randomly generate an integer for each of the RGB colors. Note that the RGB variables are assigned within the <a href="https://developer.mozilla.org/en-US/docs/Glossary/Scope" target="_blank">scope</a> of this function as opposed to the other 'global' variables. Each RGB color variable is then <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition' target='_blank'>concatentated</a> and assigned to the variable 'color'.</p>
        </div>
        <div class="container-fluid row">
            <div class="col-sm-6">
                <h6>Image 6</h6>
                <a href="../pics/magicBall/magicBall_resizeFunction.png" target="_blank">
                    <img class="img-fluid pb-2" src="../pics/magicBall/magicBall_resizeFunction.png" alt="Screenshot of JavaScript showing the resize function.">
                </a>
                <p class="narrowText">Image 6 starts off with some new <a href='https://developer.mozilla.org/en-US/docs/Glossary/Global_variable' target='_blank'>global variables</a> so that the ball can be resized along its journey. This includes a starting size (set to match the original 'ball' height & width), min and max limits, and a rate of change.</p>
            </div>
            <div class="col-sm-6 my-auto">
                <p class="narrowText">Next is an <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank'>arrow function</a> that includes a <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else' target='_blank'>condition statements</a> to detect size limits. If any limits are reached, the 'resizeRate' variable is mulitplied by -1 to change from growing to shrinking and vice versa. The new size is then assigned the the CSS style height and width, respectively. Note that I chose to use <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals' target='_blank'>template literals</a> here instead of <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition' target='_blank'>concatentation</a>.</p>
            </div>
        </div>
        <div class="m-auto" style="max-width: 640px;">
            <p>Please let me know with any suggestions, or comments. Thank you again for visiting, and happy coding!</p>
        </div>
        <div class='text-end'>
            <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic" style='transform:translateX(-2rem)'>
            <p style="font-style:italic;color:white;">-Pete</p>
            <p style="font-style:italic;color:white;">Feb 20, 2022</p>
        </div>
    </div>
`;

const injectBlog2 = () => blog2.innerHTML = blog2Body;

function blog2Open() {
    setTimeout(injectBlog2,500);
    if (!blog2OpenStatus) {
        blog2OpenStatus = !blog2OpenStatus;
        blog2.classList.add('show');
        blog2Button.classList.remove('collapsed');
        return
    }
    blog2OpenStatus = !blog2OpenStatus;
    blog2.classList.remove('show');
    blog2Button.classList.add('collapsed');
}