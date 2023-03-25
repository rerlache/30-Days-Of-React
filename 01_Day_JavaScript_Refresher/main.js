import countries from "./countries.js";
import webTechs from "./web_techs.js";

console.log(countries);
console.log(webTechs);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let allWords = text.split(" ");
let words = [];
allWords.forEach((word) => {
  word = word.replace(".", "");
  word = word.replace(",", "");
  words.push(word);
});
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (!shoppingCart.includes("Meat")) {
  shoppingCart.reverse();
  shoppingCart.push("Meat");
  shoppingCart.reverse();
}
console.log(shoppingCart);
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);
let allergic = true;
if (allergic) {
  shoppingCart.forEach((item) => {
    if (item == "Honey") {
      shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
    }
  });
}
console.log(shoppingCart);
shoppingCart.forEach((item) => {
  if (item == "Tea") {
    shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
  }
});
console.log(shoppingCart);
/*
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
*/

let ethIndex = countries.indexOf("Ethiopia");
if (ethIndex != -1) {
  console.log(countries[ethIndex].toUpperCase());
} else {
  countries.push("Ethiopia");
}

let sassIndex = webTechs.indexOf("Sass");
if (sassIndex != -1) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = Array().concat(frontEnd, backEnd);
console.log(fullStack);

let outputText = "";
let ageInput = 0;
do {
  if (ageInput <= 0) {
    outputText = "Enter your age, <b>DUMBASS</b>!";
    ageInput = prompt("Enter your Age");
  }
  if (ageInput > 0) {
    outputText = "Your are <b>" + ageInput + "</b> years old!";
  }
  console.log(ageInput);
  console.log(outputText);
} while (ageInput <= 0);
document.getElementById("ageOutput").innerHTML = outputText;
