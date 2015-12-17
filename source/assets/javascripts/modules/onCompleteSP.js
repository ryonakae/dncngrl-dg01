window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);


module.exports = function(){
  var $model = $('#model');
  var $text = $('#text, #subText');

  // ローディング消す
  setTimeout(function(){
    $('#loadingLoader').css({ 'display':'none' });
  }, 500);

  // アイキャッチとテキストのフェードイン
  $model.imagesLoaded(function(){
    // modelのフェードイン
    // スマホ時だけ、velocityだとtransformがバグるのでanimateで
    setTimeout(function(){
      $model.animate({
        'opacity': 1,
        'top': 0
      }, 500, 'swing');
    }, 1500);

    // テキストのフェードイン
    // スマホ時だけ、velocityだとtransformがバグるのでanimateで
    setTimeout(function(){
      $text.animate({ 'opacity':1 }, 500, 'swing');
    }, 1500);

    // snsボタン読み込み
    setTimeout(require('./loadSnsButtons.js'), 2000);
  });
};