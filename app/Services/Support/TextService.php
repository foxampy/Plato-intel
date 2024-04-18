<?php

namespace App\Services\Support;

class TextService
{

    public static function clearPhone($value)
    {
        $phone = preg_replace("/\D/", "", $value);
        return '+' . $phone;
    }

    public static function onlyNumbers($value)
    {
        return preg_replace("/\D/", "", $value);
    }

    public static function viber($value)
    {
        return 'viber://chat?number=%2B' . self::onlyNumbers($value);
    }

    public static function skype($value)
    {
        return 'skype:' . $value . '?chat';
    }

    public static function telegram($value)
    {
        return 'https://t.me/%2B' . self::onlyNumbers($value);
    }

    public static function whatsapp($value)
    {
        return 'https://wa.me/' . self::clearPhone($value);
    }

    public static function messengers($phone, $viber, $telegram, $whatsapp): string
    {
        $tmpArr = [];
        if ($viber) {
            $tmpArr[] = '<a class="phone__link vertical-align-initial" href="' . self::viber($phone) . '">viber</a>';
        }
        if ($telegram) {
            $tmpArr[] = '<a class="phone__link vertical-align-initial" href="' . self::telegram($telegram) . '">telegram</a>';
        }
        if ($whatsapp) {
            $tmpArr[] = '<a class="phone__link vertical-align-initial" href="' . self::whatsapp($phone) . '">whatsapp</a>';
        }
        if (count($tmpArr)) {
            return '(' . implode(', ', $tmpArr) . ')';
        }
        return '';
    }

    public static function priceFormat($number): string
    {
        if($number){
            return 'от '.number_format($number,'0',',',' ').' '.config('app.currency');
        }
        return '';

    }


    public static function youtubeEmbedLink($value)
    {
        $urlComponents = parse_url($value);
        if (isset($urlComponents['query'])) {
            parse_str($urlComponents['query'], $params);
            return 'https://www.youtube.com/embed/' . $params['v'];
        } else {
            return false;
        }

    }

    public static function getCurrencyLink($currency){
        $requestParams = \request()->all();
        $requestParams['currency'] = $currency->code;
        \request()->replace($requestParams);
        return \request()->fullUrlWithQuery($requestParams);
    }

}
