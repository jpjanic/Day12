// Only change code below this line
function sumFibonacci(num) {
  if (num <= 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  var sum = 1;

  function fibonacci(var1, var2) {
    if (var2 <= num) {
      if (var2 % 2 !== 0) {
        sum += var2;
      }
      return fibonacci(var2, var2 + var1);
    }
  }
  fibonacci(1, 1);

  return sum;
}
// Only change code above this line
console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
