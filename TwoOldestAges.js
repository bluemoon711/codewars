function twoOldestAges(ages) {
  ages.sort((a, b) => a - b);
  return ages.slice(-2);
}
