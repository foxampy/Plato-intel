$(document).ready(function(){
//CUSTOM JS LUTOVICH//
//validation close
$('._js-b-close-validation-alert').on('click', function () {
    $('._js-validation-alert').addClass('hide');
    return false;
});
//cookie close
$('._js-b-cookie-alert').on('click', function () {
    $('._js-cookie-alert').addClass('hide');
    return false;
});
//b-wrapper min-height
$(window).on('resize scroll load', function () {
    var footer_H = $('.s-footer').height();
    var b_wrapper_H = $(window).height() - footer_H;
    $('.b-wrapper').css("min-height" , ""+b_wrapper_H +"px");
});
//device type
$(window).on('scroll resize load', function () {
    var touchscreen = jQuery.browser.mobile;
    if (touchscreen) {
        $('body').addClass('_touch');
        $('body').removeClass('_desk');
    }
    else {
        $('body').removeClass('_touch');
        $('body').addClass('_desk');
     }
});
//article scroll tables mobile
    $(document).each(function(e){
        $('article table').wrap('<div class="w-scrollable-table-shades"><div class="w-scrollable-table"></div></div>');
    });
//article float images mobile
    $('article img').each(function(e){
        if($(this).css('float') === 'left'){$(this).addClass('img-article-left');} 
        if($(this).css('float') === 'right'){$(this).addClass('img-article-right');} 
    });
//article fancy images
    $(function(){
        $('._js-article-fancy-images img').each(function () {
            var $this = $(this);
            var $thisparentdatafancy = $(this).parents('._js-article-fancy-images').attr('data-images-fancy')
            $this.wrap('<a class="block__link grouped_elements" data-fancybox="' + $thisparentdatafancy + '" rel="" href="' + $this.attr('src') + '" title="' + $this.attr('alt') + '"></a>');
        });
    });
//pop open
    $('body').on('click', '._js-b-pop', function () {
        var pop_id = $(this).attr('data-pop-id');
        $('.s-popup').show();
        $('.s-popup__background').show();
        $('._js-popup.' + pop_id ).addClass('animate');
        $('._js-popup.' + pop_id ).css("display" , "inline-block");
        return false;
    });
//popup CLOSE
    $('._js-pop-close').on('click', function () {
        $('.s-popup').hide();
        $('.w-popup').hide();
        $('.s-popup__background').hide();
        $('.w-popup').removeClass('animate');
        return false;
    });
//toggler-button-inset-default
$('._js-b-toggler-button').on('click', function () {
    insetCurrent = $(this).parents('._js-toggler-button-parrent').find('._js-inset');
    if (insetCurrent.is(":visible")){
        insetCurrent.slideUp();
        $(this).removeClass('_toggled');
    }
    else {
        insetCurrent.slideDown();
        $(this).addClass('_toggled');
    }
    $(this).parents('._js-toggler-button-parrent').toggleClass('_toggled');
    return false;
});
//double-changed-button
    $('._js-b-double-changed').on('click', function () {
        $(this).find('.info').toggleClass('_active');
        return false;
    });
//mobile-menu-new
    $('._js-b-toggle-mobile-menu').on('click', function () {
        $('._js-s-toggle-mobile-menu').toggleClass('_toggled');
        $('body').toggleClass('_blocked-mobile');
        return false;
    });
//mobile-menu-new-toggle-inset
    $('._js-s-toggle-mobile-menu ._js-b-dropper').on('click', function () {
        insetMenuCurrent = $(this).closest('._js-li-dropper').children('._js-inset');
        if (insetMenuCurrent.is(":visible")){
            insetMenuCurrent.slideUp();
            $(this).removeClass('_toggled');
            $(this).siblings('.b-dropper').removeClass('_toggled');
            $(this).closest('._js-li-dropper').removeClass('_toggled');
        }
        else {
            insetMenuCurrent.slideDown();
            $(this).siblings('.b-dropper').addClass('_toggled');
            $(this).addClass('_toggled');
            $(this).closest('._js-li-dropper').addClass('_toggled');
        }
        return false;
    });
//js cloud-dropper
    $('._js-b-click-dropper').on('click', function () {
        $('._js-click-dropper').removeClass('_toggled');
        $(this).parents('._js-click-dropper').toggleClass('_toggled');
        return false;
    });
    $(document).on('click', function (e) {
        if ($('._js-click-dropper ._js-inset').has(e.target).length === 0){
            $('._js-click-dropper').removeClass('_toggled');
        }
    });
//fixed header responsive
    $(window).on('resize scroll load', function () {
        var windowSize = $(window).width();
        var header_H = $('.s-header').height();
        var h_top_H = $('.h-top').height();
        var h_middle_H = $('.h-middle').height();
        var h_bottom_H = $('.h-bottom').height();
        var offsetTop = $('header').offset().top;
        var scrollTop = $(window).scrollTop();
        
        if (windowSize >= 310) {
            if (scrollTop >= header_H - h_middle_H - h_bottom_H) {
                $('.s-header').addClass('fixed');
            } 
            if (scrollTop < header_H - h_middle_H - h_bottom_H) {
                $('.s-header').removeClass('fixed');
            } 
        }
        $('.header-empty').css("height" , ""+h_middle_H +"px");
    });
//hide mobile header on scroll 
    $(document).ready(() => {
            const onScrollHeader = () => {
            const header = $('.s-header-mobile')
            let prevScroll = $(window).scrollTop()
            let currentScroll
            $(window).scroll(() => {
            currentScroll = $(window).scrollTop()
            const headerHidden = () => header.hasClass('header_hidden')
            if (currentScroll > prevScroll && !headerHidden()) {
                var scrollTop = $(window).scrollTop();
                if (scrollTop >= 1000) {
                     header.addClass('header_hidden')
                 }
            }
            if (currentScroll < prevScroll && headerHidden()) {
            header.removeClass('header_hidden')
            }
            prevScroll = currentScroll
            })
            }
            onScrollHeader()
    })
//pager up
    $(function () {
        $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.pager-up').fadeIn();
        } else {
            $('.pager-up').fadeOut();
        }
        });
        $('.pager-up').click(function () {
            $('body,html').animate({scrollTop: 0}, 300);
        });
    });
//toggle-navigation-menu CUSTOM
    $('._js-b-toggle-navigation-menu').on('click', function () {
        var nav_id = $(this).attr('data-nav-id');
        $('._js-navigation-menu.' + nav_id ).toggleClass('_toggled');
        $('._js-navigation-menu.' + nav_id ).children('.menu-layout').toggleClass('_toggled');
        $(this).parents('._js-mobile-menu.' + nav_id ).toggleClass('_toggled');
        $('body').toggleClass('_blocked-mobile');
        $('body').toggleClass('_nav-menu-shown');
        return false;
    });
//fancybox
    if ($('._js-w-fancy').length > 0) {    
        $("a.grouped_elements").fancybox();
    }
//input styler
    if ($('.select__default').length > 0) {
        $(".select__default").select2({
            maximumSelectionLength: 10,
            placeholder: "Выбрать",
            minimumResultsForSearch: Infinity,
            tags: true,
            allowClear: false
        });
    };
//psccontrolls
    $('._js-pcscontrolls ._js-b-minus').on('click', function (e) {
        e.preventDefault();
        var countField = $(this).parents('._js-pcscontrolls').children('.input__default'),
        rowid = $(countField).attr('data-rowid'),
        currentCount = parseInt(countField.val(), 10);
        countField.val(currentCount - 1);
        countField.change();
    });
    $('._js-pcscontrolls ._js-b-plus').on('click', function (e) {
        e.preventDefault();
        var countField = $(this).parents('._js-pcscontrolls').children('.input__default'),
        rowid = $(countField).attr('data-rowid'),
        currentCount = parseInt(countField.val(), 10);
        countField.val(currentCount + 1);
        countField.change();
    });

//OWL PRDUCT-SLIDER
//PRDUCT-SLIDER-PAGER
    var owl_productImagePager = $('.owl-product-image-pager-slider');
    owl_productImagePager.owlCarousel({
        autoplay: false,
        nav: true,
        navSpeed: 200,
        navRewind: false,
        dots: false,
        navText: ['', ''],
        loop: false,
        margin: 5,
        navRewind: true,
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 3,
                margin: 5
            },
            576: {
                items: 3,
                margin: 5
            },
            768: {
                items: 4,
                margin: 5
            },
            992: {
                items: 5,
                margin: 15
            },
            1200: {
                items: 5,
                margin: 10
            },
            1250: {
                items: 5,
                margin: 20
            }
        }
    });
    //PRDUCT-SLIDER
    var owl_productImageSlider = $('.owl-product-image-slider');
    owl_productImageSlider.owlCarousel({
        items: 1,
        margin: 0,
        autoplay: false,
        stagePadding: 0,
        nav: true,
        navText:false,
        navSpeed: 800,
        dots: true,
        dotsSpeed: 200,
        navRewind: false,
        autoplay: false,
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        animateOut: 'fadeOut',
        dotsContainer: '.owl-product-image-pager-slider .owl-stage',
        responsive: {
            0: {
                
            },
            767: {
                
            },
            1250: {
                
            },
        }
    });
//OWL SLIDER MAIN
    $('.owl-index-slider').owlCarousel({
        items: 1,
        margin: 0,
        stagePadding: 0,
        nav: false,
        navText:false,
        navSpeed: 800,
        dots: true,
        dotsSpeed: 200,
        navRewind: false,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoplaySpeed: 600,
        mouseDrag: true,
        touchDrag: true
    });
//mobile content dublicate
    $(window).on('load', function () {
        var windowWidth = $(window).width();
        if (windowWidth < 1199) {
            $('._js-desktop-dublicate-content').each(function() {
                var mobileContent = '._js-mobile-dublicate-content.' + $(this).attr('data-id');
                $(mobileContent).html($(this).html());
            });
        }
    });
});