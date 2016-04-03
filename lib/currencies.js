'use strict';

const request = require('superagent');
const restUrl = require('../config').restUrl;
const serial = require('util-superagent-serializer');

module.exports = function() {

  return cb=>{

    request.get(restUrl + '/currencies.json')
      .end((err, res)=>{

        if (err) return cb(err);
        if (!isCurrencies(res.body)) return cb(CurrTypeErr(res));
        cb(null, res.body);
      });
  }
};


function isCurrencies(currencies) {
  return currencies === Object(currencies) && currencies.USD === 'United States Dollar';
}

function CurrTypeErr(res) {
  var err = new TypeError('invalid response');
  err.original = serial(res);
  return err;
}