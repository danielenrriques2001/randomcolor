
//we create the button's reference.
// and add a Event 'Click'. 
$(".button").on('click', () => {
    //create a const, it contains a Css RGB squeleton. 
    //!RGB takes three values!
    //We call the function. The values will be inserted randomly from the function. 
    // always between 255 and 0;
    const rndColor = `rgb(${random(255)}, ${random(5)}, ${random(255)})`;
                        //rgb(255,123,100)

    //We select the body's BackgroundColor property. 
    //It'll be equal to the rndColor variable. 
    document.body.style.backgroundColor = rndColor;
});

function random(number) {
    return Math.floor(Math.random() * (number + 1));
 };

 