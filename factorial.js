// normal factorial

// var factorial = 1;

// for (var i = 1; i <= 7; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);



// get factorial using function and for loop

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let myNumber = 7;
var result = getFactorial(myNumber);
console.log(result);




// get factorial using function and for loop with decrease loop variable

function getFactorial2(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;

}
let herNumber = 5;
var result = getFactorial(herNumber);
console.log(result);




// get factorial using function and while loop

function getFactorial3(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
let numberOfAmena = 7;
var result = getFactorial(numberOfAmena);
console.log('Her number is', result);




// get factorial using function and while loop with decrease loop variable
function getFactorial4(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
let numberOfManik = 4;
var result = getFactorial4(numberOfManik);
console.log('His number is', result);
