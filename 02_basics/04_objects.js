// const tinderUser = new Object() --> Singleton Object

// console.log(tinderUser);

// or

// const tinderUser = {} --> Non singleton object
// console.log(tinderUser);

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sudip"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// Nested Objects
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sudip",
            lastName: "Ghosh"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

// Merge Objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({},obj1, obj2) --> if we dont use {} all values will be go to obj1 with the help of {} we can assure that it is our target rest the obj1,2,3 are our sorce
// console.log(obj3);
// const obj3 = {...obj1, ...obj2} // also used for merging same as arrays
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "sudip@gmail.com"
    },
    {
        id: 1,
        email: "sudip@gmail.com"
    },
    {
        id: 1,
        email: "sudip@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // converts all into arrays
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // hasOwnProperty is useful to check if particular key is present in my object














