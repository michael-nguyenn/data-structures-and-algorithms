// CHAPTER 8: HASH TABLES

///////////// Page: 41 - ARRAY SUBSET /////////////////////////////////////////
// Determining if one array is a subset of another array

let arrayA = ["a", "b", "c", "d", "e", "f"];
let arrayB = ["b", "d", "f"];
let arrayC = ["b", "d", "f", "h"];

// First approach would be using nested loops
const isSubset = (arr1: string[], arr2: string[]): boolean => {
  let largerArray, smallerArray;

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
  let largerArray, smallerArray;
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
