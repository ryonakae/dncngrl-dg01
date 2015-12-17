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
    // アイキャッチのフェードイン
    $model.velocity({
      opacity: 1,
      top: 0
    }, {
      duration: 500,
      delay: 2000,
      easing: 'ease',
      complete: function(){
        // snsボタン読み込み
        require('./loadSnsButtons.js')();
      }
    });

    // テキストのフェードイン
    $text.velocity({
      opacity: 1
    }, {
      duration: 500,
      delay: 2000,
      easing: 'ease'
    });
  });
};