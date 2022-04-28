// Summary: Lab 7: Functions.
// Author: Daniel Figueroa.
// Date: 4/28/2022

//userNameShuffle() - Randomly sort the letters in a string.
function userNameShuffle() {
  //Get user input.
  var userName = window.prompt();
  //Sort the letters by splitting, sorting, and joining the letters again.
  var sortedLetters = userName.toLowerCase().split("").sort().join("");
  //Return the sorted name.
  return sortedLetters;
}

  document.writeln("And now your name is more 'unique'!: ",
    userNameShuffle(), "</br>")
