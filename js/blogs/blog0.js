const blog0Body = `
    <div class="accordion-body">
        <p>Hello!</p>
        <p>My name is Pete Chu and I have been a professional in the Pharmaceutical industry for the past 20 years. My technical specialities include Facility Start-up, Equipment and System Validation, as well as Quality Engineering.</p>
        <p>I have a bachelor's degree in Biological Sciences from the University of Delaware. My experience includes Validation Consulting with Integrated Project Services (IPS), as well as direct employment with Janssen (formerly Centocor, Johnson & Johnson), and Eisai, Inc. (formerly Morphotek).</p>
        <p>With Janssen and Eisai, I was responsible for leading equipment and system qualification efforts as a Senior Validation Engineer. In 2012, I transitioned to a Senior Quality Engineer role within Eisai and was responsible for site metrics, quality dispositions, change controls, and leading investigations. In 2017, I was managing the GMP Document Control and Quality Engineering teams.</p>
        <p>In December of 2021, I stumbled upon freeCodeCamp.org and rediscovered my childhood passion of coding and technology. I am currently at the midpoint of my career and have decided to part ways with Eisai in order to pursue a career change that is in line with a personal passion.</p>
        <p>I look forward to working with you on this exciting part of my journey!</p>
        <div class='text-end'>
            <a href="https://twitter.com/codeTrackLift/status/1491520174725365767?s=20&t=Uo-Gd9kScpktmz4XdxwiqA" target="_blank" rel='noreferrer'>
                <img src='../pics/contact/Twitter_social_icons-circle-white.png' class='linkLogo' alt="Twitter Icon" class='img-fluid' style='max-width:2rem;border-radius:50%;'>
            </a>
        </div>
        <p style="text-align:end;font-style:italic;padding:0;color:white;">
            <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic">
            Best Regards,
        </p>
        <p style="text-align:end;font-style:italic;padding:0;color:white;">Pete Chu,<br> Feb 9, 2022</p>
        <p style="text-align:end;font-style:italic;padding:0;color:white;">Student @ MIT xPRO</p>
    </div>
`;

const injectBlog0 = () => blog0.innerHTML = blog0Body;

function blog0Open() {
    const blog0Button = document.getElementById('blog0Button');
    const blog0 = document.getElementById('blog0');
    setTimeout(injectBlog0,500);
    if (!blog0OpenStatus) {
        blog0OpenStatus = !blog0OpenStatus;
        blog0.classList.add('show');
        blog0Button.classList.remove('collapsed');
        return
    }
    blog0OpenStatus = !blog0OpenStatus;
    blog0.classList.remove('show');
    blog0Button.classList.add('collapsed');
}