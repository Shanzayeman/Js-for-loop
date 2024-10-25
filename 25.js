
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo1").innerHTML = text; 

// LOOP FOr 2

let text1 = "";

for (let i = 0; i < 5; i++) {
  text1 += "The number is " + i + "<br>";
}

document.getElementById("demo2").innerHTML = text1;

// Loop 3
const cars1 = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text2;
for (i = 0, len = cars1.length, text2 = ""; i < len; i++) {
  text2 += cars1[i] + "<br>";
}
document.getElementById("demo3").innerHTML = text2;
