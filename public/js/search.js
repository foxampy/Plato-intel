$(document).ready(function (){
searchInput = document.querySelector("#_js-search-form input[name=search]");
searchInput.addEventListener("input", function() {
    jQuery('._js-ajax-search-result').empty();
    var val = this.value;
    if(val.length > 3){
        jQuery('._js-ajax-search-result').empty();
        var formData = new FormData();
        formData.append('search', val);
        setTimeout(search(formData), 1000);
    }else{
        jQuery('._js-ajax-search-result').empty();
    }
});
function search(formData){
    jQuery.ajax({
        url: '/ajax-search',
        type: 'POST',
        data: formData,
        cache: false,
        dataType: false,
        processData: false,
        contentType: false,
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        success: function( data, textStatus, jqXHR ){
            if(data){
                jQuery('._js-ajax-search-result').append(data);
                jQuery('._js-search-form .inset').show();
            }else{
                jQuery('._js-search-form .inset').hide();
            }
        },
        error: function( jqXHR, textStatus, errorThrown ){
            console.log('Error: ' + jqXHR );
            console.log('Error: ' + textStatus );
            console.log('Error: ' + errorThrown );
        }
    });
}
});
