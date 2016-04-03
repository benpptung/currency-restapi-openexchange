'use strict';

const isRates = require('../lib/_util-is-rates');
const expect = require('expect.js');

describe('isRates()', _=>{

  var rates;

  beforeEach(function() {
    rates = {
      disclaimer: "https://openexchangerates.org/terms/",
      license: "https://openexchangerates.org/license/",
      timestamp: 1449877801,
      base: "USD",
      rates: {
        AED: 3.672538,
        AFN: 66.809999,
        ALL: 125.716501,
        AMD: 484.902502,
        ANG: 1.788575,
        AOA: 135.295998,
        ARS: 9.750101,
        AUD: 1.390866
      }
    };
  });

  describe('return true if result is valid', function() {

    it('accept valid rates', function() {
      expect(isRates(rates)).to.be.ok();
    });

    it('accept rate is is decimal string', function() {
      // in case openexchangerates change api in the future
      rates.rates.BBB = '3.1416';
      expect(rates).to.be.ok();
    })

  });

  describe('return false if result is invalid', function() {

    it('return falsy if non-3 letters code', function() {
      rates.rates.XXBT = 400.3;
      expect(isRates(rates)).to.not.be.ok();
    });

    it('return falsy if rate is not an unsigned number', function() {
      rates.rates.CCC = '123blahblah';
      expect(isRates(rates)).to.not.be.ok();
    })

  });


});