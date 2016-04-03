'use strict';

exports = module.exports = function(appId) {

  return {
    currencies: require('./currencies')(),
    history: require('./history')(appId),
    latest: require('./latest')(appId)
  }

};


exports.Currencies = require('./currencies');

exports.History = require('./history');

exports.Latest = require('./latest');