window.jQuery = window.$ = require('jquery');

module.exports = function(){
  // 画像一覧取得：スマホの時は最初の1枚だけ
  var imageList = [];
  if( require('./isMobile.js')() ){
    console.log('is mobile');
    imageList = ['00'];
  } else {
    console.log('is pc');
    imageList = [
      '00', '01', '02', '03', '04', '05',
      '06', '07', '08', '09', '10', '11',
      '12', '13', '14', '15', '16', '17',
      '18', '19', '20', '21', '22', '23',
      '24', '25', '26', '27', '28', '29',
      '30'
    ];
  }

  // 画像を読み込む
  var images = '';
  for(var i = 0; i < imageList.length; i++){
    var url = './assets/images/model/model_'+imageList[i]+'.png';
    // var url = '//file.brdr.jp/dncngrl_01/images/model/model_'+imageList[i]+'.png';
    images += '<img src="' + url + '" />';
  }
  $('#modelList').html(images);
};