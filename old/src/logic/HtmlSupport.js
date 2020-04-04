function generateKey(pre) {
  return `${pre}_${new Date().getTime()}`;
}

module.exports = {
  generateKey,
};
