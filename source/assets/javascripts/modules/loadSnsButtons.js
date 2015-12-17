window.jQuery = window.$ = require('jquery');

module.exports = function(){
  var tw = '<script async src="//platform.twitter.com/widgets.js" id="twitter-wjs"><\/script>';
  var fb = '<script src="//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0" id="facebook-jssdk" async><\/script>';
  var gp = '<script src="//apis.google.com/js/platform.js" async><\/script>';

  $('#snsButtons').append(tw + fb + gp);
};