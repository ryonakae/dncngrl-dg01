'use strict';

(function(){

// require npm package
window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);
var UAParser = require('ua-parser-js');
var parser = new UAParser();
var ua = parser.getResult();
var async = require('async');

// require module
var loadImage = require('./modules/loadImage.js');

// 画像一覧
// スマホの時は最初の1枚だけ
var imageList = [];

if( isMobile() ){
  console.log('is mobile');
  imageList = ['00'];
} else {
  console.log('is pc');
  imageList = ['09', '08', '07', '06', '05', '04', '03', '02', '01', '00'];
}

// 画像を読み込む
var imageUrlList = [];
async.each(imageList, function(i, callback){
  var img = new Image();
  img.src = './assets/images/model/model_'+i+'.png';
  imageUrlList = imageUrlList.push(img);
  callback();
}, function complete(err){
  console.log('all done');
  console.log(imageUrlList);
});

// 初期化関数
function init(){
  // アイキャッチのmodelのロードと回転有効化
  $('.eyecatch__model').imagesLoaded(function(){
    $('.eyecatch__model').velocity({
      opacity: 1
    }, {
      duration: 1000,
      delay: 500,
      easing: 'ease',
      complete: require('./modules/rotateModel.js')
    });
  });
};

// スマホ&タブレット判別関数
function isMobile(){
  if( ua.device.type === 'mobile' || ua.device.type === 'tablet' ){
    return true;
  }
}


})();