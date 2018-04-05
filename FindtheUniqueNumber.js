/* There is an array with some numbers.All numbers are equal except for one.Try to
find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.
The tests contain some very huge arrays, so think about performance. */

function findUniq(arr) {
  var temp = arr.sort((a, b) => a - b);
  return temp[0] == temp[1] ? temp[arr.length - 1] : temp[0];
}
