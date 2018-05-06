/* You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: array may be empty, in this case return 0. */

function positiveSum(arr) {
  arr = arr.filter(el => el > 0);
  if (arr.length == 0) return 0;
  else return arr.reduce((a, b) => a + b);
}

//smart! just start from 0!!!
function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
}

//best:
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
