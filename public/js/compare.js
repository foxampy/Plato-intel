$(window).on('resize scroll load', function () {
    $('._js-absolute-td').each(function(e){
        var sibtdH = $(this).siblings('td.blank').height();
        $(this).css("height", ""+sibtdH +"px");
    })
});

//FIX table scroll
$(window).on('resize scroll load', function () {
    var Table_start = $('._js-table-start').offset().top;
    var Table_end = $('._js-table-end').offset().top;
    var scrollTop = $(window).scrollTop();
    var windowH = $(window).height();
    if ((scrollTop + windowH) >= Table_end) {
        $('._js-w-table-scroller').removeClass('fixed');
    }
    if ((scrollTop + windowH) < Table_end) {
        $('._js-w-table-scroller').addClass('fixed');
    }

    var Table_compare_start = $('._js-table-compare-start').offset().top;
    if (scrollTop <= Table_compare_start) {
        $('._js-compare-table-short-top-header').removeClass('fixed');
    }
    if (scrollTop > Table_compare_start) {
        $('._js-compare-table-short-top-header').addClass('fixed');
    }
});

//table scroll
$(window).on('resize scroll load', function () {
    var Table_W = $('._js-table-width').width();
    $('._js-scroll-conf').css("width", ""+ Table_W +"px");
});

$('._js-w-scroll').on('scroll', function() {
    var scroll_element = $('._js-w-scroll').scrollLeft();
    $('._js-w-scroll-conf').scrollLeft(+scroll_element);
    var WscrollTop = $(window).scrollTop();
    //Никита, вот так получаю положение скролла этой таблицы,
    //Добавь положение экрана сверху страницы + этот скролл = не будут скакать при перезагрузке страницы
    console.log("Window-scroll-top-"+WscrollTop);
    console.log("element-scroll-"+scroll_element);
    //Никита END
});
$('._js-w-scroll-conf').on('scroll', function() {
    var scroll_element_controll = $('._js-w-scroll-conf').scrollLeft();
    $('._js-w-scroll, ._js-w-scroll-top-header').scrollLeft(+scroll_element_controll);
});