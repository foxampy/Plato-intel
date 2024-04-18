<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class CheckRole
{
    private const ROLE_1C_ID = 6;

    public function handle(Request $request, Closure $next)
    {
        if (!Auth::user() or Auth::user()->role_id != self::ROLE_1C_ID){
            return redirect('/');
        }

        return $next($request);
    }
}
