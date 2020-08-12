//Exc 1
// const calcAge = function(currentTime , birth) {
//     return currentTime - birth; 
// }
//Exc 2
// const calcAge = function(currentTime , birth) {
//     let maxAge =  currentTime - birth;
//     console.log(`You are either ${maxAge} or ${maxAge -1} years old`);
// }
// calcAge(2015,1989);
//Exc 3
// const isEven = function(num){
//     return (num % 2  == 0);
// }
// console.log(`${isEven(2)} and ${isEven(9)}`);

//Exc 4
// const arr = [2, 5,4,9,11,13,17,91,20,22,54];

// const printOdd = function(numbers){
//     for(num of numbers){
//         if(!isEven(num)){
//             console.log(num);
//         }
//     }
// }
// printOdd(arr);

//Exc 5

// const exsitInArr = function(arr , num) {
//     for(item of arr){
//         if(item == num){
//             return true; 
//         }
//     }
//     return false;
// }
// console.log(exsitInArr([1,23,4,56,7,8,9,7,5], 23));
// console.log(exsitInArr([1,23,4,56,7,8,9,7,5], 44));

//Exc 6

// const calculator = {
//     add: function(num1,num2){
//         return num1 + num2;
//     }, 
//     subtract: function(num1,num2){
//         return num1 - num2;
//     }  
// }

// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) 

//Exc 7
// const increaseByNameLength = function(money , name){
//     return money *= name.length;
// }

// const makeRegal = function (name) {
//     return `His Royal Highness, ${name}`
// }
// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


//Extension - Splice Challenge
let newArr = [];
let returnedArr = [];

const loopArr = function(arr,startPoint, endPoint){
    let returned = [];
    for(let i = startPoint; i < endPoint; i++){
        returned.push(arr[i]);
        arr[i] = "";
    }
    return {returened:returned,arr:arr}
}

Array.prototype.splice = function(start, deleteCount, ...arrToAdd){
    let startCutIndex;
    let endCutIndex;
    let looped;

    if(deleteCount == undefined|| deleteCount >=this.length - start  ){
        startCutIndex = start; 
        endCutIndex = this.length;
        looped = loopArr(this,startCutIndex,endCutIndex);
        console.log(`return array: ${looped.returened}`)
        console.log(`modified array: ${looped.arr}`)
        return looped.returened;

        // console.log(`array before change: ${this}`)
        // for(let i = startCutIndex; i < endCutIndex; i++){
        //     returnedArr.push(this[i]);
        //     this[i] = "";
        // }
        // console.log(`return array: ${returnedArr}`)
        // console.log(`modified array: ${this}`)
        // return returnedArr;



    }else if(deleteCount <= 0){
        if(!arrToAdd){
            return [];
        } else {

        }
    }
    if(start > this.length){
       start = this.length;
       this.push(...arrToAdd)
       return this;
       
    } else if(start < 0){
        if(this.length + start < 0){
            startCutIndex = 0;    
            endCutIndex = deleteCount;
        } else{
            startCutIndex = this.length + start;
            endCutIndex = startCutIndex  + deleteCount;
        }
        looped = loopArr(this,startCutIndex,endCutIndex);
        console.log(`return array: ${looped.returened}`)
        console.log(`modified array: ${looped.arr}`)        
        return looped.returened;

        //helper
        // console.log(`startCutIndex: ${startCutIndex} endCutIndex: ${endCutIndex}`)

        // for (let i = startCutIndex; i < endCutIndex; i++) {
        //     returnedArr.push(this[i]); 
        //     this[i] = null;
        // }
        // for(item of this){
        //     if(item != null){
        //         newArr.push(item);
        //     } else {

        //     }
        // }
        // this = this.filter(item => item);
        // console.log(this)
        // return returnedArr;
    }
}

let arr = [0,1,2,3,4,5,6,7,8,9,10];
// console.log(`Array Length: ${arr.length}`);
console.log(arr.splice(-7,7));
// console.log(arr);
// console.log(arr.splice(-5,3));
// console.log(arr.splice(5,0,11,12,13,15,46,87,59));
// arr.splice(9);

// console.log(arr);



    
