/* Given an array with 5 string values "a", "b" or "c", check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a" */

function checkThreeAndTwo(array) {
  array = array.sort();
  var temp = [];
  for (let i = 0; i < 5; i++) {
    if (temp.indexOf(array[i]) == -1) {
      temp.push(array[i]);
    }
  }
  console.log(temp);
  if (temp.length == 2) {
    return array[0] == array[1] && array[3] == array[4] ? true : false;
  } else {
    return false;
  }
}
