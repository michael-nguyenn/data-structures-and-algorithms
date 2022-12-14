///////////// PARTITIONING
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

console.log(QuickSort.sort([1, 3, 2, 12, 1213, 4]));
