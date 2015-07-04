module.exports = function(type, config) {
  if (!type || !config) {
    throw new Error('The connie initializer takes two strings, a type and a config');
  }

  var connie = require('connie');
  
  return connie(type, config).initializer();
};
