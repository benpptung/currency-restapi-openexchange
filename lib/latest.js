'use strict';

const request = require('superagent');
const serial = require('util-superagent-serializer');
const restUrl = require('../config').restUrl;
const isRates = require('./_util-is-rates');
const Currates = require('./_util-currates');

module.exports = function(options) {

  if (typeof options == 'string') options = {appId: options};

  var appId = options.appId;
  var base = options.base;
  var symbols;

  if (Array.isArray(options.symbols)) {
    symbols = options.symbols.join(',');
  }

  return cb=>{

    var query = { app_id: appId};
    if (base && base != 'USD') query.base = base;
    if (symbols) query.symbols = symbols;

    request
      .get(restUrl + '/latest.json')
      .query(query)
      .end((err, res)=>{

        if (err) return cb(err);
        if (!isRates(res.body)) return cb(NotRatesError(res));

        cb(null, Currates(res.body));
      })
  };

};

function NotRatesError(res) {
  var err = new TypeError('invalid response');
  err.response = serial(res);
  return err;
}