// 每秒加价
var item = $('.list__goods-item');
setInterval(function() {
  var ranIdx = Math.floor(Math.random()*item.length);
  var priceObj = $(item[ranIdx]).find('.j_price');
  var price = priceObj.html().slice(1);
  priceObj.html('&yen;'+(price/1.0+0.1).toFixed(2));
  priceObj.css('background', '#ff2d4a');
  setTimeout(function(){
    priceObj.css('background', '#fff');
    priceObj.addClass('change-bg');
  },200);
}, 1000);