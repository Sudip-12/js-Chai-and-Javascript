// Immediately Invoked Function Expressions (IIFE)
// --> Function likhte hi turant hi execute krana hai aur global scope k pollution se bqachna haqi


(function chai(){
    // named IIIFE
    console.log(`DB CONNECTED`);
})();
// chai()
// (Fun definitin)(execution call) --> iife 

(() => {
    // unnamed iife
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED ${name}`);
})("Sudip");











































