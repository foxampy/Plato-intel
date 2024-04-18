$(document).ready(function(){
    if ($('.select__default').length > 0) {
        $(".select__default").select2({
            maximumSelectionLength: 10,
            placeholder: "Выбрать",
            tags: true,
            allowClear: false
        });
    };

});