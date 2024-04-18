$(document).ready(function () {

    $('._js-vacancy-form').zValid({
            'success': function () {
                $("._js-vacancy-form")[0].reset();
                //location.reload()
            }
        }
    );


    $('#_js-feedback-form').zValid({
            'success': function () {
                $("#_js-feedback-form")[0].reset();
                //location.reload()
            }
        }
    );

    $('#_js-event-form').zValid({
            'success': function () {
                $('.select__default').select2();
                $("#_js-event-form")[0].reset();
                $('#_js-order-form').find('span.select2').removeClass('_error');
                $('.select__default').removeClass('_error');
                //location.reload()
            }
        }
    );

});
