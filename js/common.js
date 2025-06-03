$('[name="phone"]').mask('+7 (999) 999-99-99');

// hidden list > 3
$('.list-advantages').each(function () {
  if ($(this).find('.list-advantages-item').length > 3) {
    $(this).find('.list-advantages-item').slice(3).hide();
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

$('.btn-load-products').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.row-catalog').find('.product-col:hidden').slice(0, 3).slideDown();

  var onBlock = $(this).parents('.row-catalog').find('.product-col:hidden').length;
  if (onBlock <= 0) {
    $(this).hide();
  }
});

$('.brand-card-all').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.brands-row').find('.brand-col:hidden').slice(0, 2).slideDown();

  var onBlock = $(this).parents('.brands-row').find('.brand-col:hidden').length;
  if (onBlock <= 0) {
    $(this).hide();
  }
});
// show list all


// show list all reviews
$('.link-load-more').on('click', function (e) {
  e.preventDefault();

  var
    $this = $(this),
    content = $(this).parents('.reviews-card').find('.box-text'),
    content2 = $(this).parent('.page-brand');

  if (!$this.hasClass('trigger')) {
    $this.addClass('trigger');
    $this.hide();

    content.addClass('open');
    content2.addClass('open');
  } else {
    $this.removeClass('trigger');
    // $this.find('span').html('Показать еще');

    content.removeClass('open');
    content2.removeClass('open');
  }
});

// hidden list > 5
$('.brand-text-description').each(function () {
  if ($(this).length > 6) {
    $(this).find('li').slice(6).hide();
    $(this).parent('.submenu').append('<button class="box-dots">Показать ещё</button>');
  }
});

// hidden list > 5

// show list all
$('.box-dots').on('click', function (e) {
  e.preventDefault();

  var
    $this = $(this),
    content = $(this).parent().find('ul li');


  if (!$this.hasClass('trigger')) {
    $this.addClass('trigger');
    $this.html('Скрыть');

    content.slideDown();
  } else {
    $this.removeClass('trigger');
    $this.html('Показать ещё');

    content.slice(6).slideUp();
  }
});
// show list all

// slick slider
$('.hits-slider').slick({
  slidesToShow: 3,
  arrows: true,
  appendArrows: '.hits-slider-arrows',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    }
  ]
});

$('.home-slider').slick({
  slidesToShow: 1,
  fade: true,
  dots: true,
  asNavFor: '.home-slider-image',
  appendDots: '.home-slider-arrows',
  appendArrows: '.home-slider-arrows',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        asNavFor: false,
      }
    }
  ]
});


$('.home-slider-image').slick({
  slidesToShow: 1,
  fade: true,
  arrows: false,
  swipe: false,
  swipeToSlide: false,
});

$('.article-slider').slick({
  slidesToShow: 3,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.product-gallery-max').slick({
  slidesToShow: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-gallery-preview',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
      }
    }
  ]
});

$('.product-gallery-preview').slick({
  slidesToShow: 3,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  vertical: true,
  asNavFor: '.product-gallery-max',
  focusOnSelect: true
});

// mobile menu
$('.btn-burger').on('click', function (e) {
  e.preventDefault();
  $('html, body').toggleClass('no-scroll');
  $(this).toggleClass('click');
  $('.mobile-menu').fadeToggle();
});

// fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// amount
$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click",function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});
$('.amount input').on('input', function () {
	$(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});