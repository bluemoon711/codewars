/* altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase(or a similar function/ method such as to_alternating_case
/ toAlternatingCase / ToAlternatingCase in your selected language; see the initial solution for 
details) such that each lowercase letter becomes uppercase and each uppercase letter becomes
lowercase.For example:
"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE" */

String.prototype.toAlternatingCase = function() {
  return this.split('')
    .map(function(el) {
      if (/[A-Z]/.test(el)) {
        return el.toLowerCase();
      } else {
        return el.toUpperCase();
      }
    })
    .join('');
};

//simipler:
String.prototype.toAlternatingCase = function() {
  return this.split('')
    .map(a => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join('');
};
