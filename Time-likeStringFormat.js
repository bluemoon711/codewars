/* Build up a method that takes an integer and formats it to a 'time - like' format.
The method must raise an exception if its hour length is less than 3 digits and greater
than 4.
Example:
solution(800); // should return '8:00'
solution(1000); // should return '10:00'
solution(1451); // should return '14:51'
solution(3351); // should return '33:51'
solution(10000); // should raise an exception
 */
function solution(hour) {
  var tem = String(hour).split('');
  if (2 < tem.length && tem.length < 5) {
    tem.splice(-2, 0, ':');
    return tem.join('');
  }
  throw `error`;
}

//alternative;
function solution(hour) {
  var string = hour.toString();
  if (string.length < 3 || string.length > 4)
    throw 'Number must have 3 or 4 digits';
  return string.slice(0, -2) + ':' + string.slice(-2);
}
