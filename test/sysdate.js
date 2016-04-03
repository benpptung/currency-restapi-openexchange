'use strict';

const sysdate = require('../lib/_util-sysdate').sysdate;
const expect = require('expect.js');

describe('sysdate()', _=>{

  it('convert date object into formatted openexchanges date arg string', function() {
    var d = new Date(1459667196663);
    expect(sysdate(d)).to.be('2016-04-03');
  });

  it('return the same date string', function() {
    expect(sysdate('2016-04-03')).to.be('2016-04-03');
  });

  it('return invalid argument string if not a date object', function() {
    var d = new Date(Infinity);
    expect(sysdate(d)).to.match(/^invalid argument\[date\]:(.+)$/);
  });

  it('accept JSON time string', function() {
    expect(sysdate('2016-04-03T07:06:36.663Z')).to.be('2016-04-03');
  });

  it('accept js timestamp', function() {
    expect(sysdate(1459667196663)).to.be('2016-04-03');
  });
});