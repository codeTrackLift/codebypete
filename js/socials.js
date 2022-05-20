const socials = document.getElementById('socials');

const socialLogos = `
    <div id='socialsContainer'>
        <a href="https://github.com/codeTrackLift/" target="_blank" rel='noreferrer'>
            <img src='../pics/contact/GitHub-Mark-Light-64px.png' id='gitHubLogo' class='socialLogo' alt="GitHub Icon">
        </a>
        <a href="https://twitter.com/codetracklift" target="_blank" rel='noreferrer'>
            <img src='../pics/contact/Twitter_social_icons-circle-white.png' id='twitterLogo' class='socialLogo' alt="Twitter Icon">
        </a>
        <a href="https://www.linkedin.com/in/codebypete/" 
            target="_blank" rel='noreferrer'>
            <img src='../pics/contact/linkedin_white.png' id='linkedInLogo' class='socialLogo' alt="LinkedIn Icon">
        </a>
            <a href="https://www.youtube.com/channel/UCVDOFoM5NXYrPoC02lbNJ-Q" target="_blank" rel='noreferrer'>
            <img src='../pics/contact/yt_logo.gif' id='youTubeLogo' class='socialLogo' alt="YouTube Icon">
        </a>
    </div>
`;

const injectSocials = () => {
    socials.innerHTML = socialLogos;
    document.getElementById('socialsContainer').style.paddingBlock = '1rem';
}