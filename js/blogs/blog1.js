const blog1Body = `
    <div class="accordion-body">
        <h4>Hello World!</h4>
        <p style="color:white;">Pun intended. &#128516;</p>
        <p>
            My name is Pete and this is my first blog post. I am enrolled in a Full Stack coding bootcamp and one of our first assignments is to develop a set of instructions for creating a personal GitHub page.
        </p>
        <p>
            As I prepared for this bootcamp, I used some free online resources like <a href="https://www.theodinproject.com" target="_blank">The Odin Project</a> and <a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp.org</a>. Thank you both for making this coding knowledge so easily accessible!</p>
        <ol>
            <li>
                <span style="text-decoration:underline;color:white;">Set up Git</span>: I did this on Mac and used <a href="https://docs.brew.sh/Installation#macos-requirements" target="_blank">Homebrew</a>. The full lesson can be found here: <a href="https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/setting-up-git" target="_blank">The Odin Project</a>.
            </li>
            <li>
                <span style="text-decoration:underline;color:white;">Set up a Git Repository</span>: I did this for the first time using the terminal command line. It reminded me of using MS DOS when I was younger. As I continued to make Git Repositories, I transitioned to using the GitHub Desktop App, as well as the Visual Studio Code Extension. The full lesson can be found here: <a href="https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/git-basics" target="_blank">The Odin Project</a>.
            </li>
            <li>
                <span style="text-decoration:underline;color:white;">Create index.html</span>: This should include the content of your website. You may want to include some optional CSS for aesthetics. Check out the Responsive Web Design course at <a href="https://www.freecodecamp.org/learn/responsive-web-design/" target="_blank">freeCodeCamp.org</a>.
            </li>
            <li>
                <span style='text-decoration:underline;color:white;'>Push to GitHub</span>: Similar to setting up a Git Repository, I starting off using the terminal 'git add' and 'git commit' commands my first several weeks, but later used VS Code and the GitHub Desktop App.
            </li>
            <li>
                <span style='text-decoration:underline;color:white;'>Publish Repository</span>: In order to view my project on the web or show it to others, I had to publish my repository. I did this using the GitHub Website and navigating to Settings > Pages and changing the Source from none to main branch. The full lesson can be found here: <a href="https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/recipes" target="_blank">The Odin Project</a>.
            </li>
            <li>
                <span style="text-decoration:underline;color:white;">Use a Custom Domain</span> (Optional): GitHub has some pretty detailed documentation that describes how to set up a custom domain, specifically with adding the DNS IP addresses. Check out this <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site" target="_blank">GitHub Documentation Link</a>.
            </li>
        </ol>
        <p style="padding-top:-1rem; padding-bottom:2rem;">Please let me know with any suggestions, or comments. Thank you again for visiting my site, and happy coding!</p>
        <div class='text-end'>
            <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic" style='transform:translate(-2rem)'>
            <p style="font-style:italic;color:white;">-Pete</p>
            <p style="font-style:italic;color:white;">Feb 16, 2022</p>
        </div>
    </div>
`;

const injectBlog1 = () => blog1.innerHTML = blog1Body;