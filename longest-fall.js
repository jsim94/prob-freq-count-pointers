// add whatever parameters you deem necessary
function longestFall(arr) {
  if (arr.length === 0) return 0;

  let currStreak = 1;
  let largestStreak = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) currStreak++;
    else currStreak = 1;

    if (currStreak > largestStreak) largestStreak = currStreak;
  }

  return largestStreak;
}

module.exports = { longestFall };
