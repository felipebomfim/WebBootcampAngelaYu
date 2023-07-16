// import generateName from "sillyname";
import generateName from "sillyname"; // o mesmo que const sillyname = require("sillyname");
import * as superheroes from "superheroes";

let randomName = generateName();

console.log("My name is " + randomName + ".");

console.log("I am " + superheroes.random() + "!")