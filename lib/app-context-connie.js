module.exports = function(type, opts) {
  if (!type || !opts) {
    throw new Error('The connie initializer takes two parameters, a type and a config');
  }

  var connie = require('connie');

  return function(context) {
    return connie(type, opts).read().then(function(config) {
      context.config = config;
    });
  };
};
