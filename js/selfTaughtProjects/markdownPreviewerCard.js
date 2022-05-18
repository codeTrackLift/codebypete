const markdownPreviewerCard = `
    <div id='markdownPreviewerCard' class="card col-sm-4" style="width:18rem;">
        <img src="../pics/projects/markdownPreviewer.jpg" class="card-img-top img-fluid"
            alt="Markdown Previewer React App">
        <div class="card-body">
            <h5 class="card-title">Markdown Previewer</h5>
            <p class="card-text">My first <span class="text-white">React App</span>, this developed during
                Bootcamp Week 9 with React 18 using <span class="text-white">Class constructors</span> and <span
                    class="text-white">props</span>.</p>
            <p class="card-text">This project was part of the <a href="https://www.freecodecamp.org/"
                    target="_blank">freeCodeCamp</a> Front End Development Libraries Certification.</p>
            <div class="btnContainer">
                <a id='markdownPreviewerDemo' href="https://codetracklift.github.io/markdown-previewer/"
                    class="btn btn-secondary" target="_blank">Try
                    Demo</a>
                <a id='markdownPreviewerRepo' href="https://github.com/codeTrackLift/markdown-previewer#readme"
                    class="btn btn-secondary btnDark" target="'_blank"><img
                        src="../pics/contact/GitHub-Mark-64px.png"> Readme</a>
            </div>
        </div>
        <cite id='markdownPreviewerCite' class="text-center">Developed in Apr, 2022</cite>
    </div>
`;

const injectMarkdownPreviewerCard = () => selfTaughtProjects.innerHTML += markdownPreviewerCard;