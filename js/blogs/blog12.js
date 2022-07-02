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
                Below is a recap of how I prepared, for <span class='text-white menloRegular'>myCodingJourney</span>...
            </p>
            <hr class='mt-3'>
            <img src='../pics/blog/bootcampPrepper.jpg' class='img-fluid mx-auto my-3 d-md-none' style='max-width:20rem'>
        </div>
        <div class='row'>
            <div class='col-md-6 m-auto text-center d-none d-sm-none d-md-block'>
                <img src='../pics/blog/bootcampPrepper.jpg' class='img-fluid mx-auto my-3' style='max-width:20rem'>
            </div>
            <div class='col-md-6 p-1 my-auto'>
                <span class='menloRegular chocolate px-4'>TLDR</span>
                <ol style='margin: -1.25rem 0rem -0.25rem 1.25rem;'>
                    <li>Figure out what you don’t know</li>
                    <li>Study the fundamentals</li>
                    <li>Learning to code is like learning a language</li>
                    <li><a href='https://www.forbes.com/sites/forbesbooksauthors/2021/07/29/fail-fast-and-fail-forward--learn-by-doing/?sh=6e33ca5e43a7' target='_blank'>Fail forward</a> and do it rapidly</li>
                    <li>Learn to use documentation</li>
                    <li>Stay ahead of the curriculum</li>
                </ol>
            </div>
        </div>
        <hr>
        <div class="row">
            <p style='margin: 0.5rem auto;'>
                In Dec of 2021, I enrolled in a <span class='text-white'>full-time</span> full stack coding bootcamp at <a href='https://xpro.mit.edu/' target='_blank'>MIT xPRO</a>, where I would learn to develop and deploy web applications using the <a href='https://xpro.mit.edu/programs/program-v1:xPRO+PCCFTx/' target='_blank'>MERN stack</a>.  Classes started on Wed Feb 9, 2022.  This gave me about <span class='text-white'>6 weeks of preparation</span> time to position myself for success.
            </p>
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                What the heck is a MERN?!?
            </p>
            <p style='margin: 0.5rem auto;'>
            At that point, I didn't even know what the <a href='https://javascript.plainenglish.io/why-using-the-mern-stack-is-a-popular-start-up-app-idea-87a4a0e8ebbf' target='_blank'>MERN stack</a> was.  So, it seemed logical to start with understanding the curriculum.  After reviewing the available documentation and a bit of time on <a href='https://www.youtube.com/channel/UCVDOFoM5NXYrPoC02lbNJ-Q' target='_blank'>YouTube</a>, I came to understand that the MERN stack consisted of <a href='https://mongodb.com/' target='_blank'>MongoDB</a>, <a href='https://expressjs.com/' target='_blank'>Express</a>, <a href='https://expressjs.com/' target='_blank'>React</a>, and <a href='https://nodejs.org/en/' target='_blank'>Node</a>.  All of which use <a href='https://www.javascript.com/' target='_blank'>JavaScript</a>.  
            </p>
            <img src='../pics/about/mernStackTrans.png'class='img-fluid mx-auto' style='max-width:20rem'>
            <p style='margin: 0.5rem auto;'>
                Since I had already dabbled with <a href='https://www.freecodecamp.org/' target='_blank'>freeCodeCamp</a> (and since <span class='text-white'>it is free</span>), I decided to target completion of the <a href='https://www.freecodecamp.org/learn/2022/responsive-web-design/' target='_blank'>Responsive Web Design</a> and <a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/' target='_blank'>JavaScript Algorithms and Data Structures</a> certificates before bootcamp began.  HTML and CSS were a ton of fun and I burned through that in about 2 weeks.  <span class='text-white'>JavaScript</span> was a <span class='text-white'>completely different beast</span>…
            </p>
            <p style='margin: 0.5rem auto;'>
                Everything starts out fine.  You learn to define variables and do some arithmetic; <span class='text-white'>it's kinda fun</span>! That all changes once you dive into array methods and objects... ever heard of the phrase '<a href='https://english.stackexchange.com/questions/217400/usage-of-the-phrase-make-ones-eyes-bleed' target='_blank'>making your eyes bleed</a>’?  😢
            </p>
            <p style='margin: 0.5rem auto;'>
                While I was wiping the bloody tears from my eyes, or otherwise had screen fatigue, I shifted my efforts to <span class='text-white'>learning how to learn</span>.  I picked up an audiobook called <a href='https://www.audible.com/pd/Ultralearning-Audiobook/0062945149?qid=1656715826&sr=1-1&ref=a_search_c3_lProduct_1_1&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=9PNQ8G63C3JN37SX16RF' target='_blank'>Ultralearning</a> (available in hardcopy too) and scoured the <a href='https://www.youtube.com/channel/UCVDOFoM5NXYrPoC02lbNJ-Q' target='_blank'>YouTubes</a> for any and all bootcamp related videos.
            </p>
            <p class='cornflowerBlue menloRegular' style='margin: 0.5rem auto;'>
                My takeaways:
            </p>
            <ol style='margin: -0.75rem 0rem -0.25rem 1.25rem;'>
                <li><a href='https://www.forbes.com/sites/forbesbusinessdevelopmentcouncil/2021/08/03/building-a-mindset-for-success/?sh=734ab01977f8' target='_blank'>growth mindest</a> vs fixed mindset</li>
                <li>immerse yourself and <a href='https://www.theodinproject.com/' target='_blank'>build things</a></li>
                <li>be <a href='https://www.forbes.com/sites/forbeshumanresourcescouncil/2022/06/23/resourcefulness-and-autophagy-in-business/?sh=19abd8f14f43' target='_blank'>resourceful</a>, learn to use <a href='https://developer.mozilla.org/' target='_blank'>documentation</a></li>
            </ol>
            <p style='margin: 0.5rem auto;'>
                Tue Feb 8, 2022: I was on a mini vacation with some friends.  A last little trip before locking myself in my office for the next 5 months.  At this point my biggest coding accomplishments included a JavaScript <a href='./projects.html#jsCalcCard'>drum set calculator</a> (yes, now you <span class='text-white'>CAN</span> practice your rhythm while performing mathematical operations), a landingpage for a <a href='./projects.html#lmnoPhotoCard'>local photographer</a>, and the aforementioned freeCodeCamp certificates.
            </p>
            <p style='margin: 0.5rem auto;' class='menloRegular cornflowerBlue'>
                Welcome to MIT xPRO!
            </p>
            <p style='margin: 0.5rem auto;'>
                This course is entirely online, and you are greeted by MIT Professors <a href='https://professional.mit.edu/programs/faculty-profiles/john-r-williams' target='_blank'>Williams</a> and <a href='https://professional.mit.edu/programs/faculty-profiles/abel-sanchez' target='_blank'>Abel</a>, both seem very knowledgeable and well spoken.  Their presentation styles are interesting and engaging (keep in mind that this is coming from a 43-year-old <span class='text-white'>wannabe computer nerd</span>). 😉
            </p>
            <p style='margin: 0.5rem auto;'>
                The <span class='text-white'>first trimester</span> of bootcamp covered JavaScript, HTML and CSS <span class='text-white'>fundamentals</span>, the exact material I had just completed with <a href='https://www.freecodecamp.org/' target='_blank'>freeCodeCamp</a>.
            </p>
            <p style='margin: 0.5rem auto;'>
                Since this wasn’t my first time with these <span class='text-white'>fundamentals</span>, I was able to focus on polishing and refining what I had already learned.  But <span class='text-white'>more importantly</span>, this made it easier to pick up on new methods as I had an existing <span class='text-white'>foundation</span> to build upon.
            </p>
            <img src='../pics/blog/giphy_bricks.gif' class='img-fluid mx-auto my-3 d-md-none' style='max-width:12rem' alt='Animated gif of an octopus laying bricks'>
            <div class='row'>
                <div class='col-md-8'>
                    <p class='cornflowerBlue menloRegular' style='margin: 0.5rem auto;'>
                        Teaching techniques included:
                    </p>
                    <ol style='margin: -0.75rem -1.5rem -0.25rem -0.25rem;'>
                        <li>code-along videos with the aforementioned professors</li>
                        <li>reading material / documentation</li>
                        <li><a href='https://next.tech/' target='_blank'>Next Tech</a> learning platform (<a href='https://en.wikipedia.org/wiki/Integrated_development_environment' target='_blank'>IDE</a> with auto-grader)</li>
                        <li>office hours with learning facilitators</li>
                    </ol>
                </div>
                <div class='col-md-4 m-auto text-center d-none d-sm-none d-md-block'>
                    <img src='../pics/blog/giphy_bricks.gif' class='img-fluid mx-auto my-3' style='max-width:12rem' alt='Animated gif of an octopus laying bricks'>
                </div>
            </div>
            <p style='margin: 0.5rem auto;'>
                The <span class='text-white'>code-along videos</span> were <span class='text-white'>purposeful</span> in <span class='text-white'>steering</span> students through the abundant learning options. Each lesson was <span class='text-white'>ultimately connected</span> to one of the <a href='./projects.html#bootcamp'>projects</a> that you would later build and add to your <span class='text-white'>portfolio</span>.
            </p>
            <p style='margin: 0.5rem auto;'>
                The Next Tech learning platform reminded me of the freeCodeCamp IDE, except without ‘<a href='https://www.freecodecamp.org/news/freecodecamp-july-2021-summit/' target='_blank'>campfire</a>’ mode (I miss those <span class='text-white'>acoustic guitar keystrokes</span>!).  There were occasions where I thought I had completed the assignment as described in the procedure, but the auto-grader would not give me the green checkmark to proceed.
            </p>
            <img src='../pics/about/jest_logo.gif' class='img-fluid mx-auto' style='max-width:6rem' alt='Jest logo'>
            <p style='margin: 0.5rem auto;'>
                This is where I learned to read <a href='https://jestjs.io/' target='_blank'>Jest</a> <span class='text-white'>unit-tests</span>.  At first these cryptic statements were mystifying to look at.  However, once I found the Jest <span class='text-white'>documentation</span>, I was able to figure out the <span class='text-white'>patterns</span> and determine that the test wanted me to use a specific id tag (for example).
            </p>
            <p class='cornflowerBlue menloRegular' style='margin: 0.5rem auto;'>
                Closing out the first trimester...
            </p>
            <p style='margin: 0.5rem auto;'>
                We were assigned a <span class='text-white'>portfolio project</span> (see <a href='#blog4Button'>blog[4]</a>), and three mini-projects (see <a href='#blog5Button'>blog[5]</a> and <a href='#blog6Button'>blog[6]</a>).  These mini-projects demonstrate our ability to <span class='text-white'>manipulate</span> the <a href='https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction' target='_blank'>DOM</a> with <span class='text-white'>JavaScript</span>, and interact with an <a href='https://en.wikipedia.org/wiki/API' target='_blank'>API</a> to <span class='text-white'>dynamically render</span> data to our web application.  It also provided an opportunity to showcase our <span class='text-white'>individual creativity</span> by developing <span class='text-white'>custom styling</span>, <span class='text-white'>additional features</span>, and <span class='text-white'>functionality</span>.
            </p>
            <p style='margin: 0.5rem auto;'>
                More reflections coming up on <a href='./projects.html#bootcamp'>bootcamp projects</a> in general, as well as a recap of the second and third trimesters, where we cover <a href='https://reactjs.org/' target='_blank'>React</a> and back-end development (respectively).
            </p>
            <p style='margin: 0.5rem auto;'>
                <span class='text-white'>Happy Independence Day</span>, and <span class='text-white'>happy coding</span>!
            </p>
        </div>
        <div class="row">
            <div class='col-sm-6'>
                <img src="../pics/about/crushItApple.jpg" alt="Apple logo with CrushIt sticker" class="img-fluid mt-2" style='opacity:0.75; max-width:6rem;border-radius:100vw;'>
            </div>
            <div class="my-auto text-end col-sm-6">
                <div class="text-end">
                    <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic" style='transform:translateX(-2rem)'>
                </div>
                <p style="text-align:end;font-style:italic;color:white;">-Pete</p>
                <p style="text-align:end;font-style:italic;color:white;">Jul 2, 2022</p>
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