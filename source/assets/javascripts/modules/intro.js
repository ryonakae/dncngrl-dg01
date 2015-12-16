window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');

module.exports = function(onComplete){
  // ローディング消す
  setTimeout(function(){
    $('.eyecatch__loading00').removeClass('is-animation');
  }, 500);

  // 1つめのテキスト出す
  $('.eyecatch__loading01').velocity({
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
  $('.eyecatch__loading02').velocity({
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