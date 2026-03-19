<?php

namespace App\Http\Controllers\Ajax;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PostTasksController extends BaseController
{

    public function upload(Request $request){
		if(Auth::check()){
			$fileName=$request->file('file')->getClientOriginalName();
			$path=$request->file('file')->storeAs('uploads', $fileName, 'public');
			return response()->json(['location'=>"/storage/$path"]); 
		}

    }





}
