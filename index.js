// Wednesday: Factorialize!
// Factorialize a Number
// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Example Outputs:
// factorialize(0) should return 1.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.

//Pseudocode
// 1. Create a function with n as ParameterDecorator;
// 2. Check if n = 0 or n = 1, the factorial will return 1;
// 3. Create for loop;
// 4. Decrement i after each iteration in the for loop;
// 5. Store the value of n at each iteration;
// 6. Return n from the function;
// 7. Call the function with the necessary argument inside console.log.

function factorialize(n) {
  if (n === 0 || n === 1) return 1;
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}
console.log(factorialize(0));
console.log(factorialize(10));
console.log(factorialize(20));
