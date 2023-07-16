/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";
// var qr = require("qr-image");


inquirer.prompt([
  {
    name: "url",
    type: "input",
    message: "What is the url?"
  }
]).then((answers) => {
  console.log(answers.url);
  let qr_png = qr.image(answers.url, { type: "png" });
  qr_png.pipe(fs.createWriteStream("url_qr_code.png"));

  fs.writeFile("userURL.txt", answers.url, (err) => { if (err) throw err; })
}).catch((error) => {
  if (error)
    throw error;
});