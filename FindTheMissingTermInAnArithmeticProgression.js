/* An Arithmetic Progression is defined as one in which there is a constant difference between
the consecutive terms of a given series of numbers.You are provided with consecutive elements
of an Arithmetic Progression.There is however one hitch: exactly one term from the original
series is missing from the set of numbers which have been given to you.The rest of the given
series is the same as the original AP.Find the missing term.
You have to write the function findMissing(list), list will always be at least 3 numbers.The
missing term will never be the first or last one.
Example
findMissing([1, 3, 5, 9, 11]) == 7
PS: This is a sample question of the facebook engineer challenge on interviewstreet.I found
it quite fun to solve on paper using math, derive the algo that way.Have fun! */

var findMissing = function(list) {
  var l = list.length;
  var gap = (list[l - 1] - list[0]) / l;
  for (let i = 0; i < l - 1; i++) {
    if (list[i + 1] - list[i] != gap) {
      return list[i + 1] - gap;
    }
  }
};

//smart:
var findMissing = function(list) {
  var step = (list[list.length - 1] - list[0]) / list.length;
  return (
    list.filter(function(val, index) {
      return val !== list[0] + index * step;
    })[0] - step
  );
};
