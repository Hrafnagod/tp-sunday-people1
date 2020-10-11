// Sunday toy problem for the weekend warriors out there

// Two beggars problem:
// In the city, two (friendly) beggars found a bunch of gold, stacked into neatly arranged columns, each of different height.
// The beggars decided to share the gold, each picking from the far right or the far left of the pile.

/*
Example:
For golds = [4,2,9,5,2,7], the output should be [14,15].
The pile of most left is 4,
The pile of most right is 7,
A choose the largest one -- > take 7

The pile of most left is 4,
The pile of most right is 2,
B choose the largest one -- > take 4

The pile of most left is 2,
The pile of most left is 2,
A choose the most left one -- > take 2

Etc.

The function should return the two values in an array with two elements: [beggarValue1, beggarValue2]
*/

function beggarsProblem(gold) {
  if (typeof(gold) === 'object') {
    return [0,0];
  }
  if (gold.split(',').map(Number) <= 0) {
    return [0,0];
  }
  let result = []
  let beggarA = 0;
  let beggarB = 0;
  let arr = gold.split(',')
  console.log(arr)
  let mapped = arr.map(function (item) {
    return parseInt(item, 10);
  });
  console.log(mapped)

  debugger;
  while (mapped.length > 0) {
    if (mapped[mapped.length - 1] > mapped[0]) {
      beggarA += mapped.pop();
    } else {
      beggarA += mapped.shift();
    }
    if (mapped[mapped.length - 1] > mapped[0]) {
      beggarB += mapped.pop();
    } else {
      beggarB += mapped.shift();
    }
  }
  console.log(beggarA, beggarB)
  result = [beggarA, beggarB];
  return result;

}


beggarsProblem('6,5,7,4,2,8')

module.exports = beggarsProblem;