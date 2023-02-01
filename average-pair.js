// add whatever parameters you deem necessary
function averagePair(intArr, avg) {
  let leftPtr = 0;
  let rightPtr = intArr.length - 1;

  while (leftPtr < rightPtr) {
    const checkAvg = (intArr[leftPtr] + intArr[rightPtr]) / 2;

    if (checkAvg < avg) {
      leftPtr++;
    } else if (checkAvg > avg) {
      rightPtr--;
    } else if (checkAvg == avg) return true;
  }
  return false;
}

module.exports = { averagePair };
