window.jQuery = window.$ = require('jquery');

module.exports = function(url){
  var img = new Image();
  img.src = url;
  $(img).on('load', function(){
    $('.eyecatch__modelList').prepend($(img));
    // $(img).appendTo($('.eyecatch__modelList'));
  });
};