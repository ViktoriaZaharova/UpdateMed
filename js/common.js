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
  $(this).parents('.page-favorite').find('.product-col:hidden').slice(0, 3).slideDown();

  var onBlock = $(this).parents('.page-favorite').find('.product-col:hidden').length;
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
    content = $(this).parents('.reviews-card').find('.box-text');

  if (!$this.hasClass('trigger')) {
    $this.addClass('trigger');
    $this.find('span').html('Скрыть');

    content.addClass('open');
  } else {
    $this.removeClass('trigger');
    $this.find('span').html('Показать еще');

    content.removeClass('open');
  }
});

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


// mobile menu
$('.btn-burger').on('click', function(e){
  e.preventDefault();
  $('html, body').toggleClass('no-scroll');
  $(this).toggleClass('click');
  $('.mobile-menu').fadeToggle();
});

// fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});