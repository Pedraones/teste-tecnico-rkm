<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HealthUnitsController extends Controller
{
    public function list(){
        $healthUnits = DB::table('health_units')->get();
        return response($healthUnits);
    }
}
