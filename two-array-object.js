// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  const resultObj = {};

  keys.forEach((key, i) => {
    resultObj[key] = values[i] || null;
  });

  return resultObj;
}

module.exports = { twoArrayObject };
