$(document).on('click', '.j_helpItem', function() {
  let item = $(this);
  item.find('p').toggleClass('hidden');
});