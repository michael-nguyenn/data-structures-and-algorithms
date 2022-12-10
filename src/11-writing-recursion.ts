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

function doubleArrayLoop(array: number[]) {
  let index = 0;

  while (index < array.length) {
    array[index] *= 2;
    index += 1;
  }
}

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

sum([1, 2, 3, 4, 5]);

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

reverse("abcdefg");

/*
reverse("abc")
-> reverse(1st) - We begin our function with adding "a" to the end of reverse("bc"), before it's finished
-> reverse(2nd) - Our string is now "bc" and we take word[0] aka b and add it to reverse("c"), before it's finished
-> reverse(3rd) - Our string is now "c", we take word[0] aka c and add it to reverse(""), before it's finished
-> reverse(4th) - Our string is now "" and enter our base case, returning the word
-> reverse(4th) - reverse(3rd) - reverse(2nd) - reverse(1st) complete in that order
-> "" + "c" + "b" + "a" = "cba"
*/

////////////// Counting X

// A function that returns the number of "x's" in a given string. Example input is "axbxcxd" and will return 3

// Subproblem will be "xbxcxd"
// Imagining our problem is already finished, we will simply add 1 if our char is "x", in this case not

const countX = (word: string): any => {
  if (!word.length) return 0;

  if (word[0] === "x") {
    return 1 + countX(word.slice(1));
  } else {
    return countX(word.slice(1));
  }
};

// console.log(countX("axbxcxd"));

//////// THE STAIRCASE PROBLEM

// Let's say we have a staircase of N steps, and a person has the ability to climb one, two, or three steps at a time.
// How many different possible "paths" can someone take to reach the top?

// We can conclude that since the max jump someone can make it three steps
// numberOfPaths(n-1) + numberOfPaths(n-2) + numberOfPaths(n-3)

// To determine the base case
// We know that we want numberOfPaths(1) to equal 1 => return 1 if n === 1;
// We want numberOfPaths(2) and can take advantage that numberOfPaths(2) will compute as
// numberOfPaths(1) + numberOfPaths(0) + numberOfPaths(-1)
// Since (1) returns 1, if we make (0) return 1 and (-1) return 0, we end up with 2

// The full function will look like...

const numberOfPaths = (steps: number): any => {
  if (steps < 0) return 0;
  if (steps === 0 || steps === 1) return 1;

  return (
    numberOfPaths(steps - 1) +
    numberOfPaths(steps - 2) +
    numberOfPaths(steps - 3)
  );
};

// console.log(numberOfPaths(5));

////////////// ANAGRAM GENERATION

// Write a function that returns an array of all anagrams of a given string. An anagram is a reordering of
// all the characters within a string.

const anagramCalculator = (word: string) => {
  if (word.length === 1) return word[0];

  let collection: string[] = [];
  let substringAnagrams = anagramCalculator(word.slice(1));

  for (const substringAnagram of substringAnagrams) {
    for (let i = 0; i <= substringAnagram.length; i++) {
      let copy = substringAnagram.slice();

      collection.push(copy.slice(0, i) + word[0] + copy.slice(i));
    }
  }
  return collection;
};

const allAnagrams = anagramCalculator("abcd");

/* 1. We start by creating an empty array in which we'll collect the entire collection of anagrams

  2. Next we grab the array of all anagrams from the substring of our string. This substring is the
subproblem string, namely, from the second character until the end. For example if the string is "hello"
the substring is "ello"
=> let substringAnagrams = anagramCalculator(word.slice(1))

  3. Then we iterate over substringAnagrams

  4. Within each substring of subStringAnagrams, we iterate through all the indexes, make a copy of the substring
  anagram, and insert the first character of our string (the only character not contained within the substring) into that index.
  Each time we do this, we have created a new anagram, which we then add to our collection

  5. Finally once we return the collection, our base case is where the substring contains only on character, 
  in which case there's only one anagram - the character itself

*/

//////////////////// EXERCISES

// 1. Write a function that accepts an array of strings and returns the total number of characters across all the strings
// For example, input = ["ab","c","def", "ghij"], the output = 10

const charCounter = (array: string[]): any => {
  if (array.length === 0) return 0;

  return array[0].length + charCounter(array.slice(1));
};

// console.log(charCounter(["ab", "c", "def", "ghij"]));

// 2. Write a function that accepts an array of numbers and returns a new array containing just the
// even numbers
// input = [1,2,3,4,5,6,7,8,9,10] output = [2,4,6,8,10]

const evenCounter = (array: number[]): any => {
  if (array.length === 0) return [];

  if (array[0] % 2 === 0) {
    return array[0] + evenCounter(array.slice(1));
  } else {
    return evenCounter(array.slice(1));
  }
};

// console.log(evenCounter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 3. Write a function to calculate the numerical sequence known as the "Triangle Numbers".
// Pattern is by incrementing number by 1 for N numbers
// 1,3,6,10,15,21,28

const triangleNumber = (num: number): any => {
  if (num === 1) return 1;

  return num + triangleNumber(num - 1);
};

// console.log(triangleNumber(2));

// 4. Write a function that accepts a string and returns the first index that contains the character "x"
// input ="abcdefghijklmnopqrstuvwxyz" output = index 23

const indexOfX = (word: string, index: number = 0): any => {
  if (word[0] === "x") return index;
  if (word.length === 0) return "you don't have an x in there";

  return indexOfX(word.slice(1), index + 1);
};

// console.log(indexOfX("abcdefghijklmnopqrstuvwxyz"));
