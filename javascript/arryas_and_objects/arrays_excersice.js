let employees = ["DeMarcus", "Kai", "Christina", "ziv", "tom", "amir","nadav"];
// let candidates = ["Tiffany", "Elana", "Carl"];

// employees.push(...candidates);
// let newArray = [...employees]

// newArray.push(...employees);

// console.log(employees);
// console.log(newArray);
// console.log(`original: ${employees}`);

// let toSplice = employees.indexOf("tom");
// let removed = employees.splice(toSplice, 7);
// removed.splice(removed.length,0,"bye-bye", "bla-bla");
// console.log(`Modified: ${employees} \nremoved: ${removed}`);

//Arrays - Excersixe 01

const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"];
const newStrand = [];
newStrand.push(genes[0],genes[1]);
newStrand.push(genes[genes.length-1], genes[3],genes[2]);
newStrand.push(newStrand.splice(3,1))
newStrand.push(newStrand[newStrand.length-1]);
newStrand.unshift("FXT");
console.log(`Old array: ${genes}\nNew array: ${newStrand}`);

