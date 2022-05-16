// Summary: Lab 12: Conditionals.
// Author: Daniel Figueroa.
// Date: 5/17/2022

//methPurity() - Determines the user's meth-cooking ability based on their name and a calculation.
//It changes the properties of the div element with the ID "output".

function methPurity(str) {
  len = str.length;
  purity = len % 4;
  var output = document.getElementById("output");

  if (purity == 0) {
    output.innerHTML = "You went back to just being a regular citizen, uninterested in the criminal underground."
  }
  else if (purity == 1) {
    output.innerHTML =  "You're meth is mediocre and is no competition for Heisenberg's Sky Blue."
  }
  else if (purity == 2) {
    output.innerHTML =  "You're working alongside the best meth cooks in the game, and the cartel recognizes your talent. Million of dollars await you."
  }
  else if (purity == 3) {
    output.innerHTML =  "You're good. Maybe a little TOO good. Be careful, your cook partner might end up seeing you as competition."
  }
}

var button = document.getElementById('my-button');
button.addEventListener('click', function() {
    var name = document.getElementById("input").value;
    var methSkills = methPurity(name)
});
