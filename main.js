// First letter of the name



function firstLetterName(name) {
    alert("The first letter of your name is \"" + name.charAt(0) + "\". Sorry I lied about the candy...");
}




//Dividing by two

function divisibleByTwo(number){
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}


// The largest number in an array

const arr = [3, 34, 1001, 2, 3, 87, 21, 190, 248];

function largestNumber(array) {
    let biggest = 0;
    for(let i = 0; i < array.length; i++ ) {
        if (biggest < array[i]) {
            biggest = array[i];
        }
    }
    return biggest;
}


//calling the funcitons
let yourName = prompt("Please enter your first name. I will give you a candy.");
firstLetterName(yourName);

let inputNumber = prompt("Please insert a number here... Check the console log after...");
console.log(divisibleByTwo(inputNumber));

console.log(largestNumber(arr));