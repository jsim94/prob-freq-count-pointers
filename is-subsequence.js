// add whatever parameters you deem necessary
function isSubsequence(substring, string) {
  let currMatchIndex = 0;

  for (let i = 0; i < string.length; i++) {
    if (substring.length - currMatchIndex > string.length - i)
      return false;

    if (string[i] === substring[currMatchIndex]) currMatchIndex++;
    if (currMatchIndex === substring.length) return true;
  }

  return false;
}

module.exports = {
  isSubsequence,
};
