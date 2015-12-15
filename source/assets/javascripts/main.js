'use strict';

(function(){


// require
window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);


$('.eyecatch__model').imagesLoaded(function(){
  console.log('model loaded');

  $('.eyecatch__model').velocity({
    opacity: 1
  }, {
    duration: 1200,
    easing: 'ease',
    complete: rotateModel
  });
});


function rotateModel(){
  var $stage = $('.eyecatch');
  var $sprite = $('.eyecatch__modelList');
  var spriteSize = $sprite.children().eq(0).height();
  var spriteNumber = 30;
  var spritePage = 0;
  var pageX = 0;
  // var thinMove = $stage.width() / spriteNumber * 0.5;
  var thinMove = 10;

  $stage.on('mouseenter', function(e){
    pageX = e.pageX;
  });

  $stage.on('mousemove', function(e){
    console.log('spritePage: ', spritePage);

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

    $sprite.velocity({
      translateY: '-' + spriteSize * spritePage +  'px 0'
    }, {
      duration: 0
    });
  });
};


})();