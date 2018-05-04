/* Complete the solution so that the function will break up camel casing, using a space between
words.
Example
solution('camelCasing') // => should return 'camel Casing' */

function solution(string) {
  var regExp = /[A-Z]/g;
  return string.replace(regExp, function($1) {
    return ' ' + $1;
  });
}

//smart:
function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}

//alternative:
function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2');
}
