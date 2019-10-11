(function($) {
    "use strict";

    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // Preloader 
    $('body').addClass('preloader-active');
    $(window).on('load', function() {
        $('.preloader').fadeOut();
        $('.preloader-spinner').delay(550).fadeOut('slow');
        $('body').removeClass('preloader-active');
    });

    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.test-img-active'
    });
    $('.test-img-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-active',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0
    });

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // WOW active
    new WOW().init();

    //Scroll top 
    $(".scroll-top").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 180) {
            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut();
        }
    });


})(jQuery);