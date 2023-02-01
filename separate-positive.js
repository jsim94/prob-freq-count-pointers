// add whatever parameters you deem necessary
function separatePositive(arr) {
  let leftPtr = 0;
  let rightPtr = arr.length - 1;

  while (leftPtr < rightPtr) {
    if (arr[leftPtr] < 0 && arr[rightPtr] > 0) {
      [arr[leftPtr], arr[rightPtr]] = [arr[rightPtr], arr[leftPtr]];
      leftPtr++;
      rightPtr--;
    } else {
      if (arr[leftPtr] > 0) leftPtr++;
      else rightPtr--;
    }
  }

  return arr;
}

module.exports = { separatePositive };
