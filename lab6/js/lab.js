// Summary: Lab 6: Arrays and Objects.
// Author: Daniel Figueroa.
// Date: 4/26/2022

// Define the variables.
myTransport = ["Bike", "Car", "Bus"];

myMainRide = {
    make: 'Dodge',
    model: 'Hellcat',
    color: 'Black',
    year: '2016',
    age: function () {
        return 2022-year;
    }
}

//Output.
document.writeln("Kinds of transportation I use: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
