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
    $model.velocity({
      opacity: 1,
      top: 0
    }, {
      duration: 500,
      delay: 1500,
      easing: 'ease',
      complete: function(){
        // snsボタン読み込み
        require('./loadSnsButtons.js')();
      }
    });

    // テキストのフェードイン
    // スマホ時だけ、velocityだとtransformがバグるのでanimateで
    setTimeout(function(){
      $text.animate({ 'opacity':1 }, 500, 'swing');
    }, 1500);
  });
};