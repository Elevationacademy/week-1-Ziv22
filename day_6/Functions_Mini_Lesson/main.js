// Example excercise

// people_info = [
//     {
//       name: "guido",
//       profession: "bungalow builder",
//       age: 17,
//       country: "canaland",
//       city: "sydurn",
//       catchphrase: "what a piece of wood!"
//     },
//     {
//       name: "petra",
//       profession: "jet plane mechanic",
//       age: 31,
//       country: "greenmark",
//       city: "bostork",
//       catchphrase: "that's my engine, bub"
//     },
//     {
//       name: "damian",
//       profession: "nursery assistant",
//       age: 72,
//       country: "zimbia",
//       city: "bekyo",
//       catchphrase: "with great responsibility comes great power"
//     }
//   ]

  
// const upTheCase = function(str){
//     let capitalized = "";
//     capitalized += str[0].toUpperCase();
//     capitalized += str.slice(1);
//     return capitalized;
// }

// const getAge = function(age){
//     if(age < 21){
//         return "an Underaged"; 
//     }
//     if(age > 55){
//         return "55+";
//     }
//     return age;

// }

// const getOrigin = function(city,country){
//     return `${upTheCase(city)}, ${upTheCase(country)}`
// }

// const getProfession = function(profession){
//     let words = profession.split(" ");
//     let modified = "";
//     for(word of words){
//         modified += `${upTheCase(word)} `
//     }
//     return modified;
// }
// const getCatchphrase = function(phrase){
//     return `'${upTheCase(phrase)}'`
// }

// const getSummary = function(person){
//     let summary = ""; 
//     summary += upTheCase(person.name);
//     summary += ` is ${getAge(person.age)}`;
//     summary += ` ${getProfession(person.profession)}`; 
//     summary += `from ${getOrigin(person.city,person.country)}. `; 
//     summary += upTheCase(person.name);
//     summary += ` loves to say ${getCatchphrase(person.catchphrase)}`;
    

//     return summary;
// }

// for(person in people_info){
//     console.log(getSummary(people_info[person]))
// }

// Story  excercise

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const removeSpecialChars = function(story){
    let seperator = story;
    for(char of specialChars){
        seperator = seperator.split(char).join(" ")
    }
    return seperator;
}
const deCapitalizer = function(str){
    let deCapitalized = "";
    deCapitalized += str[0].toLowerCase();
    deCapitalized += str.slice(1);
    return deCapitalized;
}

const lowTheCase = function(story){
    story = story.split(" ");
    for(word in story){
        if(story[word]){
            story[word] = deCapitalizer(story[word]);
        }
    }
    story = story.join(" ");
    return story;
}

const counter = function(story){
    story = story.split(" ");
    for(word of story){
        if(word){
            if(wordCounts[word]){
                wordCounts[word] += 1;
            }
            else{
                wordCounts[word] = 1;
            }
        }
    }
    return wordCounts;
}

const countWords = function(story){
    story = removeSpecialChars(story);
    story = lowTheCase(story);
    let final = counter(story);
    return final;
}

let myStory = countWords(story);
console.log(myStory);