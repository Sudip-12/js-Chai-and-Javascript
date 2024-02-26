// for each
// callback function = no name function
const coding = ["js", "ruby", "py", "java", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js",
    },
    {
        languageName: "Java",
        languageFileName: "Java",
    },
    {
        languageName: "Cpp",
        languageFileName: "C++",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})