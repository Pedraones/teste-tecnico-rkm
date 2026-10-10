<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

#[Table('patients')]
class Patients extends Model
{
    protected $attributes = [
        'updated_at' => ''
    ];
}
