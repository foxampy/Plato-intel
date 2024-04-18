<?php

namespace App\Mail;


use App\Models\Shop;
use App\Models\Vacancy;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VacancySend extends Mailable
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
            ->subject('Отклик на вакансию')
            ->from(env('MAIL_FROM_ADDRESS'))
            ->view('mail.vacancy');
    }
}
