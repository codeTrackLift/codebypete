const currentYear = new Date().getFullYear();
const footer = document.getElementById('footer');
const myFooter = `
    <p>Copyright ©
        ${currentYear}
        <img class='d-none d-sm-inline' src="../pics/pharma2code_icon.gif" style='height: 2rem;' alt="My 'Pharma 2 Code' Logo.">
        <span style="color:white;">code</span><span style="color:#00857c;">By</span><span style="color:lime;">Pete</span>
    </p>
    <a href="https://github.com/codeTrackLift/codebypete" target="_blank">
        <img class="socialLogo" src="../pics/contact/GitHub-Mark-Light-64px.png" alt="GitHub Icon">
    </a>
    <a href="https://twitter.com/codeTrackLift" target="_blank">
        <img class="socialLogo" src="../pics/contact/Twitter_social_icons-circle-white.png" alt="Twitter Icon">
    </a>
    <a href="https://www.linkedin.com/in/codebypete/" target="_blank">
        <img class="socialLogo" src="../pics/contact/linkedin_white.png" alt="LinkedIn Icon">
    </a>`;

const injectMyFooter = () => footer.innerHTML = myFooter;

const footerBackground = () => {
    footer.style.backgroundColor = 'rgb(50,50,50)';
    footer.style.height = '3rem';
    footer.style.marginTop = '0';
}