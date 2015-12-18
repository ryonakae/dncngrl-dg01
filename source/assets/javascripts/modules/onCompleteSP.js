'use strict';

window.jQuery = window.$ = require('jquery');
const velocity = require('velocity-animate');
const imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);
const transition = require('jquery.transit');


module.exports = () => {
  const $model = $('#model');
  const $text = $('#text, #subText');

  // ローディング消す
  setTimeout(() => {
    $('#loadingLoader').css({ 'display':'none' });
  }, 500);

  // アイキャッチとテキストのフェードイン
  // スマホ時だけ、velocityだとtransformがバグるのでjquery.transitで
  $model.imagesLoaded(() => {
    // modelのフェードイン
    $model.transition({
      opacity: 1,
      top: 0,
      delay: 1500
    }, 800, 'easeOutExpo');

    // テキストのフェードイン
    $text.transition({
      opacity: 1,
      delay: 1500
    }, 800, 'ease');

    // snsボタン読み込み
    setTimeout(require('./loadSnsButtons.js'), 2000);
  });
};