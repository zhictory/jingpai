$('.j_getCode').on('click', function(){

  var phone = $('input[name=phone]');
  
  if (/^\d{11}$/.test(phone.val())) {
    $.ajax({
      url: '',
      data: $('input[name=phone]').val(),
      success: function() {
        alert('正在获取');
      },
      error: function() {
  
      }
    });
  } else {
    alert('手机号码有误');
  }

});