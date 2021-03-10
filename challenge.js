const testArray = [1, 7, 0, 3, 2, 0, 5, 9];


function zerosToEnd(arrayToSort) {
  arraySorted = []
  zerosCount = 0

  arrayToSort.forEach(element => {
    if (element != 0) {
      arraySorted.push(element)
    } else {
      zerosCount++
    }
  });

  while (zerosCount != 0) {
    arraySorted.push(0)
    zerosCount--
  }

  return arraySorted
};


console.log('Input: ', testArray);
console.log('Output: ', zerosToEnd(testArray));