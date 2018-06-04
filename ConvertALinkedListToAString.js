/* Related Kata
Although this Kata is not part of an official Series, you may also want to try out Parse a linked list from a
string if you enjoyed this Kata.
Preloaded
Preloaded for you is a class, struct or derived data type Node (depending on the language) used to construct
linked lists in this Kata:
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
} */

function stringify(list) {
  return list === null ? 'null' : `${list.data} -> ${stringify(list.next)}`;
}
