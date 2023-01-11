$(function() {
    if (window.matchMedia("(min-width: 1126px)").matches) {
        $('.p-curriculum__image').addClass('fadeInRight')
        $('.p-message__ourMessage').addClass('action-up')
    }else{
        $('.p-curriculum__image').removeClass('fadeInRight')
        $('.p-curriculum__image').addClass('slideAnimation-1')
    }

    $('.slideAnimation-1').slick({
        infinite: true,
        autoplay: true,
        arrows:false,
    })

    $(window).scroll(function() {
        $('.action-up').each(function() {
            let position = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if(scroll > position - windowHeight) {
                $(this).addClass("fadeInUp")
            }
        })
        $('.action-left').each(function() {
            let position = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if(scroll > position - windowHeight) {
                $(this).addClass("fadeInLeft")
            }
        })
        $('.action-right').each(function() {
            let position = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if(scroll > position - windowHeight) {
                $(this).addClass("fadeInRight")
            }
        })
        $('.p-service__img__left').each(function() {
            let position = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if(scroll > position - windowHeight) {
                $(this).addClass("slide__view__left")
            }
        })
        $('.p-service__img__right').each(function() {
            let position = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if(scroll > position - windowHeight) {
                $(this).addClass("slide__view__right")
            }
        })
    })
})

