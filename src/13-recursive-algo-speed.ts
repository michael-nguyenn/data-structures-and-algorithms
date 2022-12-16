///////////// PARTITIONING & QUICK SORT
/* 
 Take a random value from the array - which is then called the pivot - and make sure that every number that 
 is less than the pivot ends up to the left of the pivot, and that every number greater than the pivot
 ends up to thr right of the pivot
 */

// [0,5,2,1,6,3]
// Assign right most value 3 as our pivot
// Assign two pointers at our array
// one left, and one right (excluding out pivot)
// leftPointer = 0, rightPointer = 6
// Now we begin the partitioning

// 1. Left pointer moves continuously one cell to the right until it reaches a value that is greater than
// or equal to the pivot, and then stops
// 2. Then, the right pointer continuously moves one call to the left until it reaches a value
// that is less than or equal to the pivot, and then tops. Right pointer will also stop if
// if reaches the beginning of the array
// 3. Once right pointer has stopped, we reach a crossroad. If the left pointer has reached (or gone beyond)
// the right pointer, we move on to Step 4. Otherwise, we swap the values that the left and right pointers are pointing to
// and then go back to repeat step 1,2,3 again.
// 4. Finally, we swap the pivot with the value that the left pointer is currently pointing to.

class QuickSort {
  public static sort(arr: number[]): number[] {
    // base case
    if (arr.length <= 1) {
      return arr;
    }

    // assign rightmost value as pivot
    const pivotIndex = arr.length - 1;
    const pivot = arr[pivotIndex];

    // initialize left and right pointers
    let leftPointer = 0;
    let rightPointer = arr.length - 2;

    while (leftPointer <= rightPointer) {
      // move left pointer to the right until it reaches a value >= pivot
      while (arr[leftPointer] < pivot) {
        leftPointer++;
      }

      // move right pointer to the left until it reaches a value <= pivot
      while (arr[rightPointer] > pivot) {
        rightPointer--;
      }

      // if left pointer has not reached right pointer, swap values
      if (leftPointer <= rightPointer) {
        const temp = arr[leftPointer];
        arr[leftPointer] = arr[rightPointer];
        arr[rightPointer] = temp;

        // move pointers to the next position
        leftPointer++;
        rightPointer--;
      }
    }

    // swap pivot with value at left pointer
    arr[pivotIndex] = arr[leftPointer];
    arr[leftPointer] = pivot;

    // recursively sort left and right partitions
    return [
      ...QuickSort.sort(arr.slice(0, leftPointer)),
      pivot,
      ...QuickSort.sort(arr.slice(leftPointer + 1)),
    ];
  }
}

// console.log(QuickSort.sort([1, 3, 2, 12, 1213, 4]));

// Quick Sort has a O(N log N)

//////////// QUICK SELECT

class QuickSelect {
  // This is the public method that can be called to find the kth smallest element
  public static select(arr: number[], k: number): number {
    // If the input array is empty, throw an error
    if (arr.length === 0) {
      throw new Error("Cannot find kth smallest element in an empty list.");
    }

    // Call the recursive helper method to do the actual work
    return this.selectRecursive(arr, k, 0, arr.length - 1);
  }

  // This is the recursive helper method that does the work of finding the kth smallest element
  private static selectRecursive(
    arr: number[],
    k: number,
    start: number,
    end: number
  ): number {
    // If the start and end indices are the same, we have reached the base case
    if (start === end) {
      return arr[start];
    }

    // Partition the array around a pivot element
    const pivotIndex = this.partition(arr, start, end);

    // If the pivot index is equal to k, return the pivot element
    if (pivotIndex === k) {
      return arr[k];
    }
    // If the pivot index is less than k, recursively search the right subarray
    else if (pivotIndex < k) {
      return this.selectRecursive(arr, k, pivotIndex + 1, end);
    }
    // If the pivot index is greater than k, recursively search the left subarray
    else {
      return this.selectRecursive(arr, k, start, pivotIndex - 1);
    }
  }

  // This method partitions the array around a pivot element
  private static partition(arr: number[], start: number, end: number): number {
    // Choose the last element in the subarray as the pivot
    const pivot = arr[end];
    // Set the pivot index to the start of the subarray
    let pivotIndex = start;

    // Iterate through the subarray, swapping elements that are less than the pivot to the left of the pivot index
    for (let i = start; i < end; i++) {
      if (arr[i] < pivot) {
        this.swap(arr, i, pivotIndex);
        pivotIndex++;
      }
    }

    // Swap the pivot element with the element at the pivot index
    this.swap(arr, pivotIndex, end);
    // Return the pivot index
    return pivotIndex;
  }

  // This method swaps the elements at the given indices in the array
  private static swap(arr: number[], i: number, j: number): void {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

const arr = [3, 2, 1, 5, 4];
const k = 3;
const kthSmallest = QuickSelect.select(arr, k);

////////////////// EXERCISES

// 1. Given an array of positive numbers, write a function that returns the greatest product of any three numbers

function greatestProductOf3(array: number[]) {
  array.sort((a, b) => (a < b ? -1 : 1));

  return (
    array[array.length - 1] * array[array.length - 2] * array[array.length - 3]
  );
}
