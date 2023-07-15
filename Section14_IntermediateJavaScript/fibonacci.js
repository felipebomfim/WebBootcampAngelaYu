function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:

  let fibArr = [];

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      fibArr.push(i);
    } else {
      fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
  }


  return fibArr;





  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(7));
