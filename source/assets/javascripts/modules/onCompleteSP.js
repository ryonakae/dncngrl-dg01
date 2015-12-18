window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);
var transition = require('jquery.transit');


module.exports = function(){
  var $model = $('#model');
  var $text = $('#text, #subText');

  // ローディング消す
  setTimeout(function(){
    $('#loadingLoader').css({ 'display':'none' });
  }, 500);

  // アイキャッチとテキストのフェードイン
  // スマホ時だけ、velocityだとtransformがバグるのでjquery.transitで
  $model.imagesLoaded(function(){
    // modelのフェードイン
    $model.transition({
      opacity: 1,
      top: 0,
      delay: 1500
    }, 800, 'easeOutExpo');

    // テキストのフェードイン
    $text.transition({
      opacity: 1,
      delay: 1500
    }, 800, 'ease');

    // snsボタン読み込み
    setTimeout(require('./loadSnsButtons.js'), 2000);
  });
};