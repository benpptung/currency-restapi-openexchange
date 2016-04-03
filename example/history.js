'use strict';

const History = require('../lib/history');
const inspect = require('util').inspect;
const colors = require('colors');
const assert = require('assert');
const Str = String;

var appId = '';
var history = History(appId);

history('2016-04-01', (err, rates)=>{
  if (err) return console.error(inspect(err).red);
  console.log(inspect(rates, {colors: true}));
});