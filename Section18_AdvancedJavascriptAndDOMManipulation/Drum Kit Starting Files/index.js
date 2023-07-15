// alert("Hi!");

let buttons = document.querySelectorAll(".drum")
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",
    function () {
      buttonPressed = this.textContent;
      let drumElement = '';
      console.log("Button pressed: ", buttonPressed);

      handleButtonPressed(buttonPressed);

    });

}

document.addEventListener("keydown", (event) => {
  let keyDown = event.key;
  console.log("Key pressed: ", keyDown);
  handleButtonPressed(keyDown);

});


function handleButtonPressed(buttonPressed) {
  switch (buttonPressed) {
    case 'w':
      drumElement = "tom-1";
      break;
    case 'a':
      drumElement = "tom-2";
      break;
    case 's':
      drumElement = "tom-3";
      break;
    case 'd':
      drumElement = "tom-4";
      break;
    case 'j':
      drumElement = "snare";
      break;
    case 'k':
      drumElement = "crash";
      break;
    case 'l':
      drumElement = "kick-bass";
      break;
    default:
      return;
  }

  let file = "./sounds/" + drumElement + ".mp3";
  let audio = new Audio(file);
  audio.play();

  document.querySelector("." + buttonPressed).classList.add("pressed");

  setTimeout(() => {
    document.querySelector("." + buttonPressed).classList.remove("pressed");
  }, 100)
}

// let numButtons = document.querySelectorAll(".drum").length;

// for (let i = 0; i < numButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click",
//     function () {
//       let audio = new Audio("./sounds/tom-1.mp3");
//       audio.play();
//       console.log(this);
//     });
// }