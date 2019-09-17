function sumTwoSmallestNumbers(numbers) {
  var num = numbers.sort((a, b) => a - b);
  return num[0] + num[1];
}

//one line solution:
const sumTwoSmallestNumbers = numbers =>
  numbers
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((x, y) => x + y);
