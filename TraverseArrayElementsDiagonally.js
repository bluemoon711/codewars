/* In this kata you're given an n x n array and you're expected to traverse the elements diagonally from the
bottom right to the top left.
Example
  1 6 7
  7 2 4
  3 5 9
your solution should return elements in the following order
9
4 5
7 2 3
6 7
1
//=> [9, 4, 5, 7, 2, 3, 6, 7, 1]
Your task is to write the function diagonal() that returns the array elements in the above manner.
Another Example
arr = [
 [4, 5, 7],
 [3, 9, 1],
 [7, 6, 2]
]
diagonal(arr) //=> [2, 1, 6, 7, 9, 7, 5, 3, 4]
You can assume the test cases are well formed. */

function diagonal(arr) {
  var l = arr.length;
  var out = [];
  for (let i = 0; i <= 2 * (l - 1); i++) {
    var min = Math.max(0, i - l + 1);
    var max = Math.min(l - 1, i);
    for (let j = min; j <= max; ++j) {
      var x = i - j;
      out.push(arr[x][j]);
    }
  }
  return out.reverse();
}

//alternative:
function diagonal(arr) {
  let length = arr.length,
    retArr = [];
  for (let sum = 2 * (length - 1); sum >= 0; sum--) {
    let l = sum,
      k = 0;
    while (l >= 0) {
      if (k + l === sum && k < length && l < length) {
        retArr.push(arr[k][l]);
      }
      k++;
      l--;
    }
  }
  return retArr;
}

//smart:
function diagonal(arr) {
  let res = [];
  for (let sum = 2 * (arr.length - 1); sum >= 0; sum--) {
    for (let y = arr.length - 1; y >= 0; y--) {
      var x = sum - y;
      if (x >= 0 && x <= arr.length - 1) {
        res.push(arr[x][y]);
      }
    }
  }
  return res;
}
