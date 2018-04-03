/* Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *
for example, a tower of 3 floors looks like below
[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
] */

function towerBuilder(nFloors) {
  var arr = [];
  var str1 = ' ';
  var str2 = '*';
  for (let i = 0; i < nFloors; i++) {
    var str =
      str1.repeat(nFloors - i - 1) +
      str2.repeat(2 * i + 1) +
      str1.repeat(nFloors - i - 1);
    arr.push(str);
  }
  return arr;
}
