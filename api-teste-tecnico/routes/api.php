<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientsController;
use App\Http\Controllers\HealthUnitsController;

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

Route::get('/patients/{id}', function(int $id){
    $patientsController = new PatientsController();
    return response($patientsController->getPatient($id));
});

Route::get('/patients/search-by-name/{name}', function(string $name){
    $patientsController = new PatientsController();
    return response($patientsController->getPatientByName($name));
});

Route::delete('/patients/{id}', function(int $id){
    $patientsController = new PatientsController();
    return $patientsController->delete($id);
});

Route::patch('/patients/{id}', function(int $id, Request $request){
    $patientsController = new PatientsController();
    return $patientsController->edit($id, $request);
});

Route::get('/health-units', function(){
    $healthUnitsController = new HealthUnitsController();
    return $healthUnitsController->list();
});