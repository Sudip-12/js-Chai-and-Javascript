// Primitive (call by value - copy milta hai changes copy me hota hai)

// & categories : String, Number, Boolean, Null, undefined, Symbol, BigInt

// Js is statically typed or dynamically typed

// Non -Primitive(Call by reference - memory me direct refernce milta hai)

// Array, Objects, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// Symbol are used to uniquely define something
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)
console.log(id === anotherId)

// Non-Primitive

// arrays - []
const heros = ["shaktiman", "naagraj", "doga"]
//Objects = {}
{
    name: "Sudip",
    //age: 21,
}

// function

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof scorevalue);

// Type of non-primitives are always objects



































