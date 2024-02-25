// singleton -> created from constructor
// object.Create()
// Object Literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Sudip",
    // mySym: "myKey1", // to just refer the key but if we want to refer it as a symbol keyword we need to define it as 
    [mySym]: "myKey1",
    age: 21,
    location: "Kolkata",
    email: "sudipghosh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.age);
// console.log(jsUser["age"]);
// console.log(typeof jsUser.mySym);
// console.log(jsUser.mySym);
// console.log(jsUser["mySym"]);

// jsUser.email = "Sudip@bdhdbh.com" // Change the value of an object
// console.log(jsUser.email);
// Object.freeze(jsUser) // It will freeze the values of the object doesnt gives error if tried to change but doesn's change the value
// jsUser.email = "Sudip@hello.com"
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello User");
// }

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());

jsUser.greetingtwo = function(){
    console.log(`Hello User, ${this.name}`);
}
// console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());