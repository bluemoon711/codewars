/* What is an anagram ? Well, two words are anagrams of each other if they both contain the same
letters.For example:
'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
Write a function that will find all the anagrams of a word from a list.You will be given two
nputs a word and an array with words.You should return an array of all the anagrams or an
empty array if there are none.For example:
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => [] */

function anagrams(word, words) {
  var word = word
    .split('')
    .sort()
    .join('');
  var arr = [];
  words.filter(function(el) {
    if (
      el
        .split('')
        .sort()
        .join('') == word
    ) {
      return arr.push(el);
    }
  });
  return arr;
}
//best solution:
String.prototype.sort = function() {
  return this.split('')
    .sort()
    .join('');
};

function anagrams(word, words) {
  return words.filter(function(x) {
    return x.sort() === word.sort();
  });
}
