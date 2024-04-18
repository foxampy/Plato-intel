<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends \TCG\Voyager\Models\User
{
    use HasApiTokens, HasFactory, Notifiable;

    public const ROLES = [
        'administrator' => 1,
        'manager' => 4,
        'accountant' => 5
    ];

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function isAdministrator()
    {
        return $this->role_id == self::ROLES['administrator'];
    }

    public function isManager()
    {
        return $this->role_id == self::ROLES['manager'];
    }

    public function isAccountant(){
        return $this->role_id == self::ROLES['accountant'];
    }
}
