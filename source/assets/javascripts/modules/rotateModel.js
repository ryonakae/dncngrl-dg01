'use strict';

window.jQuery = window.$ = require('jquery');
const velocity = require('velocity-animate');

module.exports = () => {
  const $stage = $('#eyecatch');
  const $model = $('#model');
  const $sprite = $('#modelList');
  let spriteSize = $sprite.children().eq(0).height();
  const spriteNumber = 30;
  let spritePage = 0;
  let pageX = 0;
  const thinMove = 5;

  $stage.on('mousedown', (e) => {
    $model.css({ 'top': '5px' });

    $('body').addClass('is-draggable');
    pageX = e.pageX;

    $stage.on('mousemove.rotateModel', (e) => {
      if(e.pageX >= pageX + thinMove){
        pageX = e.pageX;

        if(spritePage < spriteNumber){
          spritePage++;
        }else{
          spritePage = 0;
        };
      }else if(e.pageX <= pageX - thinMove){
        pageX = e.pageX;

        if(spritePage >= 0){
          spritePage--;
        }else{
          spritePage = spriteNumber;
        };
      };

      $sprite.css({ 'top': '-' + spriteSize * spritePage +  'px' });
    });

    $(document).on('mouseleave', (e) => {
      $model.css({ 'top': 0 });
      $stage.off('.rotateModel');
      $('body').removeClass('is-draggable');
    });
    $(document).on('mouseup', (e) => {
      $model.css({ 'top': 0 });
      $stage.off('.rotateModel');
      $('body').removeClass('is-draggable');
    });
  });


  // リサイズ時：リセットする
  $(window).on('resize', () => {
    // スプライト画像の高さ再取得する
    spriteSize = $sprite.children().eq(0).height();

    // 高さリセット
    $sprite.css({ 'top': '0px' });
  });
};