function buttonEffect(buttonId) {
    let buttonClicked = document.getElementById(buttonId);
    console.log(buttonClicked);
    buttonClicked.classList.add('buttonEffect');
    buttonClicked.addEventListener('transitionend', () => {
      buttonClicked.classList.remove('buttonEffect'); 
    }, { once: true });
}