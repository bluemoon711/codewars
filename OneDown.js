/* A very passive - aggressive co - worker of yours was just fired.While he was gathering his
things, he quickly inserted a bug into your system which renamed everything to what looks
like jibberish.He left two notes on his desk, one
reads: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" while the other reads:
"Uif usjdl up uijt lbub jt tjnqmf kvtu sfqmbdf fwfsz mfuufs xjui uif mfuufs uibu dpnft 
cfgpsf ju".
Rather than spending hours trying to find the bug itself, you decide to try and decode it.
If the input is not a string, your function must return "Input is not a string".Your
function must be able to handle capital and lower case letters.You will not need to worry
about punctuation. */

function oneDown(str) {
  if (typeof str != 'string') {
    return 'Input is not a string';
  }
  const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var result = '';
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (a.indexOf(letter) != -1) {
      let newIndex = a.indexOf(letter) - 1;
      if (newIndex < 0) {
        newIndex += a.length;
      }
      result += a[newIndex];
    } else {
      result += letter;
    }
  }
  return result;
}

//simplier one:
function oneDown(str) {
  if (typeof str != 'string') return 'Input is not a string';
  let key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return [...str]
    .map(x => {
      if (key.includes(x)) return key.slice(key.indexOf(x) - 1)[0];
      return x;
    })
    .join('');
}
