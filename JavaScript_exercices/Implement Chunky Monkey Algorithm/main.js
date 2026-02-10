/**
Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument. The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array.

- : You can do this using a for loop with a step size equal to num.

- Extract subarrays:.

- Add each subarray to the result array: Push the sliced array into your result array.

- Return the result array: After the loop completes, return your array of chunks.
*/

const chunkArrayInGroups = (arr, num) => {
  // Initialize a result array: Create an empty array that will hold the smaller chunks.
  let result = [];
  // Use a loop to iterate over the input array
  for (let i = 0; i < arr.length; i += num) {
    //  In each iteration, use the slice method to take a portion of the array starting from the current index and ending at the current index plus num.
    const chunk = arr.slice(i, i + num);
    result.push(chunk);
  }
  return result;
};
