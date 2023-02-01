// add whatever parameters you deem necessary
function constructNote(message, letters) {
  const messageCounts = {};
  const letterCounts = {};

  for (let char of message) {
    if (messageCounts[char] === undefined) {
      messageCounts[char] = 1;
    } else {
      messageCounts[char]++;
    }
  }

  for (let char of letters) {
    if (letterCounts[char] === undefined) {
      letterCounts[char] = 1;
    } else {
      letterCounts[char]++;
    }
  }

  return Object.keys(messageCounts).every(
    (char) => messageCounts[char] <= letterCounts[char]
  );
}

module.exports = { constructNote };
