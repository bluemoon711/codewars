/* You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings).
Your task is to return how many specific feelings are in the array.
For example:
string -> 'yliausoenvjw'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '3 feelings.' // 'awe', 'joy', 'love'
string -> 'griefgriefgrief'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '1 feeling.' // 'grief'
string -> 'abcdkasdfvkadf'
array -> ['desire', 'joy', 'shame', 'longing', 'fear']
output -> '0 feelings.'
If the feeling can be formed once - plus one to the answer.
If the feeling can be formed several times from different letters - plus one to the answer.
Eeach letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'. */

function countFeelings(string, array) {
  var arr = array.map(el => el.split(''));
  var out = 0;
  for (let j = 0; j < arr.length; j++) {
    out += compare(string, arr[j]);
  }
  return out == 1 ? out + ' feeling.' : out + ' feelings.';
}

function compare(a, b) {
  var count = 0;
  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) == -1) break;
    else {
      count++;
    }
  }
  return count == b.length ? 1 : 0;
}

//smart:
function countFeelings(string, array) {
  let count = 0;

  array.forEach(item => {
    if (
      item.split('').every(i => {
        return string.includes(i);
      })
    ) {
      count++;
    }
  });

  return count == 1 ? `${count} feeling.` : `${count} feelings.`;
}
