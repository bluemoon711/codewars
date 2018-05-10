/* When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:
1, 10, 9, 12, 3, 4.
Then the whole pattern repeats.
Hence the following method: Multiply the right most digit of the number with the left most number in the sequence shown above, the
second right most digit to the second left most digit of the number in the sequence.The cycle goes on and you sum all these products.
Repeat this process until the sequence of sums is stationary.
...........................................................................
Example: What is the remainder when 1234567 is divided by 13?
7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178
We repeat the process with 178:
8x1 + 7x10 + 1x9 = 87
and again with 87:
7x1 + 8x10 = 87
...........................................................................
From now on the sequence is stationary and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13: 9
Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.
thirt(1234567) calculates 178, then 87, then 87 and returns 87.
thirt(321) calculates 48, 48 and returns 48 */

function thirt(n) {
  var arr = [1, 10, 9, 12, 3, 4];
  var old;
  do {
    old = n;
    var trans = String(old)
      .split('')
      .reverse();
    n = 0;
    //use i%arr.length to circle back!!
    for (let i = 0; i < trans.length; i++) {
      n += trans[i] * arr[i % arr.length];
    }
  } while (old != n);
  return n;
}

//shorter:
function thirt(n) {
  const nums = [1, 10, 9, 12, 3, 4];
  var sum = ('' + n)
    .split('')
    .reverse()
    .reduce((sum, v, i) => sum + v * nums[i % nums.length], 0);
  return sum === n ? n : thirt(sum);
}

//clever:
const getNum = n => [1, 10, 9, 12, 3, 4][n % 6];

const thirt = n => {
  let result = [...`${n}`].reverse().reduce((s, v, i) => s + v * getNum(i), 0);
  return result === n ? result : thirt(result);
};
