/* This time we want to write calculations using functions and get the results.Let's have a look at
some examples:
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus,
minus, times, dividedBy(divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the
right operand */

function recur(n, op) {
  return op ? op.call(op, n) : n;
}

function zero(op) {
  return recur(0, op);
}
function one(op) {
  return recur(1, op);
}
function two(op) {
  return recur(2, op);
}
function three(op) {
  return recur(3, op);
}
function four(op) {
  return recur(4, op);
}
function five(op) {
  return recur(5, op);
}
function six(op) {
  return recur(6, op);
}
function seven(op) {
  return recur(7, op);
}
function eight(op) {
  return recur(8, op);
}
function nine(op) {
  return recur(9, op);
}

function plus(a) {
  return function(b) {
    return a + b;
  };
}
function minus(a) {
  return function(b) {
    return b - a;
  };
}
function times(a) {
  return function(b) {
    return a * b;
  };
}
function dividedBy(a) {
  return function(b) {
    return b / a;
  };
}
