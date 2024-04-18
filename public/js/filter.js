$(document).ready(function (){
    $('#_js-filter').submit(function(){
        let formData = new FormData(document.getElementById('_js-filter'));
        let sort = $('#_js-sort').val();
        formData.append('sort',sort);
        ajaxFilter(formData, true);
        return false;
    });
});

$(document).on('click','#_js_pagination a',function(){
    let formData = new FormData(document.getElementById('_js-filter'));
    let page = $(this).data('page');
    formData.append('page',page);
    ajaxFilter(formData,true);
    return false;
});

$(document).on('change','#_js-sort',function (){
    let sort = $(this).val();
    let formData = new FormData(document.getElementById('_js-filter'));
    formData.append('sort',sort);
    ajaxFilter(formData, true);
    return false;
});


function ajaxFilter(formData, scroll = false){


    $.ajax({
        type: 'post',
        url: '/ajax-filter',
        data: formData,
        cache: false,
        dataType: false,
        processData: false,
        contentType: false,
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        success: function (data) {
            $('#_js-catalog').empty().append(data);

            let params = [];
            for (var key of formData.keys()) {
                let value = formData.getAll(key);
                value.forEach(function(val,index,arr){
                    if(!inArray(key+'='+val, params)){
                        params.push(key+'='+val);
                    }
                });
            }
            if(params.length){
                window.history.pushState(null, null, '?'+params.join('&'));
            }

            if(scroll){
                $([document.documentElement, document.body]).animate({
                    scrollTop: $('._js-mobile-menu' ).offset().top
                }, 1);
            }


        }
    });
}
