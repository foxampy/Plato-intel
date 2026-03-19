<?php

namespace App\Http\Requests;

use App\Rules\DecimalRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use phpDocumentor\Reflection\Types\Self_;

class FeedbackRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:2|max:30',
            'phone' => 'required|min:19|max:19',
            'email' => 'email',
            'message' => 'max:1000'
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
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
            'message.max' => 'Текст сообщения слишком большой (допускается не более 1000 символов)',
        ];
    }

}
