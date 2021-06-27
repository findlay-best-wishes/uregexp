const { isString } = require('./common');
function parser_url(arg) {
  isString(arg);
  const { groups } = arg.match(
    /^(?<protocol>[a-zA-Z]+):\/\/(?<hostname>\w+\.[\w\.]+)(?<pathname>\/[\w\/]*)?\??(?<query>[\w&=]*)#?(?<hash>\w+)?$/
  );
  const res = {
    protocol: groups.protocol || '',
    hostname: groups.hostname || '',
    pathname: groups.pathname || '',
    hash: groups.hash || '',
    query: {}
  };
  const querayIterator = (groups.query || '').matchAll(/(?:&?(\w+)=(\w+))/g);
  for (let queryObj of querayIterator) {
    res.query[queryObj[1]] = queryObj[2];
  }
  return res;
}

module.exports = {
  parser_url
};
