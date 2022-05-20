const currentYear = new Date().getFullYear();
const footer = document.getElementById('footer');

const myFooter = `
    <p class='text-silver'>Copyright ©
        ${currentYear}
        <img class='d-none d-sm-inline' src="../pics/pharma2code_icon.gif" style='height: 2rem;' alt="My 'Pharma 2 Code' Logo.">
        <span style="color:white;">code</span><span style="color:#00857c;">By</span><span style="color:lime;">Pete</span>
    </p>

`;

const injectMyFooter = () => footer.innerHTML = myFooter;

const footerBackground = () => {
    socials.style.backgroundColor = 'rgb(50,50,50)';
    footer.style.backgroundColor = 'rgb(50,50,50)';
    footer.style.height = '3rem';
    footer.style.marginTop = '0';
}