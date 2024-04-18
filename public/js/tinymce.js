function tinymce_init_callback(editor)
{
    editor.remove();
    editor = null;
    tinymce.init({
        selector: 'textarea.richTextBox',
        menubar: false,
        min_height: 450,
        resize: 'vertical',
        convert_urls: false,
        image_caption: true,
        image_title: true,
        valid_elements: 'script[*],div[*],p[*],span[*],ul[*],li[*],ol[*],hr,br,img[*],i[*],em,table[*],tr[*],td[*],th[*],sup[*],sub[*],strong[*],b,h1[*],h2[*],h3[*],h4[*],h5[*],h6[*],small[*],a[*], svg,path',
        valid_children: '+li[span|p|div]',
        plugins: 'image link table lists code textcolor',
        toolbar: 'table | emoticons | fontsizeselect | fontselect | formatselect | bold italic strikethrough | forecolor backcolor | link image media | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | ltr rtl | removeformat | code',
        content_style: '.mce-annotation { background: #fff0b7; } .tc-active-annotation {background: #ffe168; color: black; }',
        automatic_uploads: true,
        images_upload_url: '/upload',
        file_picker_types: 'image',
        file_picker_callback: function(cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.onchange = function() {
                var file = this.files[0];

                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    var id = 'blobid' + (new Date()).getTime();
                    var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                    var base64 = reader.result.split(',')[1];
                    var blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);
                    cb(blobInfo.blobUri(), { title: file.name });
                };
            };
            input.click();
        }
    });
}
