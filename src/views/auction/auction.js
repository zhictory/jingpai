/**
 * 竞拍列表页
 * @author zhangzhensheng
 * @date 2017-12-5
 */
let type = location.search && location.search.match(/type=([^&]*)(?=&?)/)[1];
let typeObj = $('.auction__nav-item');

type = Number.isInteger(parseInt(type)) ? parseInt(type) : 0;
typeObj.eq(type).addClass('auction__nav-item--on');

$('.goback').on('click', (e)=>{
    e.preventDefault();
    location.href = '/member.html';
});