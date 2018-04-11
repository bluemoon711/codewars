// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

function nearestSq(n) {
  var tem = Math.sqrt(n);
  var res = Math.floor(tem);
  if (tem - res > 0.5) return (res + 1) * (res + 1);
  else return res * res;
}

//best solution:
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
