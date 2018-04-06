/* In this kata you have to create all permutations of an input string and remove duplicates, 
if present.This means, you have to shuffle all letters from the input in all possible orders.

Examples:
permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter. */

function permutations(string) {
  if (string.length === 1) {
    return [string];
  }

  var arr = string.split(''),
    perms = [];

  for (let i = 0; i < arr.length; i++) {
    var remainder = arr.slice(0),
      firstChar = remainder.splice(i, 1)[0],
      remainderPerms = permutations(remainder.join(''));

    remainderPerms.forEach(function(perm) {
      perm = firstChar + perm;
      if (perms.indexOf(perm) === -1) {
        perms.push(perm);
      }
    });
  }

  return perms;
}

//best solution:
function permutations(string) {
  var arr = string.split(''),
    tmp = arr.slice(),
    heads = [],
    out = [];
  if (string.length == 1) return [string];
  arr.forEach(function(v, i, arr) {
    if (heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach(function(w) {
        out.push(v + w);
      });
      tmp.push(v);
    }
  });
  return out;
}
