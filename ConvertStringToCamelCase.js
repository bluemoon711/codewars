/* Complete the method/function so that it converts dash / underscore delimited words
into camel casing.The first word within the output should be capitalized only if the
original word was capitalized.

Examples:
// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior") 
// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior") */

function toCamelCase(str) {
  if (str == '') return '';
  if (str.indexOf('-') !== -1) {
    str = str.split('-');
  } else {
    str = str.split('_');
  }
  var newStr = str[0];
  for (let i = 1; i < str.length; i++) {
    newStr += capitalized(str[i]);
  }
  return newStr;
}
function capitalized(str) {
  return str[0].toUpperCase() + str.slice(1);
}

//best solution:
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function(match) {
    return match.charAt(1).toUpperCase();
  });
}
