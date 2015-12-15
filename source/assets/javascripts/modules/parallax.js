window.jQuery = window.$ = require('jquery');

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

    $(document).on('mouseup', function(e){
      parallax();
    });
  });

  function parallax(){
    $stage.on('mousemove.parallax', function(e){
      // ウインドウ中心からの座標
      pageX = e.clientX - winW/2;
      pageY = e.clientY - winH/2;
      console.log(pageX, pageY);

      // textのパララックス
      $text.css({
        marginTop: pageY * -0.02,
        marginLeft: pageX * -0.02
      });

      // modelのパララックス
      $model.css({
        marginTop: pageY * -0.005,
        marginLeft: pageX * -0.005
      });
    });

    $(document).on('mousedown', function(e){
      $stage.off('.parallax');
    });
  };
};