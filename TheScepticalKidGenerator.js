/* Alan's child can be annoying at times.
When Alan comes home and tells his kid what he has accomplished today, his kid never believes
him.
Be that kid.
Your function 'AlanAnnoyingKid' takes as input a sentence spoken by Alan(a string).The
sentence contains the following structure:
"Today I " + [action_verb] + [object] + "."
(e.g.: "Today I played football.")
Your function will return Alan's kid response, which is another sentence with the following 
structure:
"I don't think you " + [action_performed_by_alan] + " today, I think you " + ["did" OR 
"didn't"] + [verb_of _action_in_present_tense] + [" it!" OR " at all!"]
(e.g.: "I don't think you played football today, I think you didn't play at all!")
Note the different structure depending on the presence of a negation in Alan's first 
sentence(e.g., whether Alan says "I dind't play football", or "I played football").
!Also note: Alan's kid is young and only uses simple, regular verbs that use a simple "ed"
to make past tense.There are random test cases.
 */

function AlanAnnoyingKid(input) {
  var tem = input.split(' ').splice(2);
  var rest = tem.join(' ').replace(/\./, '');
  if (tem.includes("didn't")) {
    var verb = tem[1];
    return `I don't think you ${rest} today, I think you did ${verb} it!`;
  } else {
    var verb = tem[0].replace('ed', '');
    return `I don't think you ${rest} today, I think you didn't ${verb} at all!`;
  }
}
