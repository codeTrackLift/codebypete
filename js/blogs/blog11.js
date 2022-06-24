const blog11Body = `
    <div class="accordion-body">
        <div class="d-flex justify-content-evenly my-4">
            <h4 class="my-auto">Greetings!</h4>
        </div>
        <div class="row">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque iste repellat ea quae sed ipsam vel eius? Id ipsam laboriosam harum ratione perferendis modi maxime, magni mollitia animi eligendi cumque. Iste, deleniti. Reiciendis, doloribus rerum dolor minima, perspiciatis pariatur ullam voluptas ut libero nobis molestias quibusdam voluptatibus sint nihil adipisci.
            </p>
        </div>
        <div class="row">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque iste repellat ea quae sed ipsam vel eius? Id ipsam laboriosam harum ratione perferendis modi maxime, magni mollitia animi eligendi cumque. Iste, deleniti. Reiciendis, doloribus rerum dolor minima, perspiciatis pariatur ullam voluptas ut libero nobis molestias quibusdam voluptatibus sint nihil adipisci.
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