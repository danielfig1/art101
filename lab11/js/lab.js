// Summary: Lab 11: Libraries and jQuery.
// Author: Daniel Figueroa.
// Date: 5/12/2022

$("#summary").append("<button id='summary-button'>Summary</button>");

$("#problems").append("<button id='problems-button'>Problems</button>");

$("#results").append("<button id= 'results-button'>Results</button>");


$("#summary-button").click(function(){
  $("#summary").toggleClass("special");
});

$("#problems-button").click(function(){
  $("#problems").toggleClass("special");
});

$("#results-button").click(function(){
  $("#results").toggleClass("special");
});
