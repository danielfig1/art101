// Summary: Lab 8: Anon Functions and Callbacks.
// Author: Daniel Figueroa.
// Date: 5/3/2022

// numberBiggifier(x) - Multiply x by itself.
function numberBiggifier(x){
    return (x * x);
}

// My array.
numeros = [3, 6, 7, 13]
console.log("My array is: ", numeros);

// Multiplies each number in array by itself.
var results = numeros.map(numberBiggifier);
console.log("Each number multiplied by itself equals: ", results);

// Multiplies each number in the array to the power of itself.
var results = numeros.map(function(x){
    return (x ** x);
})
console.log("Each number to the power of itself equals: ", results);
