/* The alphabetized kata
Re - order the characters of a string, so that they are concatenated into a new string in
"case-insensitively-alphabetical-order-of-appearance" order.Whitespace and punctuation
shall simply be removed!
The input is restricted to contain no numerals and only words containing the english
alphabet letters.
Example:
alphabetized("The Holy Bible") // "BbeehHilloTy" */

function alphabetized(s) {
  var arr = s
    .split('')
    .filter(el => /[A-Za-z]/.test(el))
    .map(function(el, index) {
      return { val: el, key: index };
    })
    .sort(function(a, b) {
      return a.val.toLowerCase() == b.val.toLowerCase()
        ? a.key - b.key
        : a.val.localeCompare(b.val);
    })
    .reduce((acc, b) => {
      return (acc += b.val);
    }, '');
  return arr;
}

//alternative:
function alphabetized(s) {
  const results = s
    .split('')
    .filter(s => s.match(/[a-z|A-Z]/))
    .map((l, i) => {
      return { letter: l, index: i };
    });
  results.sort((a, b) => {
    let result = a.letter.toLowerCase().localeCompare(b.letter.toLowerCase());
    if (result === 0) {
      result = a.index - b.index;
    }
    return result;
  });
  return results.map(r => r.letter).join('');
}
