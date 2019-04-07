function sortArray(array) {
  let oddArr = [];
  if (array.length !== 0) {
    array.forEach((n, index) => {
      if (n % 2 !== 0) {
        array[index] = "";
        oddArr.push(n);
      }
    });
    oddArr.sort((a, b) => a - b);
    array.forEach((n, index) => {
      n === "" ? (array[index] = oddArr.shift()) : null;
    });
  } else {
    return [];
  }
  return array;
}

sortArray([5, 3, 2, 8, 1, 4]);
sortArray([5, 3, 1, 8, 0]);
sortArray([]);
