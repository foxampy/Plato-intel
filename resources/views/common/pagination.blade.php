@if ($paginator->lastPage() > 1)
    <div class="w-pagination">
        <div class="row sm-gutters">
            @if($paginator->currentPage() > 1)
                <div class="col-sm-auto col">
                    <span class="_arrow _prev"><a href="{{ $paginator->url(1) }}" class="link"></a></span>
                </div>
            @endif

            @for ($i = 1; $i <= $paginator->lastPage(); $i++)
                @php
                    $half_total_links = floor(7 / 2);
                    $from = $paginator->currentPage() - $half_total_links;
                    $to = $paginator->currentPage() + $half_total_links;

                    if ($paginator->currentPage() < $half_total_links) {
                        $to += $half_total_links - $paginator->currentPage();
                    }

                    if ($paginator->lastPage() - $paginator->currentPage() < $half_total_links) {
                        $from -= $half_total_links - ($paginator->lastPage() - $paginator->currentPage()) - 1;
                    }
                @endphp

                @if ($from < $i && $i < $to)
                    @if($i != $paginator->lastPage())
                            <div class="col-sm-auto col">
                                <a href="@if($i == 1) {{ $paginator->url(1) }} @else {{ $paginator->url($i) }} @endif" class="link {{ ($paginator->currentPage() == $i) ? '_active' : '' }}">{{ $i }}</a>
                            </div>
                    @endif
                @endif
            @endfor

            @if(($paginator->currentPage() + 3) < $paginator->lastPage())
                    <div class="col-sm-auto col">
                        <a href="{{ $paginator->nextPageUrl() }}" class="link">...</a>
                    </div>
            @endif

            @if(!$paginator->lastPage() != $paginator->currentPage())
                    <div class="col-sm-auto col">
                        <a href="{{ $paginator->url($paginator->lastPage()) }}" class="link {{ ($paginator->currentPage() == $paginator->lastPage()) ? '_active' : '' }}">{{ $paginator->lastPage() }}</a>
                    </div>
            @endif
            @if($paginator->lastPage() > $paginator->currentPage())
                <div class="col-sm-auto col">
                    <span class="_arrow _next"><a href="{{ $paginator->url($paginator->lastPage()) }}" class="link"></a></span>
                </div>
            @endif
        </div>
    </div>
@endif