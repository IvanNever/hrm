$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-arrow.png" alt="prev-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next-arrow.png" alt="next-arrow"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
        ],
    });
  });