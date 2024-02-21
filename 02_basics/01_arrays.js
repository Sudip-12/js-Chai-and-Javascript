// Arrays

const myArr = [0,1,2,3,4,5]
// const myHeros = ["shaktiman", "naagraj"]
// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[3]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // pops the last element out

// myArr.unshift(9) // adds the number at the start of the array (1 element)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join() // converts the arrays into strings

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice , splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3) // doesnt include the last range and also doesnt change in original array
console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1,3) // includes the last element as well and changes directly the original array
                                //i.e it directly slices / removes the given elements from the original array
console.log("C", myArr);
console.log(myn2);
console.log(myArr)


