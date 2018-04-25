/* Complete the method so that it returns an array of all ID's passed in. The data structure 
will be similar to the following:
var data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}
extractIds(data) // should return [1,2,3,4,5]
The method should be able to handle the case of empty data being passed in.
Note: The only arrays that need to be traversed are those assigned to the "items" property. */

function extractIds(data) {
  var ids = [];
  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (prop == 'id') {
        ids.push(data[prop]);
      }
      if (prop == 'items') {
        for (let i = 0; i < data[prop].length; i++) {
          ids.push(...extractIds(data[prop][i]));
        }
      }
    }
  }
  return ids;
}

//convert object to string by Json:
function extractIds(data) {
  return (JSON.stringify(data).match(/\d+/g) || []).map(x => +x);
}

//smart:
function extractIds(data) {
  return [].concat.apply(
    [],
    Object.keys(data).map(function(item) {
      return item === 'id' ? data[item] : extractIds(data[item]);
    })
  );
}

//looks easier...
function extractIds(data) {
  let ids = [];
  if ('id' in data) ids.push(data.id);
  if ('items' in data)
    data.items.forEach(item => (ids = ids.concat(extractIds(item))));
  return ids;
}
