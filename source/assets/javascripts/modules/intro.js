window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');

module.exports = function(onComplete){
  var $loader = $('#loadingLoader');
  var $text01 = $('#loadingText01');
  var $text02 = $('#loadingText02');

  // ローディング消す
  setTimeout(function(){
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