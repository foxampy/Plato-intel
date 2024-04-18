<?php

namespace App\Mail;

use App\Models\CountryDelivery;
use App\Models\Delivery;
use App\Models\Shop;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FeedbackSend extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Feedback constructor.
     * @param $order
     * @param $items
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('Новое сообщение со страницы контакты')
            ->from(env('MAIL_FROM_ADDRESS'))
            ->view('mail.feedback');
    }
}
