var beeramid = function(bonus, price) {
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
      level++
    }
    return level-2;
  }    
