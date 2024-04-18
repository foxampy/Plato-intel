<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\App;
use Illuminate\Validation\Rule;
use phpDocumentor\Reflection\Types\Self_;

class VacancyFormRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|min:2|max:30',
            'phone' => 'required|min:19|max:19',
            'email' => 'email',
            'vacancy' => 'required',
            'message' => 'max:1000'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Представтесь, пожалуйста',
            'name.min' => 'Минимальное кол-во символов для имени - 2',
            'name.max' => 'Максимальное кол-во символов для имени - 30',
            'phone.required' => 'Введите номер телефона',
            'phone.min' => 'Телефон не соответствует формату',
            'email.email' => 'Некорректный Email',
            'phone.max' => 'Телефон не соответствует формату',
            'vacancy.required' => 'Не нужно удалять скрытое поле вакансии из кода',
            'message.max' => 'Текст сообщения слишком большой (допускается не более 1000 символов)',
        ];
    }


}
