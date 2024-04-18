(function ($) {

    $.fn.zValid = function (options) {
        var settings = $.extend({
            form: $(this),
            url: $(this).attr('action'),
            type: $(this).attr('method'),
        }, options);
        let id = $(this).attr('id');
        this.submit(function () {
            $('._js-validation-alert').css('display', 'none');
            let formData = new FormData(document.getElementById(id));
            $.ajax({
                type: settings.type,
                url: settings.url,
                cache: false,
                dataType: false,
                processData: false,
                contentType: false,
                data: formData,
                headers: {
                    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                },

                success: function (data) {
                    settings.form.find('input, textarea').removeClass('_error');
                    $('.select__default').removeClass('_error');
                    if ('success' in settings) {
                        settings.success();
                    }
                    Swal.fire({
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    });

                },
                error: function (data) {
                    settings.form.find('input, textarea').removeClass('_error');
                    settings.form.find('span.select2').removeClass('_error');
                    settings.form.find('input, textarea').removeClass('_error');
                    //$('.border').css('border-color', 'transparent');
                    if (data.status == '422') {
                        var string_error = '';
                        for (key in data.responseJSON.errors) {
                            settings.form.find('[name="' + key + '"]').addClass('_error');
                            settings.form.find('[data-name="' + key + '"]').addClass('_error');
                            string_error += '<li>' + data.responseJSON.errors[key] + '</li>';
                            if(key == 'time'){
                                settings.form.find('span.select2').addClass('_error');
                            }
                        }
                        if ('errorValidate' in settings) {
                            settings.errorValidate(data);
                        }

                        $('html, body').animate({
                            scrollTop: $("._error").closest('form').offset().top-175  // класс объекта к которому приезжаем
                        }, 1000);

                        $('._js-validation-alert .content ul').html(string_error);
                        $('._js-validation-alert').css('display', 'block');
                        $('._js-validation-alert').removeClass('hide');
                        setTimeout(function (){
                            $('._js-validation-alert').css('display', 'none');
                            $('._js-validation-alert').addClass('hide');
                        }, 3000);
                    }

                },

                async: false
            });

            return false;
        });

    };
})(jQuery);
