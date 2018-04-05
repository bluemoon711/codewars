/* For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every
2nd char, and concat them as new String.
Do this n times!
Examples:
"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:
function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text. */

function encrypt(text, n) {
  if (!text || n == 0) {
    return text;
  } else {
    var text = text.split('');
    while (n > 0) {
      var evens = [],
        odds = [];
      for (let i = 0; i < text.length; i++) {
        if (i % 2 == 0) {
          evens.push(text[i]);
        } else {
          odds.push(text[i]);
        }
      }
      text = odds.concat(evens);
      n--;
    }
    return text.join('');
  }
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) {
    return encryptedText;
  } else {
    var m = Math.floor(encryptedText.length / 2);
    while (n > 0) {
      var temp = '';
      var evens = encryptedText.slice(m);
      var odds = encryptedText.slice(0, m);
      for (let i = 0; i < m; i++) {
        temp += evens[i] + odds[i];
      }
      if (encryptedText.length % 2 == 1) {
        temp += evens[m];
      }
      encryptedText = temp;
      n--;
    }
    return encryptedText;
  }
}
