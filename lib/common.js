function isString(arg) {
  if (typeof arg !== 'string') throw new Error('arg expected a string value');
}

module.exports = {
  isString
};
