/* We need prime numbers and we need them now!
Write a method that takes a maximum bound and returns all primes starting with 0 up - to and including
the maximum bound.
For example:
prime(11);
Should return an array that looks like this:
[2, 3, 5, 7, 11] */

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num !== 1;
};
function prime(num) {
  var out = [];
  if (num < 2) return [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) out.push(i);
  }
  return out;
}

//best:
function prime(num) {
  var primes = [];
  loop: for (var i = 2; i <= num; i++) {
    for (var j = 0; j <= primes.length; j++)
      if (i % primes[j] === 0) continue loop;
    primes.push(i);
  }
  return primes;
}
