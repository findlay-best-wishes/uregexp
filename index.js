const validators = require('./lib/validators');

for (let [name, value] of Object.entries(validators)) {
  module.exports[name] = value;
}
