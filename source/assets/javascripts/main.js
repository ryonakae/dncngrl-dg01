'use strict';

(function(){


window.jQuery = window.$ = require('jquery');
var imagesLoaded = require('imagesloaded');
var velocity = require('velocity-animate');

imagesLoaded.makeJQueryPlugin($);
$('.gallery').imagesLoaded(function(){
  console.log('gallery loaded');
  $("body").velocity({ opacity: 0 }, { duration: 1000 });
});


})();