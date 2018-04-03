/* Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times. */

function findOdd(A) {
  var A = A.sort((a, b) => a - b);
  var nums = [],
    counts = [];
  for (let i = 0; i < A.length; i++) {
    if (nums.indexOf(A[i]) == -1) {
      nums.push(A[i]);
      counts.push(1);
    } else {
      counts[nums.indexOf(A[i])] += 1;
    }
  }
  for (let j = 0; j < counts.length; j++) {
    if (counts[j] % 2 !== 0) {
      return nums[counts.indexOf(counts[j])];
    }
  }
}
