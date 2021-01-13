let names = ["Maria", "Jim", "George", "Teo", "Tereza", "Irene"];

function lunch() {
    let select = names[Math.floor(Math.random() * names.length)]
    console.log(`${select} is going to pay for lunch`)
}


lunch()