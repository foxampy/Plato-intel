$(document).ready(function(){
    //wishlist

    $('body').on('click','.compare[data-id]',function (){
        let id = $(this).data('id');
        let formData = new FormData();
        formData.append('id',id);
        addRemoveCompare(formData, $(this));
        return false;
    });

    $('body').on('click','.fav[data-id]',function (){
        let id = $(this).data('id');
        let formData = new FormData();
        formData.append('id',id);
        addRemoveWishlist(formData, $(this));
        return false;
    });

    $('body').on('click','.add-to-cart-btn[data-id]',function (){
        let id = $(this).data('id');
        let formData = new FormData();
        formData.append('id',id);
        addRemoveCart(formData, $(this));
        return false;
    });

    $('body').on('click','.detail-product-cart-btn[data-id]',function (){
        if($(this).hasClass('_active')){
            return false;
        }
        let id = $(this).data('id');
        let count = $('._js-product-cart-count').val();

        let formData = new FormData();
        formData.append('id',id);
        formData.append('count',count);
        addCart(formData, $(this));
        return false;
    });



    function addCart(formData, el){
        $.ajax({
            type: 'post',
            url: '/cart-add',
            data: formData,
            cache: false,
            dataType: false,
            processData: false,
            contentType: false,
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                $('._js-mobile-cart-total .count, ._js-cart-total .text .count').text(response.count);
                $('.to-cart-count').removeClass('_error');
                updateProductsButtons('cart',el.data('id'));
                $('.detail-product-cart-btn').addClass('_active').text(response.text.label[response.action]);
                $('._js-product-count').hide();
            },
            error: function (response) {
                $('.to-cart-count').removeClass('_error');
                if (response.status == '422') {
                    var string_error = '';
                    for (key in response.responseJSON.errors) {
                        $('.to-cart-count').addClass('_error');
                        string_error += '<li>' + response.responseJSON.errors[key] + '</li>';
                    }
                    $('._js-validation-alert .content ul').html(string_error);
                    $('._js-validation-alert').css('display', 'block');
                    $('._js-validation-alert').removeClass('hide');
                    setTimeout(function (){
                        $('._js-validation-alert').css('display', 'none');
                        $('._js-validation-alert').addClass('hide');
                    }, 3000);
                }
            }
        });
    }

    function addRemoveCart(formData, el){
        $.ajax({
            type: 'post',
            url: '/cart-add-remove',
            data: formData,
            cache: false,
            dataType: false,
            processData: false,
            contentType: false,
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                updateProductsButtons('cart',el.data('id'));

                //если находимся на детальной товара
                if($('.to-cart-btn').length){
                    if(response.action == 'added'){
                        $('.to-cart-btn').addClass('_active').text(response.text.label[response.action]);
                        $('._js-product-count').hide();
                    }else{
                        $('.to-cart-btn').removeClass('_active').text(response.text.label[response.action]);
                        $('._js-product-count').show();
                    }

                }
                //конец если находимся на детальной товара

                el.attr('title',response.text.title[response.action]).find('.text').text(response.text.label[response.action]);
                $('._js-mobile-cart-total .count, ._js-cart-total .text .count').text(response.count);
                if(response.count){
                    $('._js-cart-total,._js-mobile-cart-total').addClass('_active');
                }else{
                    $('._js-cart-total,._js-mobile-cart-total').removeClass('_active');
                }
            }
        });
    }



    function addRemoveWishlist(formData, el){
        $.ajax({
            type: 'post',
            url: '/wishlist-add-remove',
            data: formData,
            cache: false,
            dataType: false,
            processData: false,
            contentType: false,
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                updateProductsButtons('wishlist',el.data('id'));
                if(el.parents('._js-wishlist').length){
                    el.parents('._js-wishlist-product').remove();

                }
                el.attr('title',response.text.title[response.action]).find('.text').text(response.text.label[response.action]);
                $('._js-wishlist-total .text').text(response.count);
                if(response.count){
                    $('._js-wishlist-total').addClass('_active');
                }else{
                    $('._js-wishlist-total').removeClass('_active');
                }
            }
        });
    }

    function addRemoveCompare(formData, el){
        $.ajax({
            type: 'post',
            url: '/compare-add-remove',
            data: formData,
            cache: false,
            dataType: false,
            processData: false,
            contentType: false,
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                updateProductsButtons('compare',el.data('id'));
                if(el.parents('._js-compare').length){
                    location.reload();
                }
                el.attr('title',response.text.title[response.action]).find('.text').text(response.text.label[response.action]);
                $('._js-compare-total .text').text(response.count);
                if(response.count){
                    $('._js-compare-total').addClass('_active');
                }else{
                    $('._js-compare-total').removeClass('_active');
                }
            }
        });
    }

    function updateProductsButtons(type ,id){
        switch(type){
            case 'wishlist':
                $('.fav[data-id='+id+']').toggleClass('_active');
                break;
            case 'compare':
                $('.compare[data-id='+id+']').toggleClass('_active');
                break;
            case 'cart':
                $('.add-to-cart-btn[data-id='+id+']').toggleClass('_active');
                break;
        }
    }


    $('body').on('click', '._js-category-link', function () {
        if($(this).hasClass('_active')){
            return false;
        }
        $('._js-category-link').removeClass('_active');
        $(this).addClass('_active ');
        let id = $(this).data('id');
        let formData = new FormData();
        formData.append('id',id);
        $.ajax({
            url : '/getCategoriesMenu',
            type: "post",
            cache: false,
            dataType: false,
            processData: false,
            contentType: false,
            data: formData,
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (data) {
                if(data){
                    $('._js-menu-subcategories').empty().append(data);
                }else{
                    $('._js-menu-subcategories').empty();
                    console.log('error: didn\'t received subcategories ')
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(JSON.stringify(jqXHR));
            }
        });
        return false;
    });
});

function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}