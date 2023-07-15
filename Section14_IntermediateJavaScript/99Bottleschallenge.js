function beerOnTheWall() {
  let counter = 99;
  let remainingBottles = 99;
  while (counter > 0) {
    remainingBottles = !(counter - 1 === 0) ? (counter - 1) : "no more";
    console.log(counter + " bottles of beer on the wall, " + counter + " bottles of beer. Take 1 down, pass it around, " + remainingBottles + " bottles of beer in the wall.")
    counter--;
  }
  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")

}