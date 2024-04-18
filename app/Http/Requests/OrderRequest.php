<?php

namespace App\Http\Requests;

use App\Rules\CheckAllCartRule;
use App\Services\CartService;
use App\Services\OrderService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use phpDocumentor\Reflection\Types\Self_;
use Illuminate\Http\Request;

class OrderRequest extends FormRequest
{

    public function __construct(array $query = [], array $request = [], array $attributes = [], array $cookies = [], array $files = [], array $server = [], $content = null)
    {
        parent::__construct($query, $request, $attributes, $cookies, $files, $server, $content);
    }

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
    public function rules(Request $request)
    {
        return [
            //'count_error' => 'required|lt:1',
            'name' => 'required|min:2|max:30',
            'phone' => 'required|min:19|max:19',
            'email' => 'required|email',
            'address' => 'required',
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
            'count_error.lt' => 'Превышено кол-во у одного или нескольких товаров',
            'name.required' => 'Представтесь, пожалуйста',
            'email.required' => 'Введите Email',
            'email.email' => 'Невалидный Email',
            'name.min' => 'Минимальное кол-во символов для имени - 2',
            'name.max' => 'Максимальное кол-во символов для имени - 30',
            'phone.required' => 'Введите номер телефона',
            'phone.min' => 'Телефон не соответствует формату',
            'phone.max' => 'Телефон не соответствует формату',
            'message.max' => 'Текст сообщения слишком большой (допускается не более 1000 символов)',
            'organization.required' => 'Введите организацию',
            'address.required' => 'Введите адрес доставки',
            'contacts.required' => 'Введите контакты',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $cartService = new CartService();
            if(!count($cartService->items)){
                $validator->errors()->add('field', 'Корзина по какой-то причине пуста...');
            }else{
                $cartProducts = $cartService->getProducts();
                foreach ($cartService->items as $id=>$count){
                    if(!($product = $cartProducts->where('id',$id)->first())){
                        $validator->errors()->add('field', 'Товар уже успели удалить...');
                    }else{
                        if($count > $product->count){
                            $validator->errors()->add('field', 'Товара "'.$product->name.'" нет в таком количестве на складе');
                        }
                    }

                }
            }
        });
    }

}
