window.jQuery = window.$ = require('jquery');

module.exports = function(callback){
  var tw = '<script async src="//platform.twitter.com/widgets.js" id="twitter-wjs"><\/script>';
  var fb = '<script src="//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0" id="facebook-jssdk" async><\/script>';
  var gp = '<script src="//apis.google.com/js/platform.js" async><\/script>';

  $('#snsButtons').append(tw + gp + fb);

  var checkerID;

  checkerID = setInterval(checker, 50);

  function checker(){
    // Facebook JavaScript SDKのロード完了したら処理実行
    if( window.FB ) {
      clearInterval(checkerID);
      // likeボタンのレンダリングが完了したら処理実行
      FB.Event.subscribe('xfbml.render', callback);
    }
  }
};