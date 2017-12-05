/**
 * 我的财产页
 * @author zhangzhensheng
 * @date 2017-12-5
 */
let type = location.search && location.search.match(/type=([^&]*)(?=&?)/)[1];
let typeObj = $('.wallet__nav-item');
let listObj = $('.wallet__list');

type = Number.isInteger(parseInt(type)) ? parseInt(type) : 0;
typeObj.eq(type).addClass('wallet__nav-item--on');
listObj.eq(type).removeClass('hidden');

$('.goback').on('click', (e)=>{
    e.preventDefault();
    location.href = '/member.html';
});