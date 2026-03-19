<div class="s-name _h3 semibold mb-10">Форма обратной связи</div>
<div class="mb-10"><span class="color-red">*</span> поля обязательны для заполнения</div>
<form method="post" class="row justify-content-center" action="{{route('feedback')}}" id="_js-feedback-form">
    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
        <div class="input label-top mb-15">
            <label class="label">Ф.И.О <span class="color-red">*</span></label>
            <div class="input icon-end">
                <input name="name" type="text" class="input__default" placeholder="">
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
        <div class="input label-top mb-15">
            <label class="label">Название компании</label>
            <div class="input icon-end">
                <input name="company" type="text" class="input__default" placeholder="">
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
        <div class="input label-top mb-15">
            <label class="label">Контактный телефон <span class="color-red">*</span></label>
            <div class="input icon-end">
                <input name="phone" type="text" class="input__default" placeholder="">
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
        <div class="input label-top mb-15">
            <label class="label">Email <span class="color-red">*</span></label>
            <div class="input icon-end">
                <input name="email" type="text" class="input__default" placeholder="">
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
        <div class="input label-top mb-15">
            <label class="label">Юридический адрес</label>
            <div class="input icon-end">
                <input name="address" type="text" class="input__default" placeholder="">
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
        <div class="input label-top mb-15">
            <label class="label">ИНН</label>
            <div class="input icon-end">
                <input name="inn" type="text" class="input__default" placeholder="">
            </div>
        </div>
    </div>
    <div class="col-12">
        <div class="input label-top mb-15">
            <label class="label">Сообщение</label>
            <div class="input icon-end">
                <textarea name="message" class="textarea__default"></textarea>
            </div>
        </div>
    </div>
    <div class="col-12">
        <div class="row mt-20">
            <div class="col-xxl-6 col-xl-7 col-lg-9 col-md-6 col-sm-8 col-12">
                <button class="button block">Отправить сообщение</button>
            </div>
        </div>
    </div>
</form>