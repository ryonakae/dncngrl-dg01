'use strict';

(function(){

window.jQuery = window.$ = require('jquery');
var UAParser = require('ua-parser-js');
var parser = new UAParser();
var ua = parser.getResult();


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
  if( ua.device.type === 'mobile' || ua.device.type === 'tablet' ) {
    require('./modules/onCompleteSP.js')();
  }
  else {
    require('./modules/onCompletePC.js')();
  }
};

})();