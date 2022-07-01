const blog12Button = () => {
    const buttonWithImage = document.getElementById('buttonWithImage');
    buttonWithImage.classList.toggle('btnDark');
}

const blog12Body = `
    <div class="accordion-body">
        <div class="my-4">
            <h4 class="my-auto fs-5">Greetings!</h4>
        </div>
        <div class="row">
            <p style='margin: 0.5rem auto;'>
                Have you thought about enrolling in a <span class='text-white'>coding bootcamp</span> to become a <span class='text-white'>software developer</span>? This was a decision that weighed heavily on me about 7 months ago. 
            </p>
            <p style='margin: 0.5rem auto;'>
                Below is a recap of how I prepared, for <span class='text-white menloRegular'>myCodingJourney</span>…
            </p>
        </div>
        <div class="row">
            <span class='menloRegular chocolate mt-3'>TLDR</span>
            <hr>
            <ol style='margin: -1.25rem 0rem -0.25rem 1.25rem;'>
                <li>Figure out what you don’t know</li>
                <li>Learning to code is like learning a language</li>
                <li>Study the fundamentals</li>
                <li>Fail forward and do it rapidly</li>
                <li>Learn to use documentation</li>
                <li>Stay ahead of the curriculum</li>
            </ol>
            <hr>
        </div>
        <div class="row">
            <p style='margin: 0.5rem auto;'>
                In Dec of 2021, I enrolled in a full-time full stack coding bootcamp at <a href='https://xpro.mit.edu/' target='_blank'>MIT xPRO</a>, where I would learn to develop and deploy web applications using the <a href='https://xpro.mit.edu/programs/program-v1:xPRO+PCCFTx/' target='_blank'>MERN stack</a>.  Classes started on Wed Feb 9, 2022.  This gave me about <span class='text-white'>6 weeks of preparation</span> time to position myself for success.
            </p>
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                What the heck is a MERN?!?
            </p>
            <p style='margin: 0.5rem auto;'>
            At that point, I didn't even know what the MERN stack was.  So, it seemed logical to start with understanding the curriculum.  After reviewing the available documentation and a bit of time on YouTube, I came to understand that the MERN stack consisted of <a href='https://mongodb.com/' target='_blank'>MongoDB</a>, <a href='https://expressjs.com/' target='_blank'>Express</a>, <a href='https://expressjs.com/' target='_blank'>React</a>, and <a href='https://nodejs.org/en/' target='_blank'>Node</a>.  All of which use JavaScript.  
            </p>
            <img src='../pics/about/mernStackTrans.png'class='img-fluid mx-auto' style='max-width:20rem'>
            <p style='margin: 0.5rem auto;'>
                Since I had already dabbled with <a href='https://www.freecodecamp.org/' target='_blank'>freeCodeCamp</a> (and since <span class='text-white'>it is free</span>), I decided to target completion of the <a href='https://www.freecodecamp.org/learn/2022/responsive-web-design/' target='_blank'>Responsive Web Design</a> and <a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/' target='_blank'>JavaScript Data Structures and Algorithms</a> certificates before bootcamp began.  HTML and CSS were a ton of fun and I burned through that in about 2 weeks (at a pace of ~8 hrs/day).  JavaScript was a completely different beast…
            </p>
            <p style='margin: 0.5rem auto;'>
                Everything starts out fine.  You learn to define variables and do some arithmetic; it's kinda fun! That all changes once you dive into array methods and objects... ever heard of the phrase '<a href='https://en.wikipedia.org/wiki/Haemolacria' target='_blank'>making your eyes bleed</a>’?  😢
            </p>
            <p style='margin: 0.5rem auto;'>
                While I was wiping the bloody tears from my eyes, or otherwise had screen fatigue, I shifted my efforts to learning how to learn.  I picked up an audiobook called <a href='https://www.audible.com/pd/Ultralearning-Audiobook/0062945149?qid=1656715826&sr=1-1&ref=a_search_c3_lProduct_1_1&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=9PNQ8G63C3JN37SX16RF' target='_blank'>Ultralearning</a> (available in hardcopy too) and scoured the <a href='https://www.youtube.com/channel/UCVDOFoM5NXYrPoC02lbNJ-Q' target='_blank'>YouTubes</a> for any and all bootcamp related videos.  My takeaways:
            </p>
            <ol style='margin: -0.75rem 0rem -0.25rem 1.25rem;'>
                <li>growth vs fixed mindset</li>
                <li>immerse yourself and <a href='https://www.theodinproject.com/' target='_blank'>build things</a></li>
                <li>be resourceful, learn to use <a href='https://developer.mozilla.org/' target='_blank'>documentation</a></li>
            </ol>
            <p style='margin: 0.5rem auto;'>
                Tue Feb 8, 2022: I was on a mini vacation with some friends.  A last little trip before locking myself in my office for the next 5 months.  At this point my biggest coding accomplishments included a JavaScript <a href='./projects.html#jsCalcCard'>drum set calculator</a> (yes, now you <span class='text-white'>CAN</span> practice your rhythm while performing mathematical operations), a landing page for a <a href='./projects.html#lmnoPhotoCard'>local photographer</a>, and the aforementioned freeCodeCamp certificates.
            </p>
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                Welcome to MIT xPRO…
            </p>
            <p style='margin: 0.5rem auto;'>
                This course is entirely online, and you are greeted by MIT Professors <a href='https://professional.mit.edu/programs/faculty-profiles/john-r-williams' target='_blank'>Williams</a> and <a href='https://professional.mit.edu/programs/faculty-profiles/abel-sanchez' target='_blank'>Abel</a>, both seem very knowledgeable and well spoken.  Their presentation styles are interesting and engaging (keep in mind that this is coming from a 43-year-old wannabe computer nerd). 😉
            </p>
            <p style='margin: 0.5rem auto;'>
                The first trimester of bootcamp covered JavaScript, HTML and CSS fundamentals, the exact materials I had just completed with freeCodeCamp.  Since this wasn’t my first time with these fundamentals, I was able to focus on polishing and refining what I already knew.  But more importantly, this made it easier to pick up on new methods as I had an existing foundation to build upon.
            </p>
            <p style='margin: 0.5rem auto;'>
                The teaching techniques included:
            </p>
            <ol style='margin: -0.75rem 0rem -0.25rem 1.25rem;'>
                <li>code-along videos with the aforementioned professors</li>
                <li>reading material/documentation</li>
                <li>Next Tech learning platform (IDE with auto-grader)</li>
                <li>office hours with learning facilitators</li>
            </ol>
            <p style='margin: 0.5rem auto;'>
                The code-along videos were purposeful in steering students through the abundant learning options. Each lesson was ultimately connected to one of the projects that you would later build and add to your portfolio.
            </p>
            <p style='margin: 0.5rem auto;'>
                The Next Tech learning platform reminded me of the freeCodeCamp IDE, except without ‘campfire’ mode (I miss those guitar strum keystrokes!).  There were occasions where I thought I had completed the assignment as described in the procedure, but the auto-grader would not give me the green checkmark to proceed.
            </p>
            <p style='margin: 0.5rem auto;'>
                This is where I learned to read Jest unit-tests.  At first these cryptic statements were mystifying to look at.  However, once I found the Jest documentation, I was able to figure out the patterns and determine that the test wanted me to use a specific id tag (for example).
            </p>
            <p style='margin: 0.5rem auto;'>
                To close out the first trimester, we were assigned a portfolio project (this website), and three mini-projects.  These mini-projects demonstrate our ability to manipulate the DOM with JavaScript, and interact with an API to dynamically render data to our web application.  It also provided an opportunity to showcase our individual creativity by developing custom styling, additional features, and functionality.
            </p>
            <p style='margin: 0.5rem auto;'>
                More reflections coming up on bootcamp projects in general, as well as a recap of the second and third trimesters, where we cover React and back-end development (respectively).
            </p>
            <p style='margin: 0.5rem auto;'>
                Happy holiday weekend and happy coding!
            </p>
        </div>
        <div class="row">
            <div class="my-auto text-end">
                <div class="text-end">
                    <p>Happy coding!</p>
                    <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic" style='transform:translateX(-2rem)'>
                </div>
                <p style="text-align:end;font-style:italic;color:white;">-Pete</p>
                <p style="text-align:end;font-style:italic;color:white;">Jul 4, 2022</p>
            </div>
        </div>
    </div>    
`;

const injectBlog12 = () => blog12.innerHTML = blog12Body;

function blog12Open() {
    const blog12Button = document.getElementById('blog12Button');
    const blog12 = document.getElementById('blog12');
    setTimeout(injectBlog12,500);
    if (!blog12OpenStatus) {
        blog12OpenStatus = !blog12OpenStatus;
        blog12.classList.add('show');
        blog12Button.classList.remove('collapsed');
        return
    }
    blog12OpenStatus = !blog12OpenStatus;
    blog12.classList.remove('show');
    blog12Button.classList.add('collapsed');
}