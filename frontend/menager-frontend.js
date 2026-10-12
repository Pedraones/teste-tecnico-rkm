async function getAllPatients(){
    var patients = await fetch("http://localhost:8000/api/patients").then(data => {return data.json()});

    return patients;
}

async function getAllHealthUnits(){
    var units = await fetch("http://localhost:8000/api/health-units").then(data => {return data.json()});

    return units;
}

function structurePatientsToBeListed(patients, healthUnits){
    patientStructured = [];

    for(let indexPatient in patients){
        for(let indexHalthUnit in healthUnits){
            if(healthUnits[indexHalthUnit].id == patients[indexPatient].health_unit_id)
                patientStructured.push({
                    'patient': patients[indexPatient].name,
                    'unit': healthUnits[indexHalthUnit].name 
                });
        }    
    }

    return patientStructured;
}