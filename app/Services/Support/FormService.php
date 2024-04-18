<?php

namespace App\Services\Support;


use App\Http\Requests\FeedbackFormRequest;
use App\Mail\FeedbackSend;
use App\Services\FeedbackService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;

class FormService
{
    protected $feedbackService;

    public function __construct(FeedbackService $feedbackService)
    {
        $this->feedbackService = $feedbackService;
    }

    /**
     * Отправка сообщения со страницы контакты
     * @param FeedbackFormRequest $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse
     */
    public function feedbackSend(FeedbackFormRequest $request)
    {
        $data = $request->all();
        $data['file'] = $request->file('file');
        $this->sendEmail(new FeedbackSend($data));
        //$this->feedbackService->createFeedback($data);

        if ($request->ajax()) {
            return response()->json(['status' => 'ok', 'refresh' => 'true']);
        }

        return back()->with('message', true);
    }

    /**
     * Отправка email
     * @param $data
     */
    public function sendEmail($data)
    {
        Mail::to(setting('emailto'))->send($data);
    }

}
