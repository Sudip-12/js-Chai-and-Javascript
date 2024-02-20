const name = "Sudip"
const repoCount = 50

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

// const gameName = new String('Sudiphc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt('2'));
// console.log(gameName.indexOf('S'));

const gameName = new String('Sudip-sg-com')
const newString = gameName.substring(0,4) // start included but end value not included
// console.log(newString);

// const anotherString = gameName.slice(0,4)
const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newString1 = "         Sudip               "
console.log(newString1);
console.log(newString1.trim()); // trim removes the spaces from start and end

const url = "https://sudip.com/sudip%20ghosh"

url.replace('%20', '-')
console.log(url.replace('%20', '-'));

url.includes('sudip') // helps in finding if contains the string
console.log(url.includes('sudip'));

console.log(gameName.split('-')); // converts the string in array based on the input





