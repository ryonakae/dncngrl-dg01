window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');

module.exports = function(){
  var $stage = $('.eyecatch');
  var $model = $('.eyecatch__model');
  var $text = $('.eyecatch__text');
  var pageX = 0;
  var pageY = 0;
  var winW = $(window).width();
  var winH = $(window).height();

  $(window).on('resize', function(){
    winW = $(window).width();
    winH = $(window).height();
  });

  $stage.on('mouseenter', function(e){
    parallax();

    $(document).on('mousedown', function(e){
      $stage.off('.parallax');
    });

    $(document).on('mouseup', function(e){
      parallax();
    });
  });

  function parallax(){
    $stage.on('mousemove.parallax', function(e){
      // ウインドウ中心からの座標
      pageX = e.clientX - winW/2;
      pageY = e.clientY - winH/2;

      // textのパララックス
      $text.velocity({
        marginTop: pageY * -0.01,
        marginLeft: pageX * -0.02
      }, {
        queue: false,
        duration: 400,
        easing: 'easeOutExpo'
      });

      // modelのパララックス
      $model.velocity({
        marginTop: pageY * 0.004,
        marginLeft: pageX * 0.008
      }, {
        queue: false,
        duration: 400,
        easing: 'easeOutExpo'
      });
    });
  };
};