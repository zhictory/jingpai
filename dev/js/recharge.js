$(function(){

  let submit = $('.j_submit');
  // 选择金额
  $('.recharge__money').on('click', '.recharge__money-item', function() {
    let item = $(this);
    let money = item.attr('data-value');
    let moneyObj = $('.j_showMoney');
    item.addClass('recharge__money-item--on').siblings('.recharge__money-item').removeClass('recharge__money-item--on');
    moneyObj.html(money+'拍币');
    $('.j_money').val(money);
  });
  // 输入金额
  $('.recharge__money').on('input', 'input[name=money]', function() {
    let item = $(this);
    let moneyObj = $('.j_showMoney');
    moneyObj.html(item.val()+'拍币');
    $('.j_money').val(item.val());
  });
  // 选择付款方式
  $('.recharge__way').on('click', '.recharge__way-item', function() {
    let item = $(this);
    item.addClass('recharge__way-item--on').siblings('.recharge__way-item').removeClass('recharge__way-item--on');
  });
  // 验证金额
  let validate = () => {
    let money = $('.j_money');
    let protocol = $('input[name=protocol]');
    if (!/^\d+$/.test(money.val())) {
      return false;
    }
    if (!protocol.is(':checked')) {
      return false;
    }
    return true;
  }
  // 提交按钮
  submit.on('click', ()=>{
    if (validate()) {
      $('.j_form').submit();
    }
  });



});