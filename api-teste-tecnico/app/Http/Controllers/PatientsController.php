<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Models\Patients;

class PatientsController extends Controller
{
    public function store(Request $request){
        $validates = $request->validate([
            'name' => ['required'],
            'cpf' => ['required', 'min:11', 'max:11'],
            'birthday' => ['required', Rule::date()->beforeOrEqual(today())],
            'phone' => ['max:15'],
            'HealthUnitId' => ['required']
        ]);

        $patientsModel = new Patients();

        $patientsModel->name = $request->name;
        $patientsModel->cpf = $request->cpf;
        $patientsModel->birth_day = $request->birthday;
        $patientsModel->phone = $request->phone;
        $patientsModel->health_unit_id = $request->HealthUnitId;

        try{
            $patientsModel->save();
            return response('Patient stored', 201);
        }
        catch (error){
            return response('Patient not stored', 400);
        }

    }

    public function list(){
        $users = DB::table('patients')->get();
        return response($users);
    }

    public function getPatient($id){
        $user = DB::table('patients')->where('id', $id)->first();
        
        return response()->json($user);
    }

    public function delete($id){
        $user = DB::table('patients')->where('id', $id)->delete();
        return response($user);
    }
}
