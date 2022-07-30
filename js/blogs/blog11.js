const blog11pStyle = `
    style='margin: 0.5rem auto;'
`;

const blog11olStyle = `
    style = '
        margin: -1.25rem 0rem -0.25rem 1.25rem;
    '
`;

const blog11Button = () => {
    const buttonWithImage = document.getElementById('buttonWithImage');
    buttonWithImage.classList.toggle('btnDark');
}

const blog11Body = `
    <div class="accordion-body">
        <div class="my-4">
            <h4 class="my-auto fs-5">Greetings!</h4>
        </div>
        <div class="row">
            <p ${blog11pStyle}>
               This is my recap of the last <span class='text-white'>3 weeks</span> as a <span class='text-white'>43 year old Software Engineering Intern</span>...
            </p>
        </div>
        <div class="row">
            <span class='menloRegular chocolate mt-3'>TLDR</span>
            <hr>
            <ol ${blog11olStyle}>
                <li><span class='text-white'>Learned</span> how to use <a href='https://nextjs.org/' target='_blank'>Next.js</a>, <a href='https://sass-lang.com/' target='_blank'>Sass</a>, <a href='https://sass-lang.com/' target='_blank'>Jira<a>, and <a href='https://www.atlassian.com/software/confluence' target='_blank'>Confluence</a></li>
                <li><span class='text-white'>Created</span> a ButtonWithImages <a href='https://www.reactjs.org' target='_blank'>React</a> component and developed many unit-tests using <a href='https://jestjs.io' target='_blank'>Jest</a></li>
                <li><span class='text-white'>Participated</span> in team stand-up meetings and investigations</li>
                <li><span class='text-white'>Developed</span>, <span class='text-white'>merged</span>, and <span class='text-white'>closed</span> 3 Jira Tickets and PRs</li>
                <li>The <span class='text-white'>Forbes</span> Frontend Engineering team <span class='text-white'>is awesome</span>!</li>
            </ol>
            <hr>
        </div>
        <div class="row">
            <p ${blog11pStyle}>
                I never thought I would be so excited to go to work!
            </p>
            <p ${blog11pStyle}>
                It has now been three weeks since I started my <span class='text-white'>full-time paid internship</span> at <a href='https://www.forbes.com' target='_blank'>Forbes Media</a> as part of their Frontend Engineering team. During the second trimester of bootcamp, the career coaches at <span class='cornflowerBlue'>MIT xPRO</span> hooked me up with a <span class='text-white'>referral</span> for this <a href='https://www.linkedin.com/posts/codebypete_webdevelopment-mernstackdeveloper-activity-6931971649504198656-hdBr?utm_source=linkedin_share&utm_medium=member_desktop_web' target='_blank'>Engineering Internship</a>.  I wasn't expecting to get called for the interview, but was pleasantly surprised when it happened.  
            </p>
            <p ${blog11pStyle}>
                The interview was conducted over Zoom and the process included a large group introduction, followed by a series of three 1:1 break-out sessions.  For me, each session was with a member of the Frontend Engineering team.  Everybody I spoke to was extraordinarily nice, but they did challenge me with technical JavaScript questions.  In hindsight, there were several areas where I could have articulated a better answer.  However, I was very fortunate, as the Frontend Engineering team decided to give me a chance!
            </p>
            <p ${blog11pStyle}>
                It all became very real when I got my laptop (16" MacBook Pro) and monitor delivered and set up.  Getting <span class='text-white'>local admin</span> on the laptop was the <span class='text-white'>first challenge</span>, this took almost 2 working days, but was well worth the effort!  After getting privileges to execute '<a href='https://www.sudo.ws/' target='_blank'>sudo</a>' commands, I started feeling like a developer again!  This feeling did not last long as I immediately slipped back into <a href='https://www.linkedin.com/posts/hey-tech-lady_hey-tech-lady-how-to-beat-impostor-syndrome-activity-6945115941512888321-eJQ3?utm_source=linkedin_share&utm_medium=member_desktop_web' target='_blank'>imposter syndrome</a> when I couldn't get my first '<span class='text-white'>npm install</span>' to run.  
            </p>
            <p ${blog11pStyle}>
                My mentor came to the rescue and helped remedy the issue (missing settings).  From that point on, I was able to use git, clone the appropriate repos, install the necessary packages, and get my local development environment up and running! 😊
            </p>
            <p ${blog11pStyle}>
                The next major milestone was attending and participating in <span class='text-white'>team stand-ups</span> and <span class='text-white'>meetings</span>, and where I learned to use <a href='https://www.atlassian.com/software/jira' target='_blank'>Jira</a> and <a href='https://www.atlassian.com/software/confluence' target='_blank'>Confluence</a>.  It is quite the privilege to be able to listen in on these discussions, as they helped fill in missing tech vocabulary.  This also gave me exposure to professional software engineers, their mindset, and how they rationalize real-world issues.
            </p>
            <p ${blog11pStyle}>
                During one of the meetings, it was mentioned that a <span class='text-white'>new component</span> was needed, specifically a button with a nested image.  I got excited, as I had done something similar for my GitHub Readme buttons on the <a href='../pages/projects.html'>Projects</a> page.  However, I did not have the confidence to bring it up in the meeting.  After wrapping up, I quietly messaged my mentor and showed him a screenshot of my GitHub Readme button (see below).  My mentor and the Frontend Engineering manager discussed, and decided to assign me <span class='cornflowerBlue'>my first Jira ticket</span>!
            </p>
            <a id='buttonWithImage' onclick="blog11Button()" class="btn btn-secondary btnDark mx-auto my-3" style='opacity:1 !important' target="'_blank"><img src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            <p ${blog11pStyle}>
                Everything I have developed thus far has been <span class='text-white'>coded in a silo</span>.  So working on a large and complex codebase with a group was quite the eye-opener!  Since the internship overlaps with the final trimester of bootcamp, <a href='https://nextjs.org/' target='_blank'>Next.js</a> was completely foreign to me as well as <a href='https://sass-lang.com/' target='_blank'>Sass</a>.  These were two technologies I had to pick up right away in order to contribute.  Thankfully, LinkedIn has a course for <a href='https://www.linkedin.com/posts/codebypete_certificate-of-completion-activity-6940040104551878656-7g2o?utm_source=linkedin_share&utm_medium=member_desktop_web' target='_blank'>Server-Side Rendering</a> which covers Next.js and Sass was not too different from regular CSS.
            </p>
            <p ${blog11pStyle}>
                After making the button and verifying that it looks and functions as intended in my local development environment, I had to push it to the GitHub repository and make a pull request.  <a href='https://www.linkedin.com/posts/hey-tech-lady_hey-tech-lady-how-to-beat-impostor-syndrome-activity-6945115941512888321-eJQ3?utm_source=linkedin_share&utm_medium=member_desktop_web' target='_blank'>Imposter syndrome</a> was kicking in hard at this point, as I was about to <span class='text-white'>expose my coding insecurities to the whole world</span> (or so it felt)!  I reached out to a junior developer on the team and shared my files with him, <span class='text-white'>hoping for some reassurance</span>.  He gave me the thumbs up, then <span class='text-white'>encouraged me</span> to push the code, and so I did.
            </p>
            <p ${blog11pStyle}>
                Folks had warned me that your <span class='cornflowerBlue'>first PR</span> as a developer could result in a lot of comments.  <span class='text-white'>55 comments</span> later, my ButtonWithImages could now be dynamically rendered with different SVGs, text, onClick functionality, and even included a suite of <a href='https://jestjs.io/' target='_blank'>Jest</a> unit tests!  Each comment pointed out <span class='text-white'>weaknesses in my code</span>, like <span class='text-white'>redundant</span> and <span class='text-white'>inefficient code</span>, as well as failure to have good <span class='text-white'>test coverage</span>.
            </p>
            <p ${blog11pStyle}>
                This set a good back and forth tempo with the experienced software engineers on the team.  I could share my attempts at a solution, then see how a master would do it.  By the end of the third week, I had the opportunity to work on <span class='text-white'>6</span> <a href='https://www.reactjs.org' target='_blank'>React</a> <span class='text-white'>tickets</span> and <span class='text-white'>3</span> of them were <span class='text-white'>approved</span>, <span class='text-white'>merged</span>, and <span class='text-white'>closed</span>.  One of the tickets was to investigate an unintended issue; we have a follow-up meeting next week to discuss the investigation findings and determine a path forward.
            </p>
            <p ${blog11pStyle}>
                My first three weeks with <a href='https://www.forbes.com' target='_blank'>Forbes</a> <span class='cornflowerBlue'>validates my decision</span> to leave my cushy pharmaceutical job <span class='cornflowerBlue'>to pursue my passion</span>.  <span class='text-white'>I enjoy every minute of the work</span>, learning each new technology feels <span class='text-white'>exciting</span> and <span class='text-white'>rewarding</span>, and the team is warm and welcoming.  Maybe this will change if I ever lose the 'intern' status; however, I will not worry about it right now as I only have a limited time with this team.
            </p>
            <p ${blog11pStyle}>
                I hope to make the most out of every minute...
            </p>
        </div>
        <div class="row">
            <div class="my-auto text-end">
                <div class="text-end">
                    <p>Happy coding!</p>
                    <a href="https://www.linkedin.com/posts/codebypete_reactjs-nextjs-sass-activity-6946485607661527040-S-_Z" target="_blank" rel='noreferrer'>
                        <img src='../pics/contact/linkedin_white.png' class='linkLogo' alt="LinkedIn Icon" class='img-fluid' style='max-width:2rem;transform:translateX(6.5rem) translateY(-1rem);border-radius:4px;'>
                    </a>
                    <a href="https://twitter.com/codeTrackLift/status/1540724101475622913?s=20&t=p8HeJgw3Qgo57YRkMgvUbw" target="_blank" rel='noreferrer'>
                        <img src='../pics/contact/Twitter_social_icons-circle-white.png' class='linkLogo' alt="Twitter Icon" class='img-fluid' style='max-width:2rem;border-radius:50%;transform:translateX(7.5rem) translateY(-1rem);'>
                    </a>
                    <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic" style='transform:translateX(-2rem)'>
                </div>
                <p style="text-align:end;font-style:italic;color:white;">-Pete</p>
                <p style="text-align:end;font-style:italic;color:white;">Jun 25, 2022</p>
            </div>
        </div>
    </div>    
`;

const injectBlog11 = () => blog11.innerHTML = blog11Body;

function blog11Open() {
    const blog11Button = document.getElementById('blog11Button');
    const blog11 = document.getElementById('blog11');
    setTimeout(injectBlog11,500);
    if (!blog11OpenStatus) {
        blog11OpenStatus = !blog11OpenStatus;
        blog11.classList.add('show');
        blog11Button.classList.remove('collapsed');
        return
    }
    blog11OpenStatus = !blog11OpenStatus;
    blog11.classList.remove('show');
    blog11Button.classList.add('collapsed');
}