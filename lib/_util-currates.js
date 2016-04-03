'use strict';

/**
 * Wrap openexchangerates data
 * @param {Object} currates
 * @returns {Object}
 *
 */
module.exports = function(currates) {

  currates.ts = currates.timestamp * 1000;
  delete currates.timestamp;
  delete currates.disclaimer;
  delete currates.license;
  return currates;
};