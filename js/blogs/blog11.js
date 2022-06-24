const blog11pStyle = `
    style='margin: 0.5rem auto;'
`;

const blog11olStyle = `
    style = '
        margin: -1.25rem 0rem -0.25rem 1.25rem;
    '
`;

const blog11Body = `
    <div class="accordion-body">
        <div class="d-flex justify-content-evenly my-4">
            <h4 class="my-auto">Greetings!</h4>
        </div>
        <div class="row">
            <p ${blog11pStyle}>
                I never thought I would be so excited to go to work! This is my review of 3 weeks as a 43 year old Software Engineering Intern...
            </p>
            <p ${blog11pStyle}>
                
            </p>
        </div>
        <div class="row">

            <span>TLDR:</span>
            <hr>
            <ol ${blog11olStyle}>
                <li>Learned how to use Next.js, Sass, Jira, and Confluence</li>
                <li>Created a ButtonWithImages React component and developed many unit-tests using Jest</li>
                <li>Participated in team stand-up meetings and investigations</li>
                <li>Developed and closed 3 Jira Tickets and PRs</li>
                <li>The Forbes Frontend Engineering team is awesome!</li>
            </ol>
            <hr>
        </div>
        <div class="row">
            <p ${blog11pStyle}>
                It has now been three weeks since I started my full-time paid internship at Forbes Media as part of their Frontend Engineering team. During the second trimester of bootcamp, the career coaches at MIT xPRO hooked me up with a referral for the <a href='https://www.linkedin.com/posts/codebypete_webdevelopment-mernstackdeveloper-activity-6931971649504198656-hdBr?utm_source=linkedin_share&utm_medium=member_desktop_web' target='_blank'>Forbes Engineering Internship</a>.  I wasn't expecting to get called for the interview, but was pleasantly surprised when it happened.  
            </p>
            <p ${blog11pStyle}>
                The interview was conducted over Zoom and the process included a large group introduction, followed by a series of three 1:1 break-out sessions.  For me, each session was with a member of the Frontend Engineering team.  Everybody I spoke to was extraordinarily nice, but they did challenge me with technical JavaScript questions.  In hindsight, there were several areas where I could have articulated a better answer.  However, I was very fortunate, as the Frontend Engineering team decided to give me a chance!
            </p>
            <p ${blog11pStyle}>
                It all became very real when I got my laptop (16" MacBook Pro) and monitor delivered and set up.  Getting local admin on the laptop was the first challenge, this took almost 2 working days, but was well worth the effort!  After getting privileges to execute 'sudo' commands, I started feeling like a developer again!  This feeling did not last long as I immediately slipped back into imposter syndrome when I couldn't get my first 'npm install' to run.  
            </p>
            <p ${blog11pStyle}>
                Without revealing any details, my amazing mentor came to the rescue and helped remedy the issue (missing settings).  From that point on, I was able to use git, clone the appropriate repos, install the necessary packages, and get my local development environment up and running.
            </p>
            <p ${blog11pStyle}>
                The next major milestone was attending and participating in team stand-ups and meetings, and where I learned to use Jira and Confluence.  It is quite the privilege to be able to listen in on these discussions, as they helped fill in missing tech vocabulary.  This also gave me exposure to professional software engineers, their mindset, and how they rationalize real-world issues.
            </p>
            <p ${blog11pStyle}>
                During one of the meetings, it was mentioned that a new component was needed, specifically a button with a nested image.  I got excited, as I had done something similar for my GitHub Readme buttons on the Projects page.  However, I did not have the confidence to bring it up in the meeting.  After wrapping up, I quietly messaged my mentor and showed him a screenshot of my GitHub Readme button.  My mentor and the Frontend Engineering manager discussed, and decided to assign me my first Jira ticket!
            </p>
            <p ${blog11pStyle}>
                Everything I have developed thus far has been coded in a silo.  So working on a large and complex codebase with a group was quite the eye-opener!  Since the internship overlaps with the final trimester of bootcamp, Next.js was completely foreign to me as well as Sass.  These were two technologies I had to pick up right away in order to contribute.  Thankfully, LinkedIn has a course for <a href='https://www.linkedin.com/posts/codebypete_certificate-of-completion-activity-6940040104551878656-7g2o?utm_source=linkedin_share&utm_medium=member_desktop_web' target='_blank'>Server-Side Rendering</a> which covers Next.js and Sass was not too different from regular CSS.
            </p>
            <p ${blog11pStyle}>
                After making the button and verifying that it looks and functions as intended in my local development environment, I had to push it to the GitHub repository and make a pull request.  Imposter syndrome was kicking in hard at this point, as I was about to expose my coding insecurities to the whole world (or so it felt)!  I reached out to a junior developer on the team and shared my files with him, hoping for some reassurance.  He gave me the thumbs up, then encouraged me to push the code, and so I did.
            </p>
            <p ${blog11pStyle}>
                Folks had warned me that your first PR as a developer could result in a lot of comments.  55 comments later, my ButtonWithImages could now be dynamically rendered with different SVGs, text, onClick functionality, and even included a suite of unit tests!  Each comment pointed out weaknesses in my code, like redundant and inefficient code, as well as failure to have good test coverage.
            </p>
            <p ${blog11pStyle}>
                This set a good back and forth tempo with the experienced software engineers on the team.  I could share my attempts at a solution, then see how a master would do it.  By the end of the third week, I had the opportunity to work on 6 React tickets and 3 of them were approved, merged, and closed.  One of the tickets was to investigate an unintended issue; we have a follow-up meeting next week to discuss the investigation findings and determine a path forward.
            </p>
            <p ${blog11pStyle}>
                My first three weeks with Forbes validates my decision to leave my cushy pharmaceutical job to pursue my passion.  I enjoy every minute of the work, learning each new technology feels exciting and rewarding, and the team is warm and welcoming.  Maybe this will change if I ever lose the 'intern' status; however, I will not worry right now as I only have 5 short weeks left with this team.
            </p>
            <p ${blog11pStyle}>
                I hope to make the most out of every minute...
            </p>
        </div>
        <div class="row">
            <div class="my-auto text-end">
                <div class="text-end">
                    <p>Happy coding!</p>
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