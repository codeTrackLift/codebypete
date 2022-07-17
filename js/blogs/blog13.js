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
                This is what happened when I had the opportunity to make, a '<span class='text-white'>User Interface Experiment</span>'...
            </p>
        </div>
        <div class='row'>
            <hr class='mt-3'>
            <div class='col-md-6 m-auto text-center'>
                <iframe class='container-fluid ratio-4x3' src="https://www.youtube.com/embed/gzscXr-4e14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
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
                During a <span class='text-white'>department meeting</span>, the topic of the <span class='text-white'>UI Showcase</span> came up.  All the members of the Frontend Engineering team were encouraged to make <span class='text-white'>contributions</span>, as well as <span class='text-white'>recruit developers</span> from other departments.
            </p>
            <p style='margin: 0.5rem auto;'>
                At this point, I had worked on about dozen <a href='https://www.atlassian.com/software/jira' target='_blank'>Jira</a> tickets across multiple repositories, earned my '<a href='https://github.com/github-community/community/discussions/18248' target='_blank'>Pull Shark</a>' badge twice over, and was feeling really great about the intern experience overall.
            </p>
            <a href='https://github.com/codeTrackLift?tab=achievements' target='_blank' style='width:8rem' class='mx-auto'>
                <img src='../pics/blog/pullShark.gif' class='img-fluid dropShadow' alt='Pull shark badge'>
            </a>
            <p style='margin: 0.5rem auto;'>
                Nonetheless... the thought of creating something that may be '<span class='text-white'>showcased</span>' at <a href='https://www.forbes.com/' target='_blank'>Forbes Media</a>... well, that was still <span class='text-white'>rather intimidating</span>. 😅
            </p>
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                What do I make?
            </p>
            <p style='margin: 0.5rem auto;'>
                My mind was an empty cup, which can work great for learning and a 'student-mentality.'  For creativity... Not so much.
            </p>
            <p style='margin: 0.5rem auto;'>
                So, <span class='text-white'>I started by establishing an objective</span>.  The '<span class='text-white'>purpose</span>' of my UI Experiment, would be to re-imagine an existing feature from <a href='https://www.forbes.com' target='_blank'>Forbes.com</a>.
            </p>
            <p style='margin: 0.5rem auto;'>
                I decided to target image carousels, and used my previous '<a href='#blog8Button'>stock-ticker</a>' project component as a starting point.  The first draft was functional, but looked like a website from the early 2000's. 😆
            </p>
            <p style='margin: 0.5rem auto;'>
                It rendered an array of images in a horizontal scrolling container, and used some JavaScript to automate the scrolling.
            </p>
            <p style='margin: 0.5rem auto;'>
                That's when I started looking into <a href='https://blog.logrocket.com/best-react-animation-library-top-7-libraries-compared/' target='_blank'>React animation libraries</a>. To this point, I relied on <a href='https://scrollmagic.io/' target='_blank'>ScrollMagic</a>, <a href='https://getbootstrap.com/' target='_blank'>Bootstrap</a>, and native <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/animation' target='_blank'>CSS animations</a> to make my projects responsive.
            </p>
            <img id='blog13ReactLogo' src="../pics/about/reactLogo.svg" class="img-fluid mx-auto" alt="React Logo" style="width:8rem;">
            <p style='margin: 0.5rem auto;'>
                I wanted to learn something new, so I chose <a href='https://www.framer.com/motion/' target='_blank'>Framer-Motion</a>.
            </p>
            <p style='margin: 0.5rem auto;'>
                This library is well supported, has many <a href='https://www.npmjs.com/package/framer-motion' target='_blank'>weekly downloads</a>, and is relatively simple to implement.  It's almost as easy as adding '<code>motion.</code>' to your JSX tags, then defining the desired effect as properties in the opening tag.
            </p>
            <p style='margin: 0.5rem auto;'>
                Working on Jira tickets taught me a lot, but it was <span class='text-white'>surprising</span> to <span class='text-white'>discover</span> that I missed the <span class='text-white'>creative aspects</span> of <span class='text-white'>developing</span> my own <span class='text-white'>projects</span>.
            </p>
            <p style='margin: 0.5rem auto;'>
                Checkout the demo or view the source code from the <a href='./projects.html#scrollTainerCard'>Projects</a> section.
            </p>
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                Contributing to the UI Showcase
            </p>
            <p style='margin: 0.5rem auto;'>
                This involves making a <span class='text-white'>pull request</span>, obtaining <span class='text-white'>reviewer approvals</span>, then ensuring the subsequent <span class='text-white'>build</span> and <span class='text-white'>deploy workflows</span> successfully completed. 
            </p>
            <p style='margin: 0.5rem auto;'>
                Next step was to <span class='text-white'>share my UI Experiment</span>.
            </p>
            <p style='margin: 0.5rem auto;'>
                Staring at the busy <a href='https://slack.com/' target='_blank'>Slack</a> channels, it was (again) <span class='text-white'>intimidating</span> to expose my beginner 'mini-project' to a group of professionals.  The words, '<span class='text-white'>not worthy</span>' were sounding loudly in my head.
            </p>
            <img src='../pics/blog/giphy_notWorthy.gif' class='img-fluid mx-auto my-3' style='width:20rem' alt='Wayne's World, Wayne and Garth bowing -- not worthy'>
            <p style='margin: 0.5rem auto;'>
                After making the post, I quickly switched off that Slack channel and decided to work on another ticket (my way to pretend that it never happened 😣). 
            </p>
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                Regrets?
            </p>
            <p style='margin: 0.5rem auto;'>
                The UI experiment was a lot of <span class='text-white'>fun to make</span>, and I <span class='text-white'>learned</span> a new React animation library.
            </p>
            <p style='margin: 0.5rem auto;'>
                Also <span class='text-white'>learned</span> something <span class='text-white'>about myself</span>... I had <span class='text-white'>always</span> considered myself to be more on the <span class='text-white'>analytical</span> side.  <span class='text-white'>Never</span> thought of myself as someone who enjoyed <span class='text-white'>creativity</span>.
            </p>
            <p style='margin: 0.5rem auto;'>
                Aside from that, I <span class='text-white'>met some new developers</span> in response to sharing the experiment. <span class='text-white'>Made some new connections</span>, and maybe even some new friends.
            </p>
            <p style='margin: 0.5rem auto;'>
                One of the developers gave me some really <a href='https://www.forbes.com/sites/forbescommunicationscouncil/2022/01/11/how-to-give-and-receive-feedback-to-strengthen-your-work/' target='_blank'>great feedback</a> about removing the '<span class='text-white'>filler text</span>,' which produced an overall <span class='text-white'>cleaner presentation</span>.  Thank you for the feedback! 😃
            </p>
            <p style='margin: 0.5rem auto;'>
                <span class='text-white'>Thank you Forbes</span> for making the <a href='https://www.linkedin.com/posts/codebypete_webdevelopment-mernstackdeveloper-activity-6931971649504198656-hdBr/?utm_source=linkedin_share&utm_medium=member_desktop_web' target='_blank'>opportunity</a> (and <span class='text-white'>experience</span>) possible.
            </p>
        </div>
        <div>
            <div class="my-auto text-end">
                <p>Happy coding!</p>
                <a href="https://www.linkedin.com/posts/codebypete_reactjs-reactdeveloper-javascript-activity-6954544757037527040-wCrT" target="_blank" rel='noreferrer'>
                    <img src='../pics/contact/linkedin_white.png' class='linkLogo' alt="LinkedIn Icon" class='img-fluid' style='max-width:2rem;transform:translateX(-1rem) translateY(1rem);border-radius:4px;'>
                </a>
                <a href="https://twitter.com/codeTrackLift/status/1548782086252859392?s=20&t=0LHVGpfEEEF2sDIUjrvrRw" target="_blank" rel='noreferrer'>
                    <img src='../pics/contact/Twitter_social_icons-circle-white.png' class='linkLogo' alt="Twitter Icon" class='img-fluid' style='max-width:2rem;border-radius:50%;transform:translateY(1rem);'>
                </a>
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