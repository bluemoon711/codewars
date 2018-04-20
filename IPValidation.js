/* Write an algorithm that will identify valid IPv4 addresses in dot - decimal format.IPs should
be considered valid if they consist of four octets, with values between 0..255(included).
Input to the function is guaranteed to be a single string.
Examples
// valid inputs:
1.2.3.4
123.45.67.89
// invalid inputs:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note: leading zeros(e.g. 01.02.03.04) are considered not valid in this kata! */

function isValidIP(str) {
  if (!/^\d+\.\d+\.\d+\.\d+$/.test(str)) return false;
  var num = str.split('.');
  for (var i = 0; i < 4; i++)
    if (
      parseInt(num[i]) >= 256 ||
      parseInt(num[i]) < 0 ||
      (num[i] != 0 && num[i].charAt(0) == '0')
    )
      return false;
  return true;
}

//using regex:
function isValidIP(str) {
  return /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){4}$/.test(
    str + '.'
  );
}
