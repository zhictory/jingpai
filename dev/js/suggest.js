$('input[name=submitbtn]').on('click', function(e) {
  e.preventDefault();
  var phone = $('input[name=phone]');
  var content = $('textarea[name=content]');
  if (phone.val() === '') {
    alert('手机号码不能为空');
    return false;
  }
  console.log(content.val());
  if (content.val() === '') {
    alert('投诉建议内容不能为空');
    return false;
  }
  $('.j_suggestForm').submit();

});