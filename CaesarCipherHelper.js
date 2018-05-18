/* Write a class that, when given a string, will return an uppercase string with each letter shifted
forward in the alphabet by however many spots the cipher was initialized to.
For example:
var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26]. */

var CaesarCipher = function(shift) {
  var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  this.encode = function(str) {
    return str.replace(/[a-z]/gi, function(s) {
      return a[(a.indexOf(s.toUpperCase()) + shift) % 26];
    });
  };
  this.decode = function(str) {
    return str.replace(/[a-z]/gi, function(s) {
      return a[(a.indexOf(s.toUpperCase()) + 26 - shift) % 26];
    });
  };
};

//alternative:
class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
  }

  encode(string) {
    var str = string.toUpperCase();
    var result = '';
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c >= 65 && c <= 90)
        result += String.fromCharCode((c - 65 + this.shift) % 26 + 65);
      else result += str.charAt(i);
    }
    return result;
  }

  decode(string) {
    var str = string.toUpperCase();
    var result = '';
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c >= 65 && c <= 90)
        result += String.fromCharCode((c + 65 - this.shift) % 26 + 65);
      else result += str.charAt(i);
    }
    return result;
  }
}
