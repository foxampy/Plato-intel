<?php

namespace App\Http\Requests;

use App\Rules\CartRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\App;
use Illuminate\Validation\Rule;
use phpDocumentor\Reflection\Types\Self_;
use Illuminate\Http\Request;

class AddToCartRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules(Request $request)
    {
        return [
            'count' => ['required','numeric','min:1', new CartRule($request)],
        ];
    }

    public function messages()
    {
        return [
            'count.required' => 'Укажите кол-во товара',
            'count.numeric' => 'Введено не целое число',
            'count.min' => 'Минимальное кол-во для заказа - 1',
        ];
    }


}
