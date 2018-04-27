// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"
sortme = function(courses) {
  var arr = courses.map(course => {
    return course.split('-');
  });
  arr = arr
    .sort(
      (a, b) =>
        a[1] == b[1] ? a[0].localeCompare(b[0]) : a[1].localeCompare(b[1])
    )
    .map(x => x.join('-'));
  return arr;
};

//smart:
sortme = function(c) {
  c.sort((a, b) => p(a).localeCompare(p(b)));
  return c;
};

function p(s) {
  return s
    .split('-')
    .reverse()
    .join('-');
}
