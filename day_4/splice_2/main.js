const remover = function(arr, start, deleteCount, newArr, toRemove, items){
    for(let i = 0; i < arr.length; i++){
        if(i<start){
            newArr.push(arr[i]);
            continue;
        } else if(  i < start + deleteCount){
            if(items){
                toRemove.push(arr[i]);
                newArr.push(...items);
                continue;
            } else{ 
                toRemove.push(arr[i])
                continue;
            }
        }else
        newArr.push(arr[i])
    }
    return {'toRemove':toRemove,'newArr':newArr};
}

const splice = function(arr,start,deleteCount, ...items){
    let toRemove = []; 
    let toAdd = []; 
    let newArr = [];
    
    //=============
    // START PART
    //=============
    if(start > arr.length){
        start = arr.length;
        arr.push(...items)
        return arr;
    }
    if(start < 0){
        if(arr.length + start > 0){
            start = arr.length + start;
        } else{
            start = 0;
        }
        return (remover(arr,start,deleteCount,newArr, toRemove,items))
    }
    //===================
    // DELETE COUNT PART
    //===================
    if(deleteCount == undefined|| deleteCount >= arr.length - start){
        deleteCount = arr.length;
        return remover(arr, start, deleteCount, newArr, toRemove, items);
    } 
    else if(deleteCount <= 0){
        if(items == undefined){
            return [];
        } else {
            toAdd = items;
            for(let i = 0; i < arr.length; i++){
                if(i<start){
                    newArr.push(arr[i]);
                    continue;
                } else if(i == start){
                    newArr.push(...toAdd); 
                    newArr.push(arr[i]);
                    continue;
                }
                newArr.push(arr[i])
            }
            arr.length = 0;
            arr = newArr;  
            return {'toRemove':toRemove,'newArr':newArr};
        }
    } else {
        return (remover(arr,start,deleteCount,newArr, toRemove,items))
    }
}

array = [1,2,3]
let spliced = splice(array,1);
console.log(spliced)
console.log(`Removed:${spliced.toRemove}\nRemained:${spliced.newArr}`)



// // remove 1 element
// let arr = [1,2,3]
// splice(arr, 0,1); 
// console.log(arr); //should be [2,3]


// // add 1 element
// arr = [1,2,3]
// splice(arr, 0,0,0); 
// console.log(arr); //should be [0,1,2,3]


// // add 2 elements
// arr = [1,2,3]
// splice(arr,0,0,-1,0); 
// console.log(arr); //should be [-1,0,1,2,3]


// // replace 1 element
// arr = [1,2,3]
// splice(arr,1,1,55); 
// console.log(arr); //should be [1,55,3] 

// // delete all elements from index to end
// arr = [1,2,3,4,5]
// splice(arr,1); 
// console.log(arr); //should be [1] 

// // returns array of deleted elements
// arr = [1,2,3]
// let deleted = splice(arr,1); 
// console.log(deleted); //should be [2,3] 

// // returns an array of the deleted element (1 element)
// arr = [1,2,3]
// deleted = splice(arr,1,1); 
// console.log(deleted); //should be [2] 


// // returns an empty array when no elements are deleted
// arr = [1,2,3]
// deleted = splice(arr,1,0,5); 
// console.log(deleted); //should be [] 