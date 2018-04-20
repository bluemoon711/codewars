/* Complete the solution so that it reverses all of the words within the string passed in.
Example:
reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"
     */
function reverseWords(str) {
  str = str.split(' ');
  var arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  return arr.join(' ');
}

//smart:
function reverseWords(str) {
  return str
    .split(' ')
    .reverse()
    .join(' ');
}
