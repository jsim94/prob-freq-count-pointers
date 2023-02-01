// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  const num1Counts = {};
  const num2Counts = {};

  for (let digit of num1Str) {
    if (num1Counts[digit] === undefined) {
      num1Counts[digit] = 1;
    } else {
      num1Counts[digit]++;
    }
  }

  for (let digit of num2Str) {
    if (num2Counts[digit] === undefined) {
      num2Counts[digit] = 1;
    } else {
      num2Counts[digit]++;
    }
  }

  return Object.keys(num1Counts).every((digit) => {
    return num1Counts[digit] === num2Counts[digit];
  });
}

module.exports = { sameFrequency };
