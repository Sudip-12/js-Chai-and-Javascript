const user = {
    username: "Sudip",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Afrin"
// user.welcomeMessage()
// console.log(this);

// this keyword is not valid for functions it gives undefined as output

// function chai(){
//     let username = "sudip"
//     // console.log(this);
//     console.log(this.username);
// }
// chai()

// Arrow functions
// const chai = () => {
//     let username = "sudip"
//         console.log(this);
// }
// chai()
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo);

// Implecit return no need to write return keyword it automatically asumes
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(5,6));

// Implecit defining of an object
const addTwo = (num1, num2) => ({username: "Sudip"})
console.log(addTwo());























