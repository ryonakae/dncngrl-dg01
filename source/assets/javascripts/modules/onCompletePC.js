'use strict';

window.jQuery = window.$ = require('jquery');
const velocity = require('velocity-animate');
const imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);
const intro = require('./intro.js');


module.exports = () => {
  const $model = $('#model');
  const $text = $('#text, #subText');
  const $drag = $('#eyecatchDrag');

  // アイキャッチの回転有効化
  $model.imagesLoaded(() => {
    // イントロ再生&再生後の処理
    intro(() => {
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