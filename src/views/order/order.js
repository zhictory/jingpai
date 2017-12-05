/**
 * 差价购买订单页
 * @author zhangzhensheng
 * @date 2017-12-5
 */
let type = location.search && location.search.match(/type=([^&]*)(?=&?)/)[1];
let typeObj = $('.order__nav-item');

type = Number.isInteger(parseInt(type)) ? parseInt(type) : 0;
typeObj.eq(type).addClass('order__nav-item--on');

switch (type) {
    case 0:
        $('.order__item').removeClass('hidden');
        break;
    case 1:
        $('.order__item[data-status=unpaid]').removeClass('hidden');
        break;
    case 2:
        $('.order__item[data-status=shipping]').removeClass('hidden');
        break;
    case 3:
        $('.order__item[data-status=recieved]').removeClass('hidden');
        break;
    default:
        $('.order__item').removeClass('hidden');
        break;
}

$('.goback').on('click', (e)=>{
    e.preventDefault();
    location.href = '/jingpai/dev/member.html';
});