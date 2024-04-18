<?php

namespace App\Http\Controllers\Ajax;

use App\Http\Requests\FeedbackRequest;
use App\Http\Requests\VacancyFormRequest;
use App\Models\Feedback;
use App\Mail\FeedbackSend;
use App\Mail\EventOrderSend;
use App\Services\FormService;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Mail;
use Illuminate\Routing\Controller as BaseController;

class FormController extends BaseController
{

    public function feedback(FeedbackRequest $request){
        $feedback = Feedback::create($request->only(['name','phone','message', 'company','email','address','inn']));
        $emails = [setting('general.email_to')];
        Mail::to($emails)->send(new FeedbackSend($feedback));
        return Redirect::back()->with('message','OK');
    }






}
