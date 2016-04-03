'use strict';

const OpnExchange = require('..');
const inspect = require('util').inspect;
const colors = require('colors');
const assert = require('assert');
const Str = String;

var appId = '';
var oxr = OpnExchange(appId);

oxr.latest((err, rates)=>{
  if (err) return console.error(inspect(err).red);
  console.log(inspect(rates, {colors: true}));
  console.log('done'.blue);
});