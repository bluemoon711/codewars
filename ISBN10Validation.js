/* ISBN - 10 identifiers are ten digits.The first nine digits are on the range 0 to 9. The last digit can
be either on the range 0 to 9 or the letter 'X' used to indicate a value of 10.
For an ISBN - 10 to be valid, the sum of the digits multiplied by their position has to equal zero
modulo 11. For example, the ISBN - 10: 1112223339 is valid because:
(((1*1)+(1*2)+(1*3)+(2*4)+(2*5)+(2*6)+(3*7)+(3*8)+(3*9)+(9*10)) % 11) == 0
Complete the validISBN10() function.
validISBN10('1112223339') ; should return true
validISBN10('1234554321') ; should return true
validISBN10('1234512345') ; should return false */

function validISBN10(isbn) {
  var sum = 0;
  var reg1 = /^[0-9]{9}$/,
    reg2 = /[0-9]/;
  var front = isbn.slice(0, 9);
  var end = isbn.slice(-1);
  console.log(front, end);
  if (!reg1.test(front)) {
    return false;
  } else if (reg1.test(front) && reg2.test(end)) {
    for (let i = 0; i < isbn.length; i++) {
      sum += (i + 1) * isbn[i];
    }
  } else {
    if (end == 'X') sum = 10 * 10;
    for (let i = 0; i < isbn.length - 1; i++) {
      sum += (i + 1) * isbn[i];
    }
  }
  return sum % 11 == 0 ? true : false;
}

//smart:
function validISBN10(string) {
  var array = string.split('');
  array.push(array.pop().replace(/X/, 10));
  return (
    string.length == 10 &&
    array.reduce(function(prev, value, index) {
      return prev + value * (index + 1);
    }, 0) %
      11 ==
      0
  );
}
