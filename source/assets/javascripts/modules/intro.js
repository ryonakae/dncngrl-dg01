'use strict';

window.jQuery = window.$ = require('jquery');
const velocity = require('velocity-animate');

module.exports = (onComplete) => {
  const $loader = $('#loadingLoader');
  const $text01 = $('#loadingText01');
  const $text02 = $('#loadingText02');

  // ローディング消す
  setTimeout(() => {
    $loader.css({ 'display':'none' });
  }, 500);

  // 1つめのテキスト出す
  $text01.velocity({
    opacity: 1
  }, {
    display: 'block',
    delay: 2000,
    duration: 0,
    complete: function(){
      // 1つ目のテキスト消す
      $(this).velocity({
        opacity: 0
      }, {
        display: 'none',
        delay: 1000,
        duration: 0
      });
    }
  }).bind(this);

  // 2つ目のテキスト出す
  $text02.velocity({
    opacity: 1
  }, {
    display: 'block',
    delay: 4000,
    duration: 0,
    complete: function(){
      // 2つ目のテキスト消す
      $(this).velocity({
        opacity: 0
      }, {
        display: 'none',
        delay: 1000,
        duration: 0,
        // 完了時に引数に入れた関数実行
        complete: onComplete
      });
    }
  }).bind(this);
}