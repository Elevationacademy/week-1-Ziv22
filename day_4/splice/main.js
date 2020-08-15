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
    
    if(deleteCount == undefined|| deleteCount >=this.length - start  ){
        startCutIndex = start; 
        endCutIndex = this.length;
        looped = loopArr(this,startCutIndex,endCutIndex);
        return looped.returened;

    } else if(deleteCount <= 0){
        if(arrToAdd == 0){
            return [];
        } else {
            let counter = 0;

            for(let i = start; i < arrToAdd.length + start; i++){
                if(this[i]){
                    newArr.push(this[i]);
                }
                this[i] = arrToAdd[counter];
                counter++;
            }
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
        return looped.returened;
    }
}

// remove 1 element
let arr = [1,2,3]
arr.splice(0,1); 
console.log(arr); //should be [2,3]


// add 1 element
arr = [1,2,3]
arr.splice(0,0,0); 
console.log(arr); //should be [0,1,2,3]


// replace 1 element
arr = [1,2,3]
arr.splice(1,1,55); 
console.log(arr); //should be [1,55,3] 


// delete all elements from index to end
arr = [1,2,3,4,5]
arr.splice(1); 
console.log(arr); //should be [1] 


// returns array of deleted elements
arr = [1,2,3]
let deleted = arr.splice(1); 
console.log(deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = arr.splice(1,1); 
console.log(deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = arr.splice(1,0,5); 
console.log(deleted); //should be [] 