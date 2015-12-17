window.jQuery = window.$ = require('jquery');
var UAParser = require('ua-parser-js');
var parser = new UAParser();
var ua = parser.getResult();
var async = require('async');

module.exports = function(){
  // 画像一覧取得：スマホの時は最初の1枚だけ
  var imageList = [];
  if( ua.device.type === 'mobile' || ua.device.type === 'tablet' ){
    imageList = ['00'];
  } else {
    imageList = [
      '00', '01', '02', '03', '04', '05',
      '06', '07', '08', '09', '10', '11',
      '12', '13', '14', '15', '16', '17',
      '18', '19', '20', '21', '22', '23',
      '24', '25', '26', '27', '28', '29',
      '30'
    ];
  }

  // imgタグを生成して画像を読み込む
  var images = '';
  for(var i = 0; i < imageList.length; i++){
    var url = './assets/images/model/model_'+imageList[i]+'.png';
    // var url = '//file.brdr.jp/dncngrl_01/images/model/model_'+imageList[i]+'.png';
    images += '<img src="' + url + '" />';
  }
  $('#modelList').html(images);
};