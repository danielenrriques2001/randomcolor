
//we create the button's reference.
// and add a Event 'Click'. 
$(document).ready(() => {

    setInterval(()=> {
        const rndColor = `rgb(${random(255)}, ${random(5)}, ${random(255)})`; 
        document.body.style.backgroundColor = rndColor;
    },250);
   
});

function random(number) {
    return Math.floor(Math.random() * (number + 1));
 };

 