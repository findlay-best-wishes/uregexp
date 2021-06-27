const { parser_url } = require('../lib/parser');

describe('parser_url(arg)', () => {
  const argToExpect = [
    [
      'http://www.guojie.func/javascript/express?key1=v1&key2=v2#hashvalue',
      {
        protocol: 'http',
        hostname: 'www.guojie.func',
        pathname: '/javascript/express',
        hash: 'hashvalue',
        query: {
          key1: 'v1',
          key2: 'v2'
        }
      }
    ],
    [
      'http://blog.guojie.fun',
      {
        protocol: 'http',
        hostname: 'blog.guojie.fun',
        pathname: '',
        hash: '',
        query: {}
      }
    ],
    [
      'http://blog.guojie.fun/html',
      {
        protocol: 'http',
        hostname: 'blog.guojie.fun',
        pathname: '/html',
        hash: '',
        query: {}
      }
    ],
    [
      'http://guojie.fun#header',
      {
        protocol: 'http',
        hostname: 'guojie.fun',
        pathname: '',
        hash: 'header',
        query: {}
      }
    ]
  ];
  for (let [arg, expectVal] of argToExpect) {
    test(`arg = ${arg}`, () => {
      expect(parser_url(arg)).toEqual(expectVal);
    });
  }
});
