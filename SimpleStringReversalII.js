/* In this Kata, you will be given a string and two indexes.Your task is to reverse the portion
of that string between those two indices inclusive.
solve("codewars", 1, 5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa".So we
reverse them.
solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.
Input will be lowercase and uppercase letters only. */

function solve(st, a, b) {
  var begin = st.slice(0, a);
  var arr = st
    .substring(a, b + 1)
    .split('')
    .reverse()
    .join('');
  var end = st.slice(b + 1);
  return begin + arr + end;
}

//one line:
const solve = (string, a, b) =>
  string.slice(0, a) +
  string
    .slice(a, b + 1)
    .split('')
    .reverse()
    .join('') +
  string.slice(b + 1);
