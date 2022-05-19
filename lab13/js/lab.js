// Summary: Lab 12: Conditionals.
// Author: Daniel Figueroa.
// Date: 5/18/2022

//fizzBuzz() - Finds any number between 1 and 200 that is a multiple of 3,5, and/or 7 and replaces it with
//any combination of "Fizz", "Buzz", or "Boom".

function fizzBuzz() {
  for (i=1; i <= 200; i++)
    if (i%105==0) {
      str = "FizzBuzzBoom!"
      $("#output").append("<p>" + str + "</p>");
    } else if (i%35 == 0) {
        str = "BuzzBoom!";
        $("#output").append("<p>" + str + "</p>");
    } else if (i%21 == 0) {
        str = "FizzBoom!";
        $("#output").append("<p>" + str + "</p>");
    } else if (i%15 == 0) {
        str = "FizzBuzz!";
        $("#output").append("<p>" + str + "</p>");
    } else if (i%3 == 0) {
        str = "Fizz";
        $("#output").append("<p>" + str + "</p>");
    } else if (i%5 == 0) {
        str = "Buzz";
        $("#output").append("<p>" + str + "</p>");
    } else if (i%7 == 0) {
        str = "Boom";
        $("#output").append("<p>" + str + "</p>");
    } else {
        $("#output").append("<p>" + i + "</p>");
    }
}

var button = document.getElementById('my-button');
button.addEventListener('click', function() {
  fizzBuzz()
});
