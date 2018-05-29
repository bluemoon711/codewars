/* Write a simple parser that will parse and run Deadfish.
Deadfish has 4 commands, each 1 character long.
'i' will increment the value ( initially 0 ).
'd' will decrement the value.
's' will square the value.
'o' will output the value into the return array.
Invalid characters should be ignored.  */

parse('iiisdoso'); // should == [ 8 , 64 ]
//smart:
function parse(data) {
  let res = [];

  data.split('').reduce((cur, s) => {
    if (s === 'i') cur++;
    if (s === 'd') cur--;
    if (s === 's') cur = Math.pow(cur, 2);
    if (s === 'o') res.push(cur);

    return cur;
  }, 0);

  return res;
}

//alternative:
var map = {
  i: function(x) {
    return x + 1;
  },
  d: function(x) {
    return x - 1;
  },
  s: function(x) {
    return x * x;
  }
};

function parse(data) {
  var array = [],
    val = 0;
  data.split('').forEach(function(x) {
    if (x === 'o') {
      array.push(val);
    } else {
      val = map[x](val);
    }
  });
  return array;
}
