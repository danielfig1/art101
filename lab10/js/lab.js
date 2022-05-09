// Summary: Lab 10: JavaScript Events and Forms.
// Author: Daniel Figueroa.
// Date: 5/10/2022

//Variable "button" is now set to the element with the ID "my-button".
var button = document.getElementById('my-button');

//userNameShuffle() - Randomly sort the letters in a string.
function userNameShuffle() {
  //Retrieves value from the element with the ID "user-name".
  var userName = document.getElementById("user-name").value;
  //Sort the letters by splitting, sorting, and joining the letters again.
  var sortedLetters = userName.split("").sort().join("");
  //Return the sorted name.
  return sortedLetters;
}


button.addEventListener('click', function() {
    var output = document.getElementById("output");
    output.innerText = userNameShuffle();
});
