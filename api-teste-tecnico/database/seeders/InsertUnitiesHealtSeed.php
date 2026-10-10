<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InsertUnitiesHealtSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $healhUnitisToAdd = [
            [
                "name" => "Casa de Saúde Santa Marcelina",
                "city" => "São Paulo",
                "created_at" => now()
            ],
            [
                "name" => "Hospital Amaral Carvalho",
                "city" => "Jaú",
                "created_at" => now()
            ],
            [
                "name" => "Hospital das Clínicas de Botucatu",
                "city" => "Botucatu",
                "created_at" => now()
            ]
        ];
        for ($unit = 0; $unit < count($healhUnitisToAdd); $unit++) { 
            DB::table("health_units")->insert($healhUnitisToAdd[$unit]);
        }
    }
}
