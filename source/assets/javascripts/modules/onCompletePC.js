window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);
var intro = require('./intro.js');


module.exports = function(){
  var $model = $('#model');
  var $text = $('#text, #subText');

  // アイキャッチの回転有効化
  $model.imagesLoaded(function(){
    // イントロ再生&再生後の処理
    intro(function(){
      // アイキャッチのフェードインと回転有効化
      $model.velocity({
        opacity: 1,
        top: 0
      }, {
        duration: 500,
        delay: 1500,
        easing: 'ease',
        complete: function(){
          require('./parallax.js')();
          require('./rotateModel.js')();
          setTimeout(function(){
            $model.addClass('is-animation');
          }, 1000);
          // snsボタン読み込み
          require('./loadSnsButtons.js')();
        }
      });

      // テキストのフェードイン
      $text.velocity({
        opacity: 1
      }, {
        duration: 500,
        delay: 1500,
        easing: 'ease'
      });
    });
  });
};