@if(setting(setting('general.email')))
    <div class="w-dropper-bordered-group">
        <div>По всем вопросам</div>
        <div class="phone mb-5">
            <a href="mailto:{{setting('general.email')}}" class="phone__link mail">{{setting('general.email')}}</a>
        </div>
    </div>
@endif