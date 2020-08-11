let boughtTesla = false
const yearOfTeslaPurchase = 2008
let isUSCitizen = false
let currentYear = 2018



if(boughtTesla && isUSCitizen){
    if(currentYear - yearOfTeslaPurchase > 4){
        console.log("Would you like to buy a new one?");
    }
    else{
        console.log("Are you stisfied with the car?");
    }
} else if(boughtTesla){
    console.log("Would you like to move to the US?");
} else{
    console.log("Are you intersted in buying a tesla?");
}   