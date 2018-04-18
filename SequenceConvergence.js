/* Consider the following series:
1, 2, 4, 8, 16, 22, 26, 38, 62, 74, 102, 104, 108, 116, 122
It is generated as follows:
a) For single digit integers, add the number to itself to get the next digit. This is clear
b) For other integers, multiply all the non - zero digits and add the result to that number to get
the next digit.
For example, 16 + (6 * 1) = 22 and 104 + (4 * 1) = 108.
Let's begin the same series with a seed value of 3 instead of 1:
3, 6, 12, 14, 18, 26, 38, 62, 74, 102, 104, 108, 116, 122
Notice that the two sequences converge at 26 and are identical therefter.We will call the series
seeded by a value of 1 the "base series" and the other series the "test series".
You will be given a seed value for the test series and your task will be to return the number of
integers that have to be generated in the test series before it converges to the base series.In
the case above, the answer should be 5, which is the length of digits from 3 to 18. */

function convergence(n) {
  var count = 0;
  var result = n;
  var baseNum = 1;
  while (result != baseNum) {
    result = calculate(result);
    while (baseNum < result) {
      baseNum = calculate(baseNum);
    }
    count++;
  }
  return count;
}
function add(num) {
  var m = String(num)
    .split('')
    .filter(x => x != 0);
  return m.reduce((a, b) => a * b, 1);
}
function calculate(num) {
  return num.length == 1 ? num + num : num + add(num);
}

//smart solution:
function convergence(n) {
  let r = [16, 22];
  for (let i = 0; ; i++) {
    while (r[1] < n) r = [r[1], gen(r[1])];
    if (r.includes(n)) return i;
    n = gen(n);
  }
}

const gen = n =>
  n < 10
    ? n + n
    : n + ('' + n).split('').reduce((s, x) => s * (x < 1 ? 1 : x), 1);
