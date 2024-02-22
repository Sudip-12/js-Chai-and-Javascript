const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // array inside a array
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros) // same as push
// const all_heros = marvel_heros.concat(dc_heros) // concat basically merges two arrays and stores it in a new array
// console.log(all_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6], 7,[6,7], [4,5]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Sudip"));
// console.log(Array.from("Sudip")); // converts into array
// console.log(Array.from({name :"Sudip"})); // imp

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3)); // converts into array

// from or .of = same work











