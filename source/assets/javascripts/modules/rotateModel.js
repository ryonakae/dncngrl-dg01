window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');

module.exports = function(){
  var $stage = $('#eyecatch');
  var $model = $('#model');
  var $sprite = $('#modelList');
  var spriteSize = $sprite.children().eq(0).height();
  var spriteNumber = 30;
  var spritePage = 0;
  var pageX = 0;
  var thinMove = 5;

  $stage.on('mousedown', function(e){
    $model.css({ 'top': '5px' });

    $('body').addClass('is-draggable');
    $model.addClass('is-animation_paused');
    pageX = e.pageX;

    $stage.on('mousemove.rotateModel', function(e){
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

    $(document).on('mouseleave', function(e){
      $model.css({ 'top': 0 });
      $stage.off('.rotateModel');
      $('body').removeClass('is-draggable');
      $model.removeClass('is-animation_paused');
    });
    $(document).on('mouseup', function(e){
      $model.css({ 'top': 0 });
      $stage.off('.rotateModel');
      $('body').removeClass('is-draggable');
      $model.removeClass('is-animation_paused');
    });
  });
};