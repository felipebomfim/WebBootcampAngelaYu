function fizzBuzz() {
  el = "";
  if (!(i % 3 === 0) && !(i % 5 === 0)) {
    el = i;
  } else {
    if (i % 3 === 0) {
      el += "Fizz";
    }
    if (i % 5 === 0) {
      el += "Buzz";
    }
  }
  output.push(el);
  i++;
  return output;
}