const blog13Button = () => {
    const buttonWithImage = document.getElementById('buttonWithImage');
    buttonWithImage.classList.toggle('btnDark');
}

const blog13Body = `
    <div class="accordion-body">
        <div class="my-4">
            <h4 class="my-auto fs-5">Greetings!</h4>
        </div>
        <div class="row">
            <p style='margin: 0.5rem auto;'>
                Did you ever discover something about yourself that was unexpected?
            </p>
            <p style='margin: 0.5rem auto;'>
                This is what happened when we were asked us to make something creative as a "User Interface Experiment"...
            </p>
        </div>
        <div class='row'>
            <hr class='mt-3'>
            <div class='col-md-6 m-auto text-center'>
                <iframe class='container-fluid ratio-4x3' src="https://www.youtube.com/embed/GEW0VojA6CY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div class='col-md-6 p-1 my-auto'>
                <span class='menloRegular chocolate px-4'>TLDR</span>
                <ol style='margin: -1.25rem 0rem -0.25rem 1.25rem;'>
                    <li>Try creating something, you might like it</li>
                    <li>Take advantage of opportunities</li>
                    <li>Break out of your comfort zone, learn something new</li>
                    <li>Share your work, be open to feedback</li>
                </ol>
            </div>
        </div>
        <hr>
        <div class="row">
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                A month into the internship...
            </p>
            <p style='margin: 0.5rem auto;'>
                During a department meeting the topic of the User Interface Showcase came up.  All the members of the Frontend Engineering team were encouraged to make contributions, as well as recruit developers from other departments.
            </p>
            <p style='margin: 0.5rem auto;'>
                At this point, I had worked on about dozen tickets across three repositories, earned my 'Pull Shark' badge twice over, and was feeling really great about the intern experience overall!
            </p>
            <p style='margin: 0.5rem auto;'>
                However, when the Frontend Engineering Director at Forbes Media asks you to create something that will be 'showcased...' that CAN be rather intimidating. 😅
            </p>
            <p style='margin: 0.5rem auto;'>
                Working on these tickets taught me a lot, but I also realized that I missed the creative aspects of developing my own projects.  To this point, I have relied on ScrollMagic, Bootstrap, and native CSS animations to make my projects responsive.
            </p>
            <p style='margin: 0.5rem auto;'>
                With my director's request, and an opportunity to contribute to the UI Showcase, I decided to try something new and learn some new libraries for React Animations.
            </p>
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                What do I make?
            </p>
            <p style='margin: 0.5rem auto;'>
                My mind was an empty cup, which can work great for learning and a "student-mentality."  For creativity... Not so much.
            </p>
            <p style='margin: 0.5rem auto;'>
                So, I started by establishing an objective.  The "purpose" of my UI Experiment, would be to re-imagine an existing feature from Forbes.com, but use React Animations to add responsiveness.
            </p>
            <p style='margin: 0.5rem auto;'>
                I decided to target image carousels, and used my previous 'stock-ticker' project component as a starting point.
            </p>
            <p style='margin: 0.5rem auto;'>
                The first draft was functional, but not very impressive. It basically just rendered an array of images in a horizontal scrolling container, with some JavaScript to automate the scrolling.  That's when I started looking into different React Libraries.
            </p>
            <p style='margin: 0.5rem auto;'>
                The first draft was functional, but not very impressive. It basically just rendered an array of images in a horizontal scrolling container, with some JavaScript to automate the scrolling.  That's when I started looking into different React Libraries.
            </p>
            <p style='margin: 0.5rem auto;'>
                Shared project made some new contacts and friends
            </p>
            <p style='margin: 0.5rem auto;'>
                Got feedback, took it, worked out better
            </p>
        </div>
        <div class="">
            <div class="my-auto text-end">
                <div class="text-end">
                    <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic" style='transform:translateX(-2rem)'>
                </div>
                <p style="text-align:end;font-style:italic;color:white;">-Pete</p>
                <p style="text-align:end;font-style:italic;color:white;">Jul 17, 2022</p>
            </div>
        </div>
    </div>    
`;

const injectBlog13 = () => blog13.innerHTML = blog13Body;

function blog13Open() {
    const blog13Button = document.getElementById('blog13Button');
    const blog13 = document.getElementById('blog13');
    setTimeout(injectBlog13,500);
    if (!blog13OpenStatus) {
        blog13OpenStatus = !blog13OpenStatus;
        blog13.classList.add('show');
        blog13Button.classList.remove('collapsed');
        return
    }
    blog13OpenStatus = !blog13OpenStatus;
    blog13.classList.remove('show');
    blog13Button.classList.add('collapsed');
}