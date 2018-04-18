/* The rgb() method is incomplete.Complete the method so that passing in RGB decimal values will result in a
hexadecimal representation being returned.The valid decimal values for RGB are 0 - 255. Any(r, g, b) argument
values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3 */

function rgb(r, g, b) {
  var c1 = hexColour(r);
  var c2 = hexColour(g);
  var c3 = hexColour(b);
  return c1 + c2 + c3;
}
function hexColour(c) {
  var result;
  if (c < 0) return (result = '00');
  if (c > 255) return (result = 'FF');
  else {
    result = c.toString(16).toUpperCase();
    if (String(result).length < 2) return 0 + result;
    else return result;
  }
}

//best solution:
function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return '00';
  }
  if (d > 255) {
    return 'FF';
  }
  return ('0' + Number(d).toString(16)).slice(-2).toUpperCase();
}
