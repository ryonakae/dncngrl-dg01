'use strict';

(function(){

// require npm package
window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);
var isPc = require('./modules/isPc.js');
var intro = require('./modules/intro.js');


// ページ読み込み後の処理
$(function(){
  init();
});


// 初期化関数
function init(){
  // アイキャッチの画像取得
  require('./modules/getImages.js')();

  // ちょい遅延させてローディング出す
  setTimeout(function(){
    $('.eyecatch__loading00').addClass('is-animation');
  }, 500);
  onComplete();
};


// 画像読み込み完了時に実行する関数
function onComplete(){
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
          // PCだけ回転&浮遊&パララックス有効化
          if(isPc){
            require('./modules/parallax.js')();
            require('./modules/rotateModel.js')();
            setTimeout(function(){
              $model.addClass('is-animation');
            }, 1000);
          }
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
}


})();