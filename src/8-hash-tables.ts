// CHAPTER 8: HASH TABLES

///////////// Page: 41 - ARRAY SUBSET /////////////////////////////////////////
// Determining if one array is a subset of another array

let arrayA = ["a", "b", "c", "d", "e", "f"];
let arrayB = ["b", "d", "f"];
let arrayC = ["b", "d", "f", "h"];

// First approach would be using nested loops
const isSubset = (arr1: string[], arr2: string[]): boolean => {
  let largerArray: string[], smallerArray: string[];

  // Determining which array is smaller
  if (arr1.length > arr2.length) {
    largerArray = arr1;
    smallerArray = arr2;
  } else {
    largerArray = arr2;
    smallerArray = arr1;
  }

  // Iterate through smaller array
  for (let i = 0; i < smallerArray.length; i++) {
    //Assume temp that the current value from smaller array is not found in larger array;
    let foundMatch = false;

    //For each value in smaller array, iterate through larger array
    for (let j = 0; j < largerArray.length; j++) {
      // If the two values are equal, it means the current value in smaller array is present in the larger array;
      if (smallerArray[i] === largerArray[j]) {
        foundMatch = true;
        break;
      }
    }

    // If current value in smaller array doesn't exist in larger array, return false;
    if (foundMatch === false) return false;
  }

  // Making it to the end means that all values from smaller array are present in larger;
  return true;
};

const answer = isSubset(arrayA, arrayB);

// Second Approach using a hash table

const isSubsetHashed = (arr1: string[], arr2: string[]): boolean => {
  let largerArray: string[], smallerArray: string[];
  let hashTable: Record<string, boolean> = {};

  // Determining which array is smaller
  if (arr1.length > arr2.length) {
    largerArray = arr1;
    smallerArray = arr2;
  } else {
    largerArray = arr2;
    smallerArray = arr1;
  }

  // Storing the value of the larger array in a hash table
  for (const value of largerArray) {
    hashTable[value] = true;
  }

  // Second loop through smaller array
  for (const value of smallerArray) {
    // If value of smallerArray does not exist in value of hashTable
    if (!hashTable[value]) return false;
  }

  return true;
};

const answerHash = isSubsetHashed(arrayA, arrayC);

///////////////////////////////////////////////////////////////

/// EXERCISES

// 1.
/* Write a function that returns the intersection of two arrays. The intersection is a third array
that contains all values contained within the first two arrays.
*/

let numberOneArray = [1, 2, 3, 4, 5];
let numberTwoArray = [0, 2, 4, 6, 8];

const intersection = (arr1: number[], arr2: number[]): number[] => {
  let longerArray: number[],
    shorterArray: number[],
    intersectionArray: number[] = [];
  let hashTable: Record<number, boolean> = {};

  // Determining longer array
  if (arr1.length >= arr2.length) {
    longerArray = arr1;
    shorterArray = arr2;
  } else {
    longerArray = arr2;
    shorterArray = arr1;
  }

  // Creating Hash Table
  for (const number of longerArray) {
    hashTable[number] = true;
  }

  // Looping through the smaller
  for (const number of shorterArray) {
    // If number exists in hash table, then we push it into a new array
    if (hashTable[number]) intersectionArray.push(number);
  }

  return intersectionArray;
};

const intersectionArray = intersection(numberOneArray, numberTwoArray);

// 2.
// Write a function that accepts an array of strings and returns the first duplicate value it finds

let duplicateArray = ["a", "b", "c", "d", "c", "e", "f"];

const firstDuplicate = (array: string[]): string => {
  let hashMap: Record<string, number> = {};

  // Creating Hash Map. If the key already exists, then we return the letter
  for (const letter of array) {
    if (hashMap[letter]) {
      return letter;
    } else {
      // Creating the Hash Map, and equalling each key to an arbitrary number
      hashMap[letter] = 1;
    }
  }
  return "This array has no duplicates!";
};

const firstDuplicateLetter = firstDuplicate(duplicateArray);

// 3.
// Write a function that accepts a string that contains all the letters of the alphabet except one and return the missing letter.

let alphabetString = "the quick brown box jumps over a lazy dog";

const missingAlphabet = (phrase: string): string => {
  //prettier-ignore
  let alphabet = ["a", "b", "c", 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let hashMap: Record<string, boolean> = {};

  // Creating hash map of the phrase
  for (const letter of phrase.toLocaleLowerCase()) {
    hashMap[letter] = true;
  }

  // Looping through the alphabet
  for (const letter of alphabet) {
    // If the hashmap key at letter of alphabet doesn't exist, then the phrase does not contain letter
    if (!hashMap[letter]) return letter;
  }

  // Making it this far means that there were no duplicates
  return "Your phrase has no duplicates :)";
};

const missingLetter = missingAlphabet(alphabetString);

// 4.
// Write a function that returns the first non-duplicated character in a string

let duplicateString = "minimum";

const duplicateLetter = (word: string): string => {
  let hashMap: Record<string, number> = {};
  let lowerCaseWord = word.toLocaleLowerCase();

  // Creating hash map
  for (const letter of lowerCaseWord) {
    // If there is a duplicate, we increment the value
    if (hashMap[letter]) {
      hashMap[letter] += 1;
    } else {
      // If there is no duplicate, assign value 1
      hashMap[letter] = 1;
    }
  }

  for (const letter of lowerCaseWord) {
    // If value is 1, return the first instance of it
    if (hashMap[letter] === 1) return letter;
  }

  return "Your word has no duplicates";
};

const dupeLetter = duplicateLetter(duplicateString);
