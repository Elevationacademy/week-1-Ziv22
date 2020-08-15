people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

  
const upTheCase = function(str){
    let capitalized = "";
    capitalized += str[0].toUpperCase();
    capitalized += str.slice(1);
    return capitalized;
}

const getAge = function(age){
    if(age < 21){
        return "an Underaged"; 
    }
    if(age > 55){
        return "55+";
    }
    return age;

}

const getOrigin = function(city,country){
    return `${upTheCase(city)}, ${upTheCase(country)}`
}

const getProfession = function(profession){
    let words = profession.split(" ");
    let modified = "";
    for(word of words){
        modified += `${upTheCase(word)} `
    }
    return modified;
}
const getCatchphrase = function(phrase){
    return `'${upTheCase(phrase)}'`
}

const getSummary = function(person){
    let summary = ""; 
    summary += upTheCase(person.name);
    summary += ` is ${getAge(person.age)}`;
    summary += ` ${getProfession(person.profession)}`; 
    summary += `from ${getOrigin(person.city,person.country)}. `; 
    summary += upTheCase(person.name);
    summary += ` loves to say ${getCatchphrase(person.catchphrase)}`;
    

    return summary;
}

for(person in people_info){
    console.log(getSummary(people_info[person]))
}