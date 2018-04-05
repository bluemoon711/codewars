/* Your job is to write a function which increments a string, to create a new string.If the
string already ends with a number, the number should be incremented by 1. If the string does
not end with a number the number 1 should be appended to the new string.
Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
Attention: If the number has leading zeros the amount of digits should be considered. */

function incrementString(strng) {
  var str = '';
  if (Number.isNaN(parseInt(strng[strng.length - 1]))) {
    return (str = strng + '1');
  } else {
    var str = strng.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var add = parseInt(p2) + 1;
      return add.toString().length > p2.length
        ? p1.slice(0, -1) + add
        : p1 + add;
    });
    return str;
  }
}
