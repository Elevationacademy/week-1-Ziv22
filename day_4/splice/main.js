//Extension - Splice Challenge
let newArr = [];
let returnedArr = [];

const loopArr = function(arr,startPoint, endPoint){
    let returned = [];
    let newArr= [];
    for(let i = 0; i < arr.length; i++){
        if (i >= startPoint && i <= endPoint){
            returned.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return {returened:returned,arr:newArr}
}

Array.prototype.splice = function(start, deleteCount, ...arrToAdd){
    let startCutIndex;
    let endCutIndex;
    let looped;
    let main = this;
    if(deleteCount == undefined|| deleteCount >=this.length - start  ){

        startCutIndex = start; 
        endCutIndex = this.length;

        looped = loopArr(this,startCutIndex,endCutIndex);


        console.log(`return array: ${looped.returened}`)
        console.log(`modified array: ${looped.arr}`)
        this.length = 0; 
        main = looped.arr;

        return looped.returened;

    } else if(deleteCount <= 0){
        if(arrToAdd == 0){
            console.log("[]")
            return [];
        } else {
            let counter =0;
            for(let i = start; i < arrToAdd.length + start; i++){
                if(this[i]){
                    newArr.push(this[i]);
                }
                console.log(arrToAdd[counter])
                this[i] = arrToAdd[counter];
                counter++;
            }
            console.log(arrToAdd.length)
            console.log(newArr)
            return this;
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
    }
}

let arr = [0,1,2,3,4,5,6,7,8,9,10];
// console.log("arr.splice(5,0,55,66,77,88,99) - " + arr.splice(5,0,55,66,77,88,99));
// console.log(arr)
// arr = [0,1,2,3,4,5,6,7,8,9,10];
// console.log("arr.splice(-5,3) - " + arr.splice(-5,3));
// console.log(arr)
// arr = [0,1,2,3,4,5,6,7,8,9,10];
// console.log("arr.splice(12,3) - " + arr.splice(12,3));
// console.log(arr)
// arr = [0,1,2,3,4,5,6,7,8,9,10];
// console.log("arr.splice(12,-3) - " + arr.splice(12,-3));
// console.log(arr)
// arr = [0,1,2,3,4,5,6,7,8,9,10];
// console.log("arr.splice(12,3,13,14,15) - " + arr.splice(12,3,13,14,15));
// console.log(arr)

// console.log(loopArr(arr,2,6));


