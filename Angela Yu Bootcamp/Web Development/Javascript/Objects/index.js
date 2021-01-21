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
    this.clean = function (){         // Method = Function in an object
        alert ("Cleaning in progress")
    }
}

let houseKeeper1 = new HouseKeeper('Sara', 'Takanova', 40 , 6 , ["English" , "Greek"])
console.log(houseKeeper1);

let houseKeeper2 = new HouseKeeper('Mara', 'Putanova', 15 , 5, ['Arabic', 'Roma']);

console.log(houseKeeper2.clean()); // Calling the method with dot notation
