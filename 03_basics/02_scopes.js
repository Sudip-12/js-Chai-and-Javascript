// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// scope {}
// var c = 300
// let a = 300;
// if (true) {
//     let a = 10
//     const b = 20
//     // var c = 30
//     console.log(a);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// Nested scope

function one(){
    const username= "Sudip"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "Sudip"
    if (username === "Sudip") {
        const website = "Youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++++++++ Interesting +++++++++++++++
// isme hum func def k pehele bhi call kr skte hai kyuki ye ek proper function declaration hai
addone(5)
function addone(num){
    return num + 1
}

// addtwo(5)
// is way me hum function ko declaration se pehele call nhi kr skte kyuki usse hum ek variable me store kr rhe hai also knwn as hoisting
const addtwo = function(num){
    return num + 2
}
addtwo(5)



















