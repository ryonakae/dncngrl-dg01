window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);
var intro = require('./intro.js');


module.exports = function(){
  var $model = $('#model');
  var $text = $('#text, #subText');
  var $drag = $('#eyecatchDrag');

  // アイキャッチの回転有効化
  $model.imagesLoaded(function(){
    // イントロ再生&再生後の処理
    intro(function(){
      // modelのフェードインと回転有効化
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

      // dragのフェードイン
      $drag.velocity({
        opacity: 1
      }, {
        display: 'block',
        duration: 500,
        delay: 1500,
        easing: 'ease',
        complete: function(){
          // 点滅アニメーション開始
          $(this).addClass('is-animation');
        }
      }).bind(this);
    });
  });
};