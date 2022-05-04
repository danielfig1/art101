// Summary: Lab 9: JavaScript for the Web.
// Author: Daniel Figueroa.
// Date: 5/4/2022

// Identifies the div with the id "output" in my index.html.
var outputEl = document.getElementById("output");

// Changing the html attribute of new1El to say something new.
var new1El = document.createElement("p");
  new1El.innerHTML = "Something new!";

// Changing the html attribute of new2El to say something new.
var new2El = document.createElement("p")
  new2El.innerHTML = "Something newER!";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Changing the CSS atrributes of the elements on my page.
new1El.style.fontSize = "xx-large";
new2El.style.fontSize = "xx-large";
new1El.style.color = "white";
new2El.style.color = "white";
outputEl.style.border = "5px dotted yellow";
