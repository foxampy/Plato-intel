<?php

namespace App\Services;

use App\Mail\FeedbackSend;
use App\Mail\VacancySend;
use App\Models\Feedback;
use App\Models\Vacancy;
use App\Models\VacancyResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FormService
{


    public function vacancy($fields, $file = false) : string{

        $fileArr = [];
        if($file){
            $file_name = $file->getClientOriginalName() . '_' . time() . '.' . $file->getClientOriginalExtension();
            $target_path = public_path('/storage/vacancy_responses/uploads');
            $file->move($target_path, $file_name);
            $docPath = '/vacancy_responses/uploads/' . $file_name;

            array_push($fileArr, [
                'download_link' => $docPath,
                'original_name' => $file->getClientOriginalName(),
            ]);
        }


        $vacancy = VacancyResponse::create([
            'name' => $fields['name'],
            'phone' => $fields['phone'],
            'email' => $fields['email'],
            'subject' => $fields['subject'],
            'message' => $fields['message'] ?? '',
            'vacancy' => $fields['vacancy'],
            'file' => json_encode($fileArr)

        ]);
        $emails = [setting('general.email_to')];
        Mail::to($emails)->send(new VacancySend($vacancy));

        return response()->json(['status' => 'ok', 'refresh' => 'true']);

    }


}
