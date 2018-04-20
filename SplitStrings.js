/* Complete the solution so that it splits the string into pairs of two characters.If the
string contains an odd number of characters then it should replace the missing second
character of the final pair with an underscore('_').
Examples:
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef'] */

function solution(str) {
  return (str.length % 2 ? str.concat('_') : str).match(/../g);
}

//similar:
function solution(str) {
  str = str.length % 2 === 0 ? str : str + '_';
  return str.match(/.{2}/g);
}

function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/\w\w/g);
}
