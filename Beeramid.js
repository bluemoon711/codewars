/* Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome!
To celebrate, you're taking your team out to the terrible dive bar next door and using the referral 
bonus to buy, and build, the largest three - dimensional beer can pyramid you can.And then probably
drink those beers, because let's pretend it's Friday too.
A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the
second, 9 in the next, 16, 25...
Complete the beeramid function to return the number of complete levels of a beer can pyramid you can
make, given the parameters of:
1) your referral bonus, and
2) the price of a beer can
For example:
beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16 */

var beeramid = function (bonus, price) {
    var total = Math.floor(bonus/price);
    if (total < 1) return 0;
    if (total ==1) return 1;
    for (var n = 1; n <= total; n++) {
      if ((n * n + n) * (2 * n + 1) / 6 > total) {
              return n - 1;
      }
    }

//best
var beeramid = function(bonus, price) {
    var beers = Math.floor(bonus / price), levels = 0;
    while(beers >= ++levels * levels) {
      beers -= levels * levels;
    }
    return levels - 1;
    }
  
//alternative
const beeramid = (bonus, price) => {
    if(bonus < 0) return 0;
    let maxBeer = Math.floor(bonus/price), level = 0, count = 0;
    while(count <= maxBeer) {
      count += Math.pow(level, 2);
      level++;
    }
    return level-2;
  }    
