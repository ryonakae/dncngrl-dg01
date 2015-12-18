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
        duration: 800,
        delay: 1500,
        easing: 'easeOutExpo',
        complete: function(){
          require('./parallax.js')();
          require('./rotateModel.js')();
          // snsボタン読み込み
          require('./loadSnsButtons.js')(function(){
            // likeボタンのレンダリング完了したらCSSアニメーション開始
            $model.addClass('is-animation');
            $drag.addClass('is-animation');
          });
        }
      });

      // テキストのフェードイン
      $text.velocity({
        opacity: 1
      }, {
        duration: 800,
        delay: 1500,
        easing: 'ease'
      });
    });
  });
};