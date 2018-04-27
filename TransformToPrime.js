/* Task :
Given a List[] of n integers, find minimum mumber to be inserted in a list, so that sum of all elements
of list should equal the closest prime number.
Notes
List size is at least 2 .
List's numbers will only positives (n > 0) .
Repeatition of numbers in the list could occur .
The newer list's sum should equal the closest prime number .
Input >> Output Examples
1- minimumNumber ({3,1,2}) ==> return (1)
Explanation:
Since, the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the 
sum to prime number is(1), which will make the sum of the List equal the closest prime number(7).
2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
Explanation:
Since, the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the 
sum to prime number is(5), which will make the sum of the List equal the closest prime number(37).
3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Explanation:
Since, the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the 
to prime number is(2), which will make the sum of the List equal the closest prime number(191). */

function minimumNumber(numbers) {
  var arr = [...numbers].reduce((a, b) => a + b);
  var l = findPrimes(arr).length;
  var next = findPrimes(arr + 100).slice(l, l + 1);
  return next - arr;
}
function findPrimes(n) {
  if (n < 3) return [];
  var arr = [];
  for (var i = 3; i < n; i += 2) {
    var flag = true;
    for (var j = 3; j * j <= i; j += 2) {
      if (i % j == 0) {
        flag = false;
        break;
      }
    }
    if (flag) arr.push(i);
  }
  return arr;
}
//good one:
function minimumNumber(numbers) {
  let sum = numbers.reduce((a, b) => a + b);
  for (let i = sum; ; i++) {
    if (prime(i)) return i - sum;
  }
  function prime(a) {
    if (a < 2) return false;
    if (a % 2 === 0) return a === 2;
    for (let i = 3; i * i < a; i += 2) {
      if (a % i === 0) return false;
    }
    return true;
  }
}
