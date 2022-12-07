///////////// Page: 46 - Loop versus Recursion /////////////////////////////////////////

// Function that takes a number and counts down

// Using a Loop
const countdownLoop = (start: number): void => {
  for (let i = start; i >= 0; i--) {
    console.log(`Counting down: ${i}`);
  }
};

// countdownLoop(10);

// Using Recursion
function countdownRecursion(num: number): void {
  console.log(num);

  // The Base Case
  if (num === 0) {
    return;
  } else {
    countdownRecursion(num - 1);
  }
}

// countdownRecursion(10);

///////////// Page: 46 - Reading Recursion /////////////////////////////////////////

// Function that calculates the factorial of that number

const factorial = (num: number): number => {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

let factorialResult = factorial(3);
// console.log(factorialResult);

// 1. Base case : if (num === 1) return 1 => This is the case in which the function will not call itself
// 2. If we call factorial(1), the method simply returns 1
// 3. "next-to-last" case is factorial(2)
// 4. factorial(2) will return 2 * factorial(1), we need to know what factorial(1) returns => 2 * 1
// 5. factorial(3) will return 3 * factorial(3-1) => 3 * 2
// 5. factorial(4) will return 4 * factorial(4-1) => 4 * 6

/* 
factorial(4) returns 24
factorial(3) return 6
factorial(2) returns 2
factorial(2) returns 1
*/

///////////// EXERCISES /////////////////////////////////////////

// Write a recursive function that prints all the numbers of a rested arrays

const array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10, 11, [12, 13, 14]]]];

const printAllItems = (array: any[]): void => {
  for (const value of array) {
    if (typeof value === "object") {
      printAllItems(value);
    } else {
      console.log(value);
    }
  }
};

/*
1. We start by looping through our array, mixed with numbers and nested arrays
2. In the loop, if our element is of type object, we call our printAllItems function again on that
element, aka the array.
3. Otherwise, if our element is of type number, we simply print it out
*/
