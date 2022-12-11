///////// Unnecessary Recursive Calls

const maxValue = (array: number[]): any => {
  if (array.length === 1) return array[0];

  let maxOfRemainder = maxValue(array.slice(1));

  if (array[0] > maxOfRemainder) return array[0];
  else return maxOfRemainder;
};

// console.log(maxValue([1, 4, 11, 223, 4]));

// Although this function works, we are making two recursive calls onto itself, setting off a cascade of recursion

/////////// Overlapping Sub-problems

// This function calculates the Fibonacci sequence for the Nth number.
// 0,1,1,2,3,5,8,13,21,34,55...

// const fib = (n: number): any => {
//   console.log("recursion");
//   if (n === 0 || n === 1) return n;

//   return fib(n - 2) + fib(n - 1);
// };

// console.log(fib(10));

/// FIRST METHOD OF OPTIMIZING : MEMOIZATION

const fib = (n: number, memo: any = {}): any => {
  console.log("recursion");
  if (n === 0 || n === 1) return n;

  if (!memo[n]) {
    memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
  }

  return memo[n];
};

// console.log(fib(100));

/*
1. Our function accepts two parameters, n and memo hash table.
2. Before making any recursive calls, our code first checks whether fib(n) has already been calculated for the given n
3. If the calculation has already been made, we simply return the result with return memo[n]

4. Only if the calculation for n has not yet been made do we proceed with the calculation
5. Then we store the result of the calculation in the memo table, so we don't have to calculate it again

*/

//// SECOND METHOD OF OPTIMIZING : GOING-BOTTOM-UP, AKA USING A LOOP AND DITCHING RECURSION

const fibLoop = (n: number): number => {
  //a and b start with the first two numbers in the series
  let a: number = 0;
  let b: number = 1;

  for (let i = 1; i <= n; i++) {
    // a and b each move up to the next numbers in the series.
    // b becomes the sum of b+a, and a becomes what b used to be
    let temp = a;
    a = b;
    b = temp + a;
  }
  return b;
};

////////// EXERCISES

const addUntil100 = (array: number[]): any => {
  if (array.length === 0) return 0;

  let sumOfRemainingNumbers = addUntil100(array.slice(1));

  if (array[0] + sumOfRemainingNumbers > 100) return sumOfRemainingNumbers;
  else return array[0] + sumOfRemainingNumbers;
};

const golomb = (n: number, memo: any = {}): any => {
  if (n === 1) return 1;

  if (!memo[n]) {
    memo[n] = 1 + golomb(n - golomb(n - 1));
  }

  return memo[n];
};
