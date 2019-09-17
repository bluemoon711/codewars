function sortArray(array) {
  if (array === []) {
    return [];
  }
  var odd = array.filter(x => x % 2 != 0).sort((a, b) => a - b);
  return array.map(x => (x % 2 ? odd.shift() : x));
}

//clean and simple one:
function sortArray(array) {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b);
  return array.map(x => (x % 2 ? odd.shift() : x));
}
