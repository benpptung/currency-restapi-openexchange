'use strict';

module.exports = function(rates) {
  if (!(rates === Object(rates) && rates.disclaimer && rates.license &&
      rates.timestamp && rates.base && (rates.rates === Object(rates.rates)))){
    return false;
  }

  var currs = Object.keys(rates.rates);
  var valid = true;
  for(let i = 0; i < currs.length; ++i) {

    let code = currs[i];
    if (code.length != 3  || !isUNum(rates.rates[code])) {
      valid = false;
      break;
    }
  }
  return valid;
};

function isUNum(num) {
  if (typeof num != 'number' && typeof num != 'string') return NaN;
  if (num === Infinity || num === -Infinity) return NaN;
  if (typeof num == 'number') return num > 0;
  return num * 1 > 0;
}