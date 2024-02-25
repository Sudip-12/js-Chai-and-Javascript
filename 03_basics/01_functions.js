// console.log("S");
// console.log("U");
// console.log("D");
// console.log("I");
// console.log("P");

// function sayMyName() {
//     console.log("S");
//     console.log("U");
//     console.log("D");
//     console.log("I");
//     console.log("P");
//     }
    
// sayMyName()

// function addTwoNumbers(number1, number2 /* Parameters */) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4 /* Arguments */)
// const result = addTwoNumbers(3,5)
// console.log(result);

// function addTwoNumbers(number1, number2 /* Parameters */) {
//     let result = number1 + number2
//     return result
//     console.log("Sudip"); // Nothing is executed after return
// }

// const result = addTwoNumbers(3,5)
// console.log(result);

// function addTwoNumbers(number1, number2 /* Parameters */) {
//     return number1 + number2
// }

// const result = addTwoNumbers(3,5)
// console.log(result);

// function loginUserMessage(username) {
//     return `${username} just logged in `
// }

// console.log(loginUserMessage("Sudip"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("Sudip"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());



























