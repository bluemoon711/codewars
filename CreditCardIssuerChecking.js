/* Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.
| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"
//best: */

function getIssuer(number) {
  var n = String(number),
    l = n.length,
    s2 = n.slice(0, 2),
    s4 = n.slice(0, 4),
    s1 = n.slice(0, 1);
  switch (l) {
    case 15:
      if (s2 == 34 || s2 == 37) return 'AMEX';
      else {
        return 'Unknown';
      }
      break;
    case 16:
      if (s4 == 6011) {
        return 'Discover';
      } else if ((s2 > 50) & (s2 < 56)) {
        return 'Mastercard';
      } else if (s1 == 4) {
        return 'VISA';
      } else {
        return 'Unknown';
      }
      break;
    case 13:
      if (s1 == 4) return 'VISA';
      else {
        return 'Unknown';
      }
      break;
    default:
      return 'Unknown';
  }
}

function getIssuer(n) {
  var s = n.toString();
  if (/^3[4|7]\d{13}$/.test(s)) return 'AMEX';
  if (/^6011\d{12}$/.test(s)) return 'Discover';
  if (/^5[1-5]\d{14}$/.test(s)) return 'Mastercard';
  if (/^4(\d{12}|\d{15})$/.test(s)) return 'VISA';
  return 'Unknown';
}
