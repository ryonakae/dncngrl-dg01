'use strict';

window.jQuery = window.$ = require('jquery');
const UAParser = require('ua-parser-js');
const parser = new UAParser();
const ua = parser.getResult();

(() => {

// ページ読み込み後の処理
$(() => {
  init();
});


// 初期化関数
let init = () =>{
  // アイキャッチの画像取得
  require('./modules/getImages.js')();

  // ちょい遅延させてローディング出す
  setTimeout(() => {
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