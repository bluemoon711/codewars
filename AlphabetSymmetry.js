/* Consider the word "abode".We can see that the letter a is in position 1 and b is in position 2. In the alphabet,
a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy
in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for
each word.For example, solve(["abode", "ABc", "xyzD"]) = [4, 3, 1].See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces. */

function solve(arr) {
  var result = arr.map(function(el) {
    return count(el);
  });
  return result;
}

function count(str) {
  str = str.toLowerCase();
  var count = 0;
  var arr = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == arr[i]) count += 1;
  }
  return count;
}

//best:
function solve(arr) {
  var alphabeth = 'abcdefghijklmnopqrstuvwxyz';
  return arr.map(
    x =>
      x
        .toLowerCase()
        .split('')
        .filter((y, i) => i == alphabeth.indexOf(y)).length
  );
}
