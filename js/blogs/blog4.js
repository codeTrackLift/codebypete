const blog4Body = `
    <div class="accordion-body">
        <div class="'container-fluid row">
            <div class="'container-fluid row">
                <div class="col-sm-7">
                    <div>
                        <h4 class="text-center mb-4">Greetings!</h4>
                        <div class='m-auto' style="max-width: 480px;">
                            <div class="h6">
                                During week 4 of my <span style="color:white;">MIT xPRO Coding Bootcamp</span>, I spent a lot of time on my portfolio.
                            </div>
                            <div class="h6">
                                I liked the 'Typewriter' CSS animation and wanted to customize it and propogate it strategically throughout my portfolio. Here's the example I followed from <a href="https://codepen.io/evirunurm/pen/MWOQoyO" target="_blank">CodePen</a>. There were some challanges along the way...
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-5 my-auto">
                    <iframe id='blog4Video' class='container-fluid ratio ratio-1x1' src="https://youtube.com/embed/YYzOL7NGuxM" frameborder="0" allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div class="row mx-auto">
                <div class='col-md-5 align-self-center'>
                    <h6>Image 1</h6>
                    <a href="../pics/typewriter/typewriterHTML.png" target="_blank"><img src="../pics/typewriter/typewriterHTML.png" class='img-fluid m-auto' alt="Screenshot of HTML show the 'Typewriter' Section."></a>
                </div>
                <div class="col-md-7 my-auto">
                    <p>I wanted to simulate typing multiple lines of code, I needed a way to control and delay each row individually. I chose to assign <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id" target="_blank">'id'</a> tags that I later call upon in the CSS. I chose to use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span" targe="_blank">'span'</a> tags to manuipate colors directly in the HTML. Note that I used underscores that color-matched the background to simulate a tab.</p>
                </div>
            </div>

            <div class="row mx-auto">
                <div class="col-sm-4 my-auto">
                    <p>Images 2 & 3 show the CSS properties for the 'typewriter,' the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section" target="_blank">'section'</a> and the 'h2' font.</p>
                    <p class="d-none d-sm-none d-md-block">Image 4 shows the properties for the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" target="_blank">pseudo-elements</a> '<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before" target="_blank">:before</a>' and '<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::after" target='_blank'>:after</a>.' Image 5 shows using the 'write' and 'blink' animations for the aforementioned pseudo-elements. Note that the 'steps' matched the character length of the row.</p>
                </div>
                <div class="col-sm-8 col-md-6 row">
                    <div class="col-sm-5">
                        <h6>Image 2</h6>
                        <a href="../pics/typewriter/typewriterCSS1.png" target="_blank"><img src="../pics/typewriter/typewriterCSS1.png" class="img-fluid m-auto" alt="Screnshot of CSS showing 'Typewriter' rows 1 - 5."></a>
                    </div>
                    <div class="col-sm-7">
                        <h6>Image 3</h6>
                        <a href="../pics/typewriter/typewriterCSS2.png" target="_blank"><img src="../pics/typewriter/typewriterCSS2.png" class="img-fluid m-auto" alt="Screnshot of CSS showing 'Typewriter' rows 1 - 5."></a>
                    </div>
                    <div class="col-sm-12 d-none d-sm-none d-md-block">
                        <h6>Image 5</h6>
                        <a href="../pics/typewriter/typewriterCSS4.png" target="_blank"><img src="../pics/typewriter/typewriterCSS4.png" class="img-fluid m-auto" alt="Screnshot of CSS showing 'Typewriter' rows 1 - 5."></a>
                    </div>
                </div>
                <div class="col-sm-2 d-none d-sm-none d-md-block">
                    <h6>Image 4</h6>
                    <a href="../pics/typewriter/typewriterCSS3.png" target="_blank"><img src="../pics/typewriter/typewriterCSS3.png" class="img-fluid m-auto" alt="Screnshot of CSS showing 'Typewriter' rows 1 - 5."></a>
                </div>
                <div class="row">
                    <div class="col-sm-3 d-none d-sm-block d-md-none">
                        <h6>Image 4</h6>
                        <a href="../pics/typewriter/typewriterCSS3.png" target="_blank"><img src="../pics/typewriter/typewriterCSS3.png" class="img-fluid m-auto" alt="Screnshot of CSS showing 'Typewriter' rows 1 - 5."></a>
                    </div>
                    <div class="col-sm-9 d-none d-sm-block d-md-none">
                        <h6>Image 5</h6>
                        <a href="../pics/typewriter/typewriterCSS4.png" target="_blank"><img src="../pics/typewriter/typewriterCSS4.png" class="img-fluid m-auto" alt="Screnshot of CSS showing 'Typewriter' rows 1 - 5."></a>
                    </div>
                </div>
                <div class="d-block d-sm-block d-md-none">
                    <p class="narrowText">Image 4 shows the properties for the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" target="_blank">pseudo-elements</a> '<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before" target="_blank">:before</a>' and '<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::after" target='_blank'>:after</a>.' Image 5 shows using the 'write' and 'blink' <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation" target="_blank">animations</a> for the aforementioned pseudo-elements. Note that the 'steps' matched the character length of the row.</p>
                </div>
                <div class="col-sm-2 d-sm-none d-md-none">
                    <h6>Image 4</h6>
                    <a href="../pics/typewriter/typewriterCSS3.png" target="_blank"><img src="../pics/typewriter/typewriterCSS3.png" class="img-fluid m-auto" alt="Screnshot of CSS showing 'Typewriter' rows 1 - 5."></a>
                </div>
                <div class="d-block d-sm-none">
                    <h6>Image 5</h6>
                    <a href="../pics/typewriter/typewriterCSS4.png" target="_blank"><img src="../pics/typewriter/typewriterCSS4.png" class="img-fluid m-auto" alt="Screnshot of CSS showing 'Typewriter' rows 1 - 5."></a>
                </div>
            </div>

            <div class="row mx-auto">
                <div class="col-sm-6 row">
                    <div class="col-sm-6">
                        <h6>Image 6</h6>
                        <a href="../pics/typewriter/typewriterCSS5.png" target="_blank"><img src="../pics/typewriter/typewriterCSS5.png" class="img-fluid m-auto" alt="Screnshot of CSS showing 'Typewriter' rows 1 - 5."></a>
                    </div>
                    <div class="col-sm-6">
                        <h6>Image 7</h6>
                        <a href="../pics/typewriter/typewriterCSS6.png" target="_blank"><img src="../pics/typewriter/typewriterCSS6.png" class="img-fluid m-auto" alt="Screnshot of CSS showing 'Typewriter' rows 1 - 5."></a>
                    </div>
                </div>
                <div class="col-sm-6 my-auto">
                    <div class="my-5">
                        <p class='narrowText'>Image 6 shows the 'write' and 'blink' <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation" target="_blank">animations</a>. Note that my color choices were for a darker background.</p>
                        <p class='narrowText'>Image 7 shows the CSS properties and animation properties of the subsequent 'typewriter' rows. Note that the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function" target="_blank">timing and steps</a> needed to be adjusted for each row.</p>
                    </div>
                    <div class="float-end">
                        <div class="text-end">
                            <p>Happy coding!</p>
                        </div>
                        <div class="my-auto">
                            <img src="../pics/about/profilepic.gif" alt="Picture of Pete" class="profilePic">
                            <p style="text-align:end;font-style:italic;color:white;">-Pete</p>
                            <p style="text-align:end;font-style:italic;color:white;">Mar 5, 2022</p>
                            <p style="text-align:end;font-style:italic;color:white;">Student @ MIT xPRO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const injectBlog4 = () => blog4.innerHTML = blog4Body;