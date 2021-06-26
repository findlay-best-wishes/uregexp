const validators = require('../lib/validators');

describe('validator_MpNum(arg)', () => {
  const validator_MpNum = validators.validator_MpNum;

  test('arg = {}', () => {
    expect(() => void validator_MpNum({})).toThrow();
  });

  test('arg = 20', () => {
    expect(() => void validator_MpNum(10)).toThrow();
  });

  let argToExpectToupleArray = [
    ['', false],
    ['string', false],
    ['12345678', false],
    ['1234567890123', false],
    ['01234567890', false],
    ['12345678901', true],
    ['15829902655', true]
  ];

  for (let [arg, expectVal] of argToExpectToupleArray) {
    test(`arg = ${arg}`, () => {
      expect(validator_MpNum(arg)).toBe(expectVal);
    });
  }
});

describe('validator_EmailAdr(arg)', () => {
  const validator_EmailAdr = validators.validator_EmailAdr;

  test('arg = {}', () => {
    expect(() => void validator_EmailAdr({})).toThrow();
  });

  test('arg = 20', () => {
    expect(() => void validator_EmailAdr(10)).toThrow();
  });

  const argToExpectToupleArray = [
    ['', false],
    ['abc12345678', false],
    ['abc12345678.com', false],
    ['abc12345678@9abc', false],
    ['abc1 2345678@emai.em', false],
    ['abc12345678@em ai.em', false],
    ['abc12345678@emai.e m', false],
    ['gj508299098@email.em', true]
  ];

  for (let [arg, expectVal] of argToExpectToupleArray) {
    test(`arg = ${arg}`, () => {
      expect(validator_EmailAdr(arg)).toBe(expectVal);
    });
  }
});

describe('validator_Username(arg)', () => {
  const validator_Username = validators.validator_Username;

  test('arg = {}', () => {
    expect(() => void validator_Username({})).toThrow();
  });

  test('arg = 20', () => {
    expect(() => void validator_Username(10)).toThrow();
  });

  const argToExpectToupleArray = [
    ['', false],
    ['gj199', false],
    [' gj1998', false],
    ['1998gj', false],
    ['gj 1998', false],
    ['gj-1998', false],
    ['gj1998', true],
    ['gj_1998', true]
  ];

  for (let [arg, expectVal] of argToExpectToupleArray) {
    test(`arg = ${arg}`, () => {
      expect(validator_Username(arg)).toBe(expectVal);
    });
  }
});

describe('validator_Password(arg)', () => {
  const validator_Password = validators.validator_Password;

  test('arg = {}', () => {
    expect(() => void validator_Password({})).toThrow();
  });

  test('arg = 20', () => {
    expect(() => void validator_Password(10)).toThrow();
  });

  const argToExpectToupleArray = [
    ['', false],
    ['gj199', false],
    [' gj1998', false],
    ['123422420349359', false],
    ['welcomeToStudyWithMe', false],
    ['gj 1998', false],
    ['gj-1998', true],
    ['gj1998', true],
    ['gj_1998+=', true],
    ['welcome+-', true],
    ['1998gj', true]
  ];

  for (let [arg, expectVal] of argToExpectToupleArray) {
    test(`arg = ${arg}`, () => {
      expect(validator_Password(arg)).toBe(expectVal);
    });
  }
});
