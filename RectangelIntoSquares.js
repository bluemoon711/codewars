/* Can you translate this drawing into an algorithm?
You will be given two dimensions
a positive integer length (parameter named lng)
a positive integer width (parameter named wdth)
You will return an array or a string(depending on the language; Shell bash and Fortran return a string) with the 
size of each of the squares.
sqInRect(5, 3) should return [3, 2, 1, 1]
sqInRect(3, 5) should return [3, 2, 1, 1] */

function sqInRect(lng, wdth) {
  if (lng == wdth) return null;
  var out = [];
  while (lng != wdth) {
    var small = lng < wdth ? lng : wdth;
    var big = wdth > lng ? wdth : lng;
    out.push(small);
    lng = small;
    wdth = big - small;
  }
  out.push(lng);
  return out;
}

//smart:
function sqInRect(a, b, initial = true) {
  if (a === b) {
    return initial ? null : [a];
  }
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return [min, ...sqInRect(max - min, min, false)];
}

//best:
function sqInRect(lng, wdth) {
  let arr = [];
  if (lng === wdth) return null;
  while (lng > 0 && wdth > 0) {
    arr.push(lng > wdth ? wdth : lng);
    lng > wdth ? (lng -= wdth) : (wdth -= lng);
  }
  return arr;
}
