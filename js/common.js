$('[name="phone"]').mask('+7 (999) 999-99-99');

// hidden list > 3
$('.list-advantages').each(function () {
  if ($(this).find('.list-advantages-item').length > 3) {
    $(this).find('.list-advantages-item').slice(3).hide();
    // $(this).parent('.modal-body').append('<div class="text-center load-more-wrap"><button class="btn btn-default">Загрузить еще</button></div>');
  }

});

// hidden list > 3

// show list all
$('.btn-toggler').on('click', function (e) {
  e.preventDefault();
  $(this).prev('.list-advantages').find('.list-advantages-item:hidden').slice(0, 3).slideDown();

  var onBlock = $(this).prev('.list-advantages').find('.list-advantages-li:hidden').length;
  if (onBlock <= 0) {
    $(this).hide();
  }
});

// show list all