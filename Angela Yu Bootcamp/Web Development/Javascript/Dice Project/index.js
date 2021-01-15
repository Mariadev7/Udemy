// let randomNumber = Math.floor(Math.random() * 6) + 1;

// console.log(randomNumber);

// function replaceImage(){

// document.getElementById("img1").src = "images/dice1.png"
// document.querySelector("dice").setAttribute("img1","randomNumber")

// }
function dice()
{   
    let randomImages= new Array("images/dice1.png", "images/dice2.png","images/dice3.png", "images/dice4.png", "images/dice5.png","images/dice6.png");

    let randomNumber = Math.floor(Math.random() * 6);


    document.getElementById('img1').setAttribute('src',randomImages[randomNumber]);
}
dice()

