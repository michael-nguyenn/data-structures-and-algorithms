////// RECURSIVE CATEGORY: REPEATEDLY EXECUTE

// The last line of code in this category is often a simple, single call to the function again.
// In this case is countdown(number-1)
function countdown(number: number): void {
  console.log(number);

  if (number === 0) return;
  else countdown(number - 1);
}

// countdown(10);

/////// Recursive Trick: Passing Extra Parameters

// Write an algorithm that takes an array of numbers and doubles each of the numbers within the array.
// Do in place modifications

function doubleArray(array: number[], index: number = 0) {
  if (index >= array.length) {
    return;
  }
  array[index] *= 2;
  doubleArray(array, (index += 1));
}

// const array11 = [1, 2, 3, 4];

// doubleArray(array11);

// console.log(array11);

//////////////////////////// RECURSIVE CATEGORY: CALCULATIONS

// Performing a calculation based on a subproblem
// Think of a function that returns the sum of two numbers, or a function that finds the greatest value within an array.
// These functions receive some sort of input, and return the result of calculations involving that input

// A subproblem is a version of the very same problem applied to a smaller input

////// Top-Down Recursion: A New Way of Thinking

// 1. Imagine the function you're writing has already been implemented by someone else
// 2. Identify the subproblem of the problem
// 3. See what happens when you call the function on the subproblem and go from there.

//////////////// Array Sum
// Write a function that will return the sum of all the numbers in a given array.

// array = [1, 2, 3, 4, 5]; Should return 15

// Imagining the function already exists, we identify the subproblem as [2,3,4,5]
// That means sum[2,3,4,5] should yield 14
// Now to finish the function you have to add 1 to it
// Add 1 to the result of sum[2,3,4,5]

// return array[0] + sum(the remainder of the array)

const sum = (array: number[]): number => {
  return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
};

sum([1, 2, 3, 4]);

/*
1. sum(1st) gets called, our array is [1,2,3,4], array[0] = 1 gets added to sum([2,3,4])
   gets added to the call stack

2. sum(2nd) gets called, our array is [2,3,4], array[0] = 2 gets added to sum([3,4])
   gets added to the call stack

3. sum(3rd) gets called, our array is [3,4], array[0] = 3 gets added to sum([4])
   gets added to the call stack

4. sum(4th) gets called, our array is [4], array[0] = 4 gets added to sum([])
   gets added to the call stack

5. sum(5th) gets called, our array is [], array.length is 0, so we return 0

6. 1+2+3+4 = 15

*/

/* 
sum([1,2,3])
-> 1 + sum([2,3])
-> 1 + 2 + sum([3])
-> 1 + 2 + 3 + sum([])
-> 1 + 2 + 3 + 0
-> 6
*/

//////// String Reversal
// Reversing a string => "abcde" becomes "edcba"

// Identifying the subproblem = "bcde" by trying the next-to-smallest version of the problem
// If the function is already implemented we assume "bcde" is already reversed
// Our last step would be adding "a" to the end of "edcb"

const reverse = (word: string): any => {
  if (!word.length) return word;

  return reverse(word.slice(1)) + word[0];
};

console.log(reverse("abc"));

/*
reverse("abc")
reverse(1st) - We begin our function with adding "a" to the end of reverse("bc"), before it's finished
reverse(2nd) - Our string is now "bc" and we take word[0] aka b and add it to reverse("c"), before it's finished
reverse(3rd) - Our string is now "c", we take word[0] aka c and add it to reverse(""), before it's finished
reverse(4th) - Our string is now "" and enter our base case, returning the word
reverse(4th) - reverse(3rd) - reverse(2nd) - reverse(1st) complete in that order
"" + "c" + "b" + "a" = "cba"
*/
