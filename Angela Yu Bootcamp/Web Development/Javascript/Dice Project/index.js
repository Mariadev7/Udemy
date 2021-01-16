// let randomNumber = Math.floor(Math.random() * 6) + 1;

// console.log(randomNumber);

// function replaceImage(){

// document.getElementById("img1").src = "images/dice1.png"
// document.querySelector("dice").setAttribute("img1","randomNumber")

// }
function dice1() {
    let randomImages = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png");

    let randomNumber = Math.floor(Math.random() * randomImages.length);


    document.getElementById('img1').setAttribute('src', randomImages[randomNumber]);
    randomNumber = randomNumber + 1;
    return randomNumber;
}
// dice1()


function dice2() {
    let randomImages2 = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png");

    let randomNumber1 =Math.floor(Math.random() * randomImages2.length);


    document.getElementById('img2').setAttribute('src', randomImages2[randomNumber1]);
    randomNumber1 = randomNumber1 + 1;
    return randomNumber1;
}
// dice2()

function result(dice1,dice2) {
    if (dice1 > dice2) {
        document.getElementById("title").innerHTML = "🥇 Ο ΜΙΧΑΛΗΣ ΚΕΡΔΙΣΕ!!";
    } else if (dice1 < dice2) {
        document.getElementById("title").innerHTML = "Η ΤΕΡΕΖΟΥΛΑ ΚΕΡΔΙΣΕ!!🥈";;
    } else {
        document.getElementById("title").innerHTML = "ΙΣΟΠΑΛΙΑ!! 🙌";
    }
}

result(dice1(), dice2())

