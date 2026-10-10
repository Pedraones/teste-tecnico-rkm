<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/patients', function (Request $request){
    $patientsController = new PatientsController();
    return $patientsController->store($request);
});

Route::get('/patients', function (){
    $patientsController = new PatientsController();
    return $patientsController->list();
});