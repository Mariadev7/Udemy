let houseKeeper = {
    name: "Sara",
    lastname: "Takanova",
    age: 40,
    workExperience: 6,
    languages:["English" , "Greek"]
}

function HouseKeeper(name,lastname,age,workExperience,languages){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.workExperience = workExperience;
    this.languages = languages;
}

let houseKeeper1 = new HouseKeeper('Sara', 'Takanova', 40 , 6 , ["English" , "Greek"])
console.log(houseKeeper1);
