/* Given a list of integers, return the nth smallest integer in the list.Only distinct elements should be considered when calculating
the answer.n will always be positive(n > 0)
If the nth small integer doesn't exist, return -1 (C++) / None (Python) / nil (Ruby).
Notes:
"indexing" starts from 1
huge lists (of 1 million elements) will be tested
Examples
small({1, 3, 4, 5}, 7)       -> -1  // n is more than the size of the list
small({4, 3, 4, 5}, 4)       -> -1  // 4th smallest integer doesn't exist
small({45, -10, 4, 5, 4}, 4) -> 45  // 4th smallest integer is 45
If you get a timeout, just try to resubmit your solution.However, if you always get a timeout,
review your code.
 */

function nthSmallest(arr, n) {
  if (n < 1 || n >= arr.length) return null;
  var set = new Set(arr);
  let out = Array.from(set).sort((a, b) => a - b);
  if (n > out.length) return null;
  else return out[n - 1];
}

//smart:
function nthSmallest(arr, n) {
  return Array.from(new Set(arr)).sort((a, b) => a - b)[n - 1] || null;
}
