TouchSlide({ slideCell: '#j_itemSlider', titCell: '.hd ul', autoPage: '<li></li>', autoPlay: true });

$('.item__tab-item').on('click', function(e) {
  e.preventDefault();
  var idx = $('.item__tab-item').index($(this));
  $(this).addClass('item__tab-item--on').siblings('.item__tab-item').removeClass('item__tab-item--on');
  $('.j_tabContent:eq('+idx+')').removeClass('hidden').siblings('.j_tabContent').addClass('hidden');
});

var count = $('input[name=count]');
$('.j_minus').on('click', function(e) {
  e.preventDefault();
  var val = count.val();
  count.val(--val);
  if (val === -1) {
    count.val(0);
  }
});
$('.j_plus').on('click', function(e) {
  e.preventDefault();
  var val = count.val();
  count.val(++val);
});