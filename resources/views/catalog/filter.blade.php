<div class="navigation-menu-body">
    <div class="w-catalog-filters">
        <div class="frame">
            <form id="_js-filter">
                <div class="w-bordered-item">
                    <input type="hidden" name="category_id" value="{{$page->id}}" />
                    @foreach($filterParameters as $parameter)
                        @isset($filterParameterValues[$parameter->id])
                            @if($parameter->type == 1)
                                <div class="pb-15">
                                    <div class="_h6 static bold mb-10">{{$parameter->name}} {{$parameter->dimension ? '('.$parameter->dimension.')' : ''}}</div>
                                    @foreach($filterParameterValues[$parameter->id] as $p)
                                        <div class="custom-selector check mb-5">
                                            <label class="block">
                                                <div class="input">
                                                    <input @isset($filterParametersChecked['parameter_'.$parameter->id])
                                                           @if(in_array($p->value, $filterParametersChecked['parameter_'.$parameter->id]))
                                                           checked
                                                           @endif
                                                           @endisset
                                                           value="{{$p->value}}" type="checkbox" name="parameter_{{$parameter->id}}[]" class="selector hidden">
                                                    <div class="styled-figure">
                                                        <div class="border">
                                                            <div class="inset-figure"></div>
                                                        </div>
                                                    </div>
                                                    <div class="label label-inner">{{$p->value}}</div>
                                                </div>
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            @else
                                <div class="pb-10">
                                    <div class="_h6 static bold mb-10">{{$parameter->name}} {{$parameter->dimension ? '('.$parameter->dimension.')' : ''}}</div>
                                    <div class="pb-10">
                                        <select name="parameter_{{$parameter->id}}[]" class="select__default">
                                            <option value="0">Не выбрано</option>
                                            @foreach($filterParameterValues[$parameter->id] as $p)
                                                <option @isset($filterParametersChecked['parameter_'.$parameter->id])
                                                        @if(in_array($p->value, $filterParametersChecked['parameter_'.$parameter->id]))
                                                        selected
                                                        @endif
                                                        @endisset>{{$p->value}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                            @endif
                        @endisset
                    @endforeach

                    <div class="pt-10">
                        <div class="pt-15">
                            <button class="button block">Найти</button>
                        </div>
                        <div class="pt-15">
                            <a href="{{route('catalog',$page->link())}}#_js-catalog-section" class="button block white clear">Сбросить параметры</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>