@php
    $edit = !is_null($dataTypeContent->getKey());
    $add  = is_null($dataTypeContent->getKey());
@endphp


@extends('voyager::master')

@section('css')
    <style>
        .close {
            position: absolute;
            opacity: 1;
            right: 0px;
            width: 16px;
            height: 16px;
            cursor: pointer;
            border: 1px solid #000;
            z-index: 5;
            -webkit-transition: opacity 150ms;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAiElEQVR42r2RsQrDMAxEBRdl8SDcX8lQPGg1GBI6lvz/h7QyRRXV0qUULwfvwZ1tenw5PxToRPWMC52eA9+WDnlh3HFQ/xBQl86NFYJqeGflkiogrOvVlIFhqURFVho3x1moGAa3deMs+LS30CAhBN5nNxeT5hbJ1zwmji2k+aF6NENIPf/hs54f0sZFUVAMigAAAABJRU5ErkJggg==) no-repeat;
            text-align: right;
            border: 0;
            cursor: pointer;
            background-color: white;
        }

        .image-content {
            position: relative;
            margin: 5px;
            float: left;
        }

        .image-content:after {
            content: '\A';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.6);
            opacity: 0;
            transition: all 0.5s;
            -webkit-transition: all 0.5s;
        }

        .image-content:hover:after {
            opacity: 1;
        }
    </style>
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
@stop

@section('page_title', __('voyager::generic.'.($edit ? 'edit' : 'add')).' '.$dataType->getTranslatedAttribute('display_name_singular'))

@section('page_header')
    <h1 class="page-title">
        <i class="{{ $dataType->icon }}"></i>
        {{ __('voyager::generic.'.($edit ? 'edit' : 'add')).' '.$dataType->getTranslatedAttribute('display_name_singular') }}
    </h1>
    @include('voyager::multilingual.language-selector')
@stop

@section('content')
    <div class="page-content edit-add container-fluid">
        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-bordered">
                    <!-- form start -->
                    <form role="form"
                            class="form-edit-add"
                            action="{{ $edit ? route('voyager.'.$dataType->slug.'.update', $dataTypeContent->getKey()) : route('voyager.'.$dataType->slug.'.store') }}"
                            method="POST" enctype="multipart/form-data">
                        <!-- PUT Method if we are editing -->
                        @if($edit)
                            {{ method_field("PUT") }}
                        @endif

                        <!-- CSRF TOKEN -->
                        {{ csrf_field() }}

                        <div id="tabs">
                            <ul>
                                <li><a href="#main">Основные</a></li>
                                @if($dataType->is_seo == 1)
                                    <li><a href="#seo">SEO</a></li>
                                @endif
                            </ul>
                            <div id="main">
                                <div class="panel-body">

                                    @if (count($errors) > 0)
                                        <div class="alert alert-danger">
                                            <ul>
                                                @foreach ($errors->all() as $error)
                                                    <li>{{ $error }}</li>
                                                @endforeach
                                            </ul>
                                        </div>
                                    @endif

                                <!-- Adding / Editing -->
                                    @php
                                        $dataTypeRows = $dataType->{($edit ? 'editRows' : 'addRows' )};
                                    @endphp

                                    @foreach($dataTypeRows as $row)
                                    <!-- GET THE DISPLAY OPTIONS -->
                                    @if(in_array($row->field,['manufacturer_id','car_model_id']))
                                        @continue
                                        @endif
                                        @php
                                            $display_options = $row->details->display ?? NULL;
                                            if ($dataTypeContent->{$row->field.'_'.($edit ? 'edit' : 'add')}) {
                                                $dataTypeContent->{$row->field} = $dataTypeContent->{$row->field.'_'.($edit ? 'edit' : 'add')};
                                            }
                                        @endphp
                                        @if (isset($row->details->legend) && isset($row->details->legend->text))
                                            <legend class="text-{{ $row->details->legend->align ?? 'center' }}" style="background-color: {{ $row->details->legend->bgcolor ?? '#f0f0f0' }};padding: 5px;">{{ $row->details->legend->text }}</legend>
                                        @endif

                                        <div class="form-group @if($row->type == 'hidden') hidden @endif col-md-{{ $display_options->width ?? 12 }} {{ $errors->has($row->field) ? 'has-error' : '' }}" @if(isset($display_options->id)){{ "id=$display_options->id" }}@endif>
                                            {{ $row->slugify }}
                                            <label class="control-label" for="name">{{ $row->getTranslatedAttribute('display_name') }}</label>
                                            @include('voyager::multilingual.input-hidden-bread-edit-add')
                                            @if (isset($row->details->view))
                                                @include($row->details->view, ['row' => $row, 'dataType' => $dataType, 'dataTypeContent' => $dataTypeContent, 'content' => $dataTypeContent->{$row->field}, 'action' => ($edit ? 'edit' : 'add'), 'view' => ($edit ? 'edit' : 'add'), 'options' => $row->details])
                                            @elseif ($row->type == 'relationship')
                                                @include('voyager::formfields.relationship', ['options' => $row->details])
                                            @else
                                                {!! app('voyager')->formField($row, $dataType, $dataTypeContent) !!}
                                            @endif

                                            @foreach (app('voyager')->afterFormFields($row, $dataType, $dataTypeContent) as $after)
                                                {!! $after->handle($row, $dataType, $dataTypeContent) !!}
                                            @endforeach
                                            @if ($errors->has($row->field))
                                                @foreach ($errors->get($row->field) as $error)
                                                    <span class="help-block">{{ $error }}</span>
                                                @endforeach
                                            @endif
                                        </div>
                                    @endforeach
                                        @php
                                            $images = \App\Models\ProductImage::where('product_id', $dataTypeContent->id)->get();
                                        @endphp
                                        <div class="form-group  col-md-12 ">
                                            <label class="control-label h3" >Изображения</label>
                                                @if($images->count())
                                                    <div id="sortable" style="display: flex; flex-wrap: wrap; ">
                                                        @foreach($images as $key => $image)
                                                            <div class="image-content clossable" data-image="{{$image->id}}"
                                                                 style="margin: 0 10px 10px 0;">
                                                                <div class="close"></div>
                                                                <img class="ui-state-default"
                                                                     src="{{ url(zImage::resize($image->image, [160, 210]))}}"
                                                                     alt="">
                                                                <input type="hidden" id="image" name="images[]"
                                                                       value="{{$image->image}}">
                                                            </div>
                                                        @endforeach
                                                    </div>
                                                @endif
                                                <div>
                                                    <label for="file"></label>
                                                    <input type="file" id="file" name="file[]" multiple>
                                                </div>
                                        </div>
                                        @isset($parameters)
                                            @foreach($parameters as $parameter)
                                                <div class="form-group" id="parameters">
                                                    <label for="name">{{$parameter['name']}}{{$parameter['dimension'] ? ', '.$parameter['dimension'] : ''}}</label>
                                                    <input type="text" class="form-control" name="parameters[{{$parameter['id']}}]"
                                                           placeholder="{{$parameter['name']}}" value="@if(isset($parametersValues[$parameter['id']])){{$parametersValues[$parameter['id']]}}@endif">
                                                </div>
                                            @endforeach
                                        @endisset
                                </div><!-- panel-body -->
                            </div>


                            @if($dataType->is_seo == 1)
                                <div id="seo">
                                    <div class="panel panel-bordered panel-info">
                                        <div class="panel-body">
                                            <div class="form-group">
                                                <label for="name">SEO Title</label>
                                                <input type="text" class="form-control" name="metaTitle"
                                                       placeholder="SEO Title" value="{{ $dataSeo->title }}">
                                            </div>
                                            <div class="form-group">
                                                <label for="name">SEO Description</label>
                                                <textarea class="form-control"
                                                          name="metaDescription">{{ $dataSeo->description }}</textarea>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            @endif
                        </div>

                        <div class="panel-footer">
                            @section('submit-buttons')
                                <button type="submit" class="btn btn-primary save">{{ __('voyager::generic.save') }}</button>
                            @stop
                            @yield('submit-buttons')
                        </div>
                    </form>

                    <iframe id="form_target" name="form_target" style="display:none"></iframe>
                    <form id="my_form" action="{{ route('voyager.upload') }}" target="form_target" method="post"
                            enctype="multipart/form-data" style="width:0;height:0;overflow:hidden">
                        <input name="image" id="upload_file" type="file"
                                 onchange="$('#my_form').submit();this.value='';">
                        <input type="hidden" name="type_slug" id="type_slug" value="{{ $dataType->slug }}">
                        {{ csrf_field() }}
                    </form>

                </div>
            </div>
        </div>
    </div>

    <div class="modal fade modal-danger" id="confirm_delete_modal">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><i class="voyager-warning"></i> {{ __('voyager::generic.are_you_sure') }}</h4>
                </div>

                <div class="modal-body">
                    <h4>{{ __('voyager::generic.are_you_sure_delete') }} '<span class="confirm_delete_name"></span>'</h4>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">{{ __('voyager::generic.cancel') }}</button>
                    <button type="button" class="btn btn-danger" id="confirm_delete">{{ __('voyager::generic.delete_confirm') }}</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete File Modal -->
@stop

@section('javascript')
    <script>
        var params = {};
        var $file;

        function deleteHandler(tag, isMulti) {
          return function() {
            $file = $(this).siblings(tag);

            params = {
                slug:   '{{ $dataType->slug }}',
                filename:  $file.data('file-name'),
                id:     $file.data('id'),
                field:  $file.parent().data('field-name'),
                multi: isMulti,
                _token: '{{ csrf_token() }}'
            }

            $('.confirm_delete_name').text(params.filename);
            $('#confirm_delete_modal').modal('show');
          };
        }

        $('document').ready(function () {
            $("#sortable").sortable();
            $("#sortable").disableSelection();
            $(document).on('click', '.close', function (event) {
                event.preventDefault();
                $.ajax({
                    type: 'GET',
                    url: '/api/dell-image/{{$dataType->slug}}',
                    data: 'image=' + $(this).parent().data('image') + '',
                    headers: {
                        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                    },
                    success: function (data) {
                        if (data.success == true) {
                            $('*[data-image="' + data.image + '"]').remove();
                        }
                    }
                });
            });
            $('.toggleswitch').bootstrapToggle();

            //Init datepicker for date fields if data-datepicker attribute defined
            //or if browser does not handle date inputs
            $('.form-group input[type=date]').each(function (idx, elt) {
                if (elt.hasAttribute('data-datepicker')) {
                    elt.type = 'text';
                    $(elt).datetimepicker($(elt).data('datepicker'));
                } else if (elt.type != 'date') {
                    elt.type = 'text';
                    $(elt).datetimepicker({
                        format: 'L',
                        extraFormats: [ 'YYYY-MM-DD' ]
                    }).datetimepicker($(elt).data('datepicker'));
                }
            });

            @if ($isModelTranslatable)
                $('.side-body').multilingual({"editing": true});
            @endif

            $('.side-body input[data-slug-origin]').each(function(i, el) {
                $(el).slugify();
            });

            $('.form-group').on('click', '.remove-multi-image', deleteHandler('img', true));
            $('.form-group').on('click', '.remove-single-image', deleteHandler('img', false));
            $('.form-group').on('click', '.remove-multi-file', deleteHandler('a', true));
            $('.form-group').on('click', '.remove-single-file', deleteHandler('a', false));

            $('#confirm_delete').on('click', function(){
                $.post('{{ route('voyager.'.$dataType->slug.'.media.remove') }}', params, function (response) {
                    if ( response
                        && response.data
                        && response.data.status
                        && response.data.status == 200 ) {

                        toastr.success(response.data.message);
                        $file.parent().fadeOut(300, function() { $(this).remove(); })
                    } else {
                        toastr.error("Error removing file.");
                    }
                });

                $('#confirm_delete_modal').modal('hide');
            });
            $('[data-toggle="tooltip"]').tooltip();

            $(function () {
                $("#tabs").tabs();
            });
            $("#sortable").sortable();
            $("#sortable").disableSelection();
            $(document).on('click', '.close', function (event) {
                event.preventDefault();
                $.ajax({
                    type: 'GET',
                    url: '/api/dell-image',
                    data: 'image=' + $(this).parent().data('image') + '',
                    headers: {
                        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                    },
                    success: function (data) {
                        if (data.success == true) {
                            $('*[data-image="' + data.image + '"]').remove();
                        }
                    }
                });
            });
        });
    </script>


    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script>

$(document).ready(function()
{
    $(".select2.custom").select2({
        tags: true
    });
});
$(function () {
    $('.addItem').click(function (e) {
        e.preventDefault();
        let numberRow;
        let elRow = $(this).prev().find('tbody tr');
        let elCont = $(this).prev();
        if(elRow.length  > 0){
            numberRow = elRow.last().data('numberRow') + 1;
        }
        else{
            numberRow = 1;
        }
        let langCode = elCont.attr('data-lang');

        elCont.find('tbody').append('' +
            '<tr role="row" class="odd" data-number-row="' + numberRow + '">' +
            '<td class="voyager-trash" style="cursor: pointer;"></td>' +
            '<td><input style="width: 206px;" data-item-key="' + numberRow + '" type="file" name="docs[' + numberRow + '][doc]" /></td>' +
            '<td><input name="docs[' + numberRow + '][title]" type="text" value=""></td>'
        );

    })
});
$(document).on('click', '.voyager-trash', function () {
    $(this).closest('tr').remove();
    return false;
});
    </script>
@stop
