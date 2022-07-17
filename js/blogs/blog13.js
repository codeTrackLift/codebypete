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
                Did you ever <span class='text-white'>discover something</span> about yourself that was <span class='text-white'>unexpected</span>?
            </p>
            <p style='margin: 0.5rem auto;'>
                This is what happened when we were requested to make, a "<span class='text-white'>User Interface Experiment</span>"...
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
                    <li>Break out of your <a href='https://www.forbes.com/sites/forbescoachescouncil/2020/06/10/how-to-step-out-of-your-comfort-zone-and-achieve-the-impossible/' target='_blank'>comfort zone</a>, learn something new</li>
                    <li>Share your work, be open to <a href='https://www.forbes.com/sites/forbescommunicationscouncil/2022/01/11/how-to-give-and-receive-feedback-to-strengthen-your-work/' target='_blank'>feedback</a></li>
                </ol>
            </div>
        </div>
        <hr>
        <div class="row">
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                A month into the internship...
            </p>
            <p style='margin: 0.5rem auto;'>
                During a department meeting the topic of the <span class='text-white'>UI Showcase</span> came up.  All the members of the Frontend Engineering team were encouraged to make <span class='text-white'>contributions</span>, as well as <span class='text-white'>recruit developers</span> from other departments.
            </p>
            <p style='margin: 0.5rem auto;'>
                At this point, I had worked on about dozen <a href='https://www.atlassian.com/software/jira' target='_blank'>Jira</a> tickets across multiple repositories, earned my '<a href='https://github.com/github-community/community/discussions/18248' target='_blank'>Pull Shark</a>' badge twice over, and was feeling really great about the intern experience overall.
            </p>
            <img src='../pics/blog/pullShark.gif' class='img-fluid mx-auto dropShadow' style='width:10rem' alt='Pull shark badge'>
            <p style='margin: 0.5rem auto;'>
                However, when the a Director at <a href='https://www.forbes.com/' target='_blank'>Forbes Media</a> asks you to create something that will be '<span class='text-white'>showcased</span>...' that <span class='text-white'>CAN</span> be rather intimidating. 😅
            </p>
            <p style='margin: 0.5rem auto;'>
                Working on Jira tickets taught me a lot, but I also realized that I missed the creative aspects of developing my own projects.  To this point, I relied on <a href='https://scrollmagic.io/' target='_blank'>ScrollMagic</a>, <a href='https://getbootstrap.com/' target='_blank'>Bootstrap</a>, and native <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/animation' target='_blank'>CSS animations</a> to make my projects responsive.
            </p>
            <p style='margin: 0.5rem auto;'>
                With my director's request, and an opportunity to contribute to the UI Showcase, I decided to try something new and learn a different library for React Animations.
            </p>
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                What do I make?
            </p>
            <p style='margin: 0.5rem auto;'>
                My mind was an empty cup, which can work great for learning and a "student-mentality."  For creativity... Not so much.
            </p>
            <p style='margin: 0.5rem auto;'>
                So, <span class='text-white'>I started by establishing an objective</span>.  The "<span class='text-white'>purpose</span>" of my UI Experiment, would be to re-imagine an existing feature from Forbes.com, but use React Animations to add responsiveness.
            </p>
            <p style='margin: 0.5rem auto;'>
                I decided to target image carousels, and used my previous '<a href='#blog8Button'>stock-ticker</a>' project component as a starting point.  The first draft was functional, but looked like a website from the early 2000's. 😆
            </p>
            <p style='margin: 0.5rem auto;'>
                It basically just rendered an array of images in a horizontal scrolling container, and used some JavaScript to automate the scrolling.  That's when I started looking into different React Libraries.
            </p>
            <p style='margin: 0.5rem auto;'>
                <a href='https://www.framer.com/motion/' target='_blank'>Framer-Motion</a> -- this library is well supported, has many <a href='https://www.npmjs.com/package/framer-motion' target='_blank'>weekly downloads</a>, and was relatively simple to implement.  It's almost as easy as adding <code>motion.</code> to your JSX tags, then defining the desired effect as properties in the opening tag.
            </p>
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                Contributing to the UI Showcase
            </p>
            <p style='margin: 0.5rem auto;'>
                This involving making a <span class='text-white'>pull request</span>, obtaining <span class='text-white'>reviewer approvals</span>, then ensuring the subsequent <span class='text-white'>build</span> and <span class='text-white'>deploy workflows</span> successfully completed. 
            </p>
            <p style='margin: 0.5rem auto;'>
                Next step was to <span class='text-white'>share my UI Experiment</span>.  Staring at the busy <a href='https://slack.com/' target='_blank'>Slack</a> channels, it was (again) <span class='text-white'>intimidating</span> to expose my beginner "mini-project" to a group of professionals.  The words, "<span class='text-white'>not worthy</span>" were sounding loudly in my head.
            </p>
            <img src='../pics/blog/giphy_notWorthy.gif' class='img-fluid mx-auto my-3' style='width:20rem' alt='Wayne's World, Wayne and Garth bowing -- not worthy'>
            <p style='margin: 0.5rem auto;'>
                After making the post, I quickly switched off that Slack channel and decided to work on another ticket to pretend that it never happened. 
            </p>
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                Regrets?
            </p>
            <p style='margin: 0.5rem auto;'>
                The whole experience ended up working out great.  <span class='text-white'>Met some new developers</span>, scheduled some 1:1s to learn about them and their departments.  Definitely <span class='text-white'>made some new connections</span>, maybe even made some new friends.
            </p>
            <p style='margin: 0.5rem auto;'>
                One of the developers gave me some really <span class='text-white'>great feedback</span> about <span class='text-white'>removing the "<span class='text-white'>filler text</span>," which was promptly implemented and produced an overall <span class='text-white'>cleaner presentation</span>.  Thank you for the feedback! 😃
            </p>
            <p style='margin: 0.5rem auto;'>
                I had always considered myself to be more on the analytical side.  Never thought of myself as someone who enjoyed creativity.  <span class='text-white'>Thank you Forbes</span> for making the <a href='https://www.linkedin.com/posts/codebypete_webdevelopment-mernstackdeveloper-activity-6931971649504198656-hdBr/?utm_source=linkedin_share&utm_medium=member_desktop_web' target='_blank'>opportunity</a> possible.  Happy coding to all!
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