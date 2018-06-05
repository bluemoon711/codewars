/* Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, 
c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid. */

function high(x) {
  if (x == '') {
    return null;
  } else {
    var x = x.split(' ');
    var tem = x
      .map(function(el) {
        return { val: el, key: getSum(el) };
      })
      .sort(function(a, b) {
        return a.key == b.key ? a.val.localeCompare(b.val) : a.key - b.key;
      })
      .map(el => el.val);
    return tem.pop();
  }
}

function getSum(str) {
  return str
    .split('')
    .map(s => s.charCodeAt() - 96)
    .reduce((a, b) => a + b, 0);
}

//basic:
function high(x) {
  var arr = x.split(' ');
  var str = 'abcdefghijklmnopqrstuvwxyz';
  var newArr = arr.map(function(word) {
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  return arr[newArr.indexOf(Math.max(...newArr))];
}

//best!!smart!
function high(x) {
  return x
    .split(' ')
    .map((a, i) => [
      a,
      a
        .split('')
        .map(a => a.charCodeAt(0) - 96)
        .reduce((a, b) => a + b, 0),
      i
    ])
    .sort((a, b) => (b[1] !== a[1] ? b[1] - a[1] : a[2] - b[2]))[0][0];
}
