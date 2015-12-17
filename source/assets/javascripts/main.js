'use strict';

(function(){

window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);
var UAParser = require('ua-parser-js');
var parser = new UAParser();
var ua = parser.getResult();
var async = require('async');
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
    $('#loadingLoader').css({ 'display':'block' });
  }, 500);
  // ローディング出したあとの処理
  // PCとSPで分岐
  if( ua.device.type === 'mobile' || ua.device.type === 'tablet' ) onCompleteSP();
  else onCompletePC();
};


// 画像読み込み完了時に実行する関数：PC
function onCompletePC(){
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
          require('./modules/parallax.js')();
          require('./modules/rotateModel.js')();
          setTimeout(function(){
            $model.addClass('is-animation');
          }, 1000);
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


// 画像読み込み完了時に実行する関数：SP
function onCompleteSP(){
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
      easing: 'ease'
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
}


})();