//just physical equations...
function dist(v, mu) {
  // suppose reaction time is 1
  var v = v / 3.6;
  var d = v * 1 + v * v / (2 * mu * 9.81);
  return d;
}

function speed(d, mu) {
  // suppose reaction time is 1
  var tem1 = mu * 9.81;
  var tem2 = Math.sqrt(2 * d / tem1 + 1);
  var v = tem1 * (tem2 - 1);
  return v * 3.6;
}
