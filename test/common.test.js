const { isString } = require('../lib/common');

describe('isString(arg)', () => {
  const argToThrowError = [
    123456,
    true,
    null,
    undefined,
    {},
    [],
    new Map(),
    new Set(),
    new Date()
  ];
  const argDoNotThrowError = ['', '0', 'false', '123456', '{a:1}'];
  for (let arg of argDoNotThrowError) {
    test(`arg = ${arg}`, () => {
      expect(() => isString(arg)).not.toThrow();
    });
  }
  for (let arg of argToThrowError) {
    test(`arg = ${arg}`, () => {
      expect(() => isString(arg)).toThrow();
    });
  }
});
