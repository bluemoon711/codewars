/* Write a method highestRank(arr)(or highest - rank in clojure) which returns the number which is most frequent
in the given input array(or ISeq).If there is a tie for most frequent number, return the largest number of
which is most frequent.
Example:
arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr) //=> returns 12
arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
highestRank(arr) //=> returns 12
arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
highestRank(arr) //=> returns 3
 */

function highestRank(arr) {
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  var res = [];
  for (var item in obj) {
    res.push(item);
  }
  res.sort((a, b) => obj[a] - obj[b]);
  return parseInt(res[res.length - 1]);
}

//best:
function highestRank(arr) {
  return arr
    .sort(function(a, b) {
      return (
        arr.filter(function(v) {
          return v === a;
        }).length -
          arr.filter(function(v) {
            return v === b;
          }).length || a - b
      );
    })
    .pop();
}
