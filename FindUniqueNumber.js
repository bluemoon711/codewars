/* Description:
Give you a array arr that contains some numebers.Numbers can be positive, negative, integer or
float.Only one of these numbers is unique.Find and return it.

Some examples:
 findUnique([1,2,3,5,7]) === 2
 Because only 2 is an even number, the other numbers are odd.
 findUnique([2,4,6,8,9]) === 9
 Because only 9 is an odd number
 findUnique([2,-4,6,8]) === -4
 Because only -4 is a negative number
 findUnique([-2,-4,-6,8]) === 8
 Because only 8 is a positive number
 findUnique([2,4.4,6,8]) === 4.4
 Because only 4.4 is a float number
 findUnique([2.2,4.4,6.6,8]) === 8
 Because only 8 is a integer number
 findUnique([2,2,2,4]) === 4
 Because only 4 has a diffrent value
Priority level: float/integer > positive/negative > odd/even > diffrent value
Some edge case:
 findUnique([-2,-4,-6.6,8]) === -6.6  //not 8
 Because Priority level float/integer > positive/negative
 findUnique([-2,-4,-7, 8]) === 8  //not -7
 Because Priority level positive/negative > odd/even
Note: All inputs will be an array.The array contains at least 3 element.Only one unique number
in it. 0 will not appear, do not worry about it; -) */

function findUnique(arr) {
  var temp1 = arr.filter(x => Number.isInteger(x));
  var temp2 = arr.filter(x => x > 0);
  var temp3 = arr.filter(x => x % 2 == 0);
  var temp4 = arr.sort((a, b) => a - b);
  console.log(temp4);
  if (temp1.length == 1) {
    return temp1[0];
  } else if (temp1.length == arr.length - 1) {
    return arr.find(x => !Number.isInteger(x));
  } else if (temp2.length == 1) {
    return temp2[0];
  } else if (temp2.length == arr.length - 1) {
    return arr.find(x => x < 0);
  } else if (temp3.length == 1) {
    return temp3[0];
  } else if (temp3.length == arr.length - 1) {
    return arr.find(x => x % 2 !== 0);
  } else if (temp4[0] == temp4[1]) {
    return temp4[temp4.length - 1];
  }
  return temp4[0];
}
