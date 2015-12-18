'use strict';

window.jQuery = window.$ = require('jquery');
const velocity = require('velocity-animate');

module.exports = () => {
  const $stage = $('#eyecatch');
  const $modelInner = $('#modelInner');
  const $textInner = $('#textInner');
  let pageX = 0;
  let pageY = 0;
  let winW = $(window).width();
  let winH = $(window).height();

  $(window).on('resize', () => {
    winW = $(window).width();
    winH = $(window).height();
  });

  $stage.on('mouseenter', (e) => {
    parallax();

    $(document).on('mousedown', (e) => {
      $stage.off('.parallax');
    });

    $(document).on('mouseup', (e) => {
      parallax();
    });
  });

  let parallax = () => {
    $stage.on('mousemove.parallax', (e) => {
      // ウインドウ中心からの座標
      pageX = e.clientX - winW/2;
      pageY = e.clientY - winH/2;

      // textのパララックス
      $textInner.velocity({
        translateZ: 0,
        translateY: pageY * -0.02,
        translateX: pageX * -0.03
      }, {
        queue: false,
        duration: 400,
        easing: 'easeOutExpo'
      });

      // modelのパララックス
      $modelInner.velocity({
        translateZ: 0,
        translateY: pageY * -0.007,
        translateX: pageX * -0.01
      }, {
        queue: false,
        duration: 400,
        easing: 'easeOutExpo'
      });
    });
  };
};