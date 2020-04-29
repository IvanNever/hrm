$(document).ready(function(){

    //Slider
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-arrow.png" alt="prev-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next-arrow.png" alt="next-arrow"></button>',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
        ],
    });

    //Catalog tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
    function toggleSlide (item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, .modal').fadeOut('slow');
    });
    $('.button_mini').each( function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    //Validation
    function valideForm (form) {
        $(form).validate({
            rules: {
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                name: 'Пожалуйста введите свое имя',
                phone: 'Пожалуйста укажите номер телефона',
                email: {
                    required: 'Пожалуйста введите свою почту',
                    email: 'Укажите правильный адрес почты'
                },
            },
        });
    };
    valideForm('#consultation-form');
    valideForm('#consultation form');
    valideForm('#order form');

    //Phone number input mask
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    //Send mail
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done( function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #success').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });


  });