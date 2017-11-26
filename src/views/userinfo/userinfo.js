var nameInput = $('<div class="userinfo__form-item"><input class="userinfo__name" type="text" name="username" value="'+$('.j_name .userinfo__ct').text()+'" placeholder="昵称"/></div>');
var phoneInput = $('<div class="userinfo__form-item"><input class="userinfo__phone" type="text" name="phone" value="'+$('.j_phone .userinfo__ct').text()+'" placeholder="手机号"/></div><div class="userinfo__form-item"><input class="userinfo__code" type="text" name="code" value="" placeholder="验证码"/><a class="userinfo__send j_send">发送验证码</a></div>');
$('.userinfo__list').on('click', '.j_name', (e)=>{
    e.preventDefault();
    var d = dialog({
        title: '修改昵称',
        content: nameInput,
        okValue: '修改',
        ok: function () {
            this.title('提交中…');
            return false;
        },
        cancelValue: '取消',
        cancel: function () {}
    });
    d.showModal();
});
$('.userinfo__list').on('click', '.j_phone', (e)=>{
    e.preventDefault();
    var d = dialog({
        title: '绑定手机',
        content: phoneInput,
        width: 280,
        okValue: '绑定',
        ok: function () {
            this.title('绑定中…');
            return false;
        },
        cancelValue: '取消',
        cancel: function () {}
    });
    d.showModal();
});
$(document).on('click', '.j_send', (e)=>{
    e.preventDefault();
    $('.j_send').html('已发送');
});