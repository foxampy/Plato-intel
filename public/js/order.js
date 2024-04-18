$(document).ready(function(){
    $("._js-cart-count").keydown(function(event) {
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        } else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });

    $('body').on('click','._js-delivery',function (){
        let id = $(this).data('id');
        $('._js-delivery').removeClass('_active');
        $(this).addClass('_active');
        $('._js-delivery-content').hide();
        $('._js-delivery-content[data-id='+id+']').show();
        let formData = new FormData();
        formData.append('delivery',id);
        updateDelivery(formData);
        return false;
    });

    $('body').on('click','._js-submit-order',function (){
        let deliveryId = $('[name=delivery]:checked').val();
        let formData = new FormData(document.getElementById('_js-order-fields'));
        let errors = $('._js-cart-count._error').length;
        formData.append('delivery',deliveryId);
        formData.append('count_error',errors);
        submitOrder(formData);
        return false;
    });

    function submitOrder(formData){
        $.ajax({
            type: 'post',
            url: '/create-order',
            data: formData,
            cache: false,
            dataType: false,
            processData: false,
            contentType: false,
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Ваш заказ оформлен',
                    text: 'Сейчас вы будете перенаправлены на главную',
                    showConfirmButton: false,
                    timer: 3000
                }).then(function() {
                        window.location.href ='/';
                    }
                );

            },
            error: function (response) {
                if (response.status == '422') {
                    var string_error = '';
                    for (key in response.responseJSON.errors) {

                        string_error += '<li>' + response.responseJSON.errors[key] + '</li>';
                    }
                    $('._js-validation-alert .content ul').html(string_error);
                    $('._js-validation-alert').css('display', 'block');
                    $('._js-validation-alert').removeClass('hide');
                    setTimeout(function (){
                        $('._js-validation-alert').css('display', 'none');
                        $('._js-validation-alert').addClass('hide');
                    }, 5000);
                }
            }
        });
    }

    function updateDelivery(formData){
        $.ajax({
            type: 'post',
            url: '/cart-delivery-update',
            data: formData,
            cache: false,
            dataType: false,
            processData: false,
            contentType: false,
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                console.log(response);
                $('._js-final').text(response.finalText);
            }
        });
    }

    $('body').on('click','._js-fav-cart', function (){
        let ids = [];
        $('._js-cart-checkbox').each(function (){
            if($(this).prop('checked')){
                ids.push($(this).data('id'));
            }
        });
        if(ids.length){
            let formData = new FormData();
            formData.append('ids',ids);
            addWishlistByIds(formData);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Не отмечены товары для добавления в избранное',
                showConfirmButton: false,
                timer: 2000
            });
        }
        return false;
    });

    $('body').on('click','._js-cart-clear', function (){
        $.ajax({
            type: 'post',
            url: '/cart-clear',
            data: {},
            cache: false,
            dataType: false,
            processData: false,
            contentType: false,
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                $('._js-cart-item').remove();
                $('._js-cart-items').text(response.itemsCountText);
                $('._js-cart-products').text(response.productsCountText);
                $('._js-cart-detail-total').text(response.totalText);
                cartRedirect();
            }
        });
    });

    $('body').on('click','._js-cart-remove', function (){
        let id = $(this).data('id');
        let delivery = $('[name=delivery]:checked').val();
        let formData = new FormData();
        formData.append('id',id);
        formData.append('delivery',delivery);
        $.ajax({
            type: 'post',
            url: '/cart-remove-by-id',
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
                $('._js-final').text(response.finalText);
                if(response.count){
                    $('._js-cart-total,._js-mobile-cart-total').addClass('_active');
                }else{
                    $('._js-cart-total,._js-mobile-cart-total').removeClass('_active');
                }
                $('._js-cart-item[data-id='+id+']').remove();
                $('._js-cart-items').text(response.itemsCountText);
                $('._js-cart-products').text(response.productsCountText);
                $('._js-cart-detail-total').text(response.totalText);

                if(response.count) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Товар удален из корзины',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }else{
                    cartRedirect();
                }

            }
        });
    });

    $('body').on('click','._js-remove-cart', function (){
        let ids = [];
        let delivery = $('._js-delivery._active').data('id');
        $('._js-cart-checkbox').each(function (){
            if($(this).prop('checked')){
                ids.push($(this).data('id'));
            }
        });
        if(ids.length){
            let formData = new FormData();
            formData.append('ids',ids);
            formData.append('delivery',delivery);
            removeCartByIds(formData, ids);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Отметьте товары, которые хотите удалить из корзины',
                showConfirmButton: false,
                timer: 2000
            });
        }
        return false;
    });

    function removeCartByIds(formData, ids){
        $.ajax({
            type: 'post',
            url: '/cart-remove-by-ids',
            data: formData,
            cache: false,
            dataType: false,
            processData: false,
            contentType: false,
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                $('._js-cart-checkbox').prop('checked',false);
                $('._js-mobile-cart-total .count, ._js-cart-total .text').text(response.count);
                $('._js-final').text(response.finalText);
                if(response.count){
                    $('._js-cart-total,._js-mobile-cart-total').addClass('_active');
                }else{
                    $('._js-cart-total,._js-mobile-cart-total').removeClass('_active');
                }
                ids.forEach(function (id){
                    $('._js-cart-item[data-id='+id+']').remove();
                });
                $('._js-cart-items').text(response.itemsCountText);
                $('._js-cart-products').text(response.productsCountText);
                $('._js-cart-detail-total').text(response.totalText);

                if(response.count) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Выбранные вами товары удалены из корзины',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }else{
                    cartRedirect();
                }

            }
        });
    }

    function addWishlistByIds(formData){
        $.ajax({
            type: 'post',
            url: '/wishlist-add-by-ids',
            data: formData,
            cache: false,
            dataType: false,
            processData: false,
            contentType: false,
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                $('._js-cart-checkbox').prop('checked',false);
                $('._js-wishlist-total .text').text(response.count).addClass('_active');

                Swal.fire({
                    icon: 'success',
                    title: 'Выбранные вами товары добавлены в список избранного',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        });
    }

    $('body').on('change','._js-cart-count',function (){
        let id = $(this).parents('._js-cart-item').data('id');
        let count = $(this).val();
        let delivery = $('._js-delivery._active').data('id');
        let formData = new FormData();
        formData.append('id',id);
        formData.append('count',count);
        formData.append('delivery',delivery);
        setCart(formData, id);
        return false;
    });

    function setCart(formData, id){
        $.ajax({
            type: 'post',
            url: '/cart-set',
            data: formData,
            cache: false,
            dataType: false,
            processData: false,
            contentType: false,
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                console.log(response.count);
                $('._js-mobile-cart-total .count, ._js-cart-total .text .count').text(response.count);
                $('._js-final').text(response.finalText);
                $('._js-cart-count[data-id='+id+']').removeClass('_error');
                if(!response.product){
                    $('._js-cart-item[data-id='+id+']').remove();
                }else{
                    $('._js-cart-item[data-id='+id+'] .w-price-total-mobile-bg .sum').text(response.product.cartPriceText);
                    $('._js-cart-item[data-id='+id+'] ._js-cart-count').text(response.product.cartCount);
                }

                $('._js-cart-items').text(response.itemsCountText);
                $('._js-cart-products').text(response.productsCountText);
                $('._js-cart-detail-total').text(response.totalText);

                if(!response.count){
                    cartRedirect();
                }
            },
            error: function (response) {
                $('._js-cart-count[data-id='+id+']').removeClass('_error');
                if (response.status == '422') {
                    var string_error = '';
                    for (key in response.responseJSON.errors) {
                        $('._js-cart-count[data-id='+id+']').addClass('_error');
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


});


function cartRedirect(){
    Swal.fire({
        icon: 'error',
        title: 'Ваша корзина пуста',
        text: 'Сейчас вы будете перенаправлены на главную',
        showConfirmButton: false,
        timer: 3000
    }).then(function() {
            window.location.href ='/';
        }
    );
}
