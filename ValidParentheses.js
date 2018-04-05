/* Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.
Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
You may assume that the input string will only contain opening and closing parenthesis and
will not be an empty string. */

function validParentheses(parens) {
  var parens = parens.split('');
  var arr1 = parens.filter(function(x) {
    return x == '(';
  });
  var arr2 = parens.filter(function(x) {
    return x == ')';
  });
  if (arr1.length !== arr2.length) {
    return false;
  } else if (parens[0] == ')' || parens[parens.length - 1] == '(') {
    return false;
  } else {
    return true;
  }
}
//best solution (examine the first == '(' )
function validParentheses(parens) {
  var indent = 0;

  for (var i = 0; i < parens.length && indent >= 0; i++) {
    indent += parens[i] == '(' ? 1 : -1;
  }

  return indent == 0;
}
