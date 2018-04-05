/* Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay ! */

function pigIt(str) {
  var str = str.split(' ');
  var result = str.map(x => x.substr(1) + x.substr(0, 1) + 'ay');
  return result.join(' ');
}
