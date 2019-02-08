'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-cache.production.min.js');
} else {
  module.exports = require('./react-cache.development.js');
}
