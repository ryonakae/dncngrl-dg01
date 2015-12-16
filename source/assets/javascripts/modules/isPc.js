var UAParser = require('ua-parser-js');
var parser = new UAParser();
var ua = parser.getResult();
var async = require('async');

module.exports = function(){
  if( ua.device.type === 'undefined' ){
    return true;
  } else {
    return false;
  }
};