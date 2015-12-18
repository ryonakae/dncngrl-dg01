'use strict';

window.jQuery = window.$ = require('jquery');

module.exports = (callback) => {
  const tw = '<script async src="//platform.twitter.com/widgets.js" id="twitter-wjs"><\/script>';
  const fb = '<script src="//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0" id="facebook-jssdk" async><\/script>';
  const gp = '<script src="//apis.google.com/js/platform.js" async><\/script>';

  $('#snsButtons').append(tw + gp + fb);

  const checkerID = setInterval(checker, 50);

  // ES6のアロー関数で書くとなぜか動かないので今までどおりに書く
  function checker(){
    // Facebook JavaScript SDKのロード完了したら処理実行
    if( window.FB ) {
      // checker止める
      clearInterval(checkerID);
      // likeボタンのレンダリングが完了したら処理実行
      FB.Event.subscribe('xfbml.render', callback);
    }
  }
};