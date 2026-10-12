async function getAllPatients(){
    var patients = await fetch("http://localhost:8000/api/patients").then(data => {return data.json()});

    return patients;
}

async function getAllHealthUnits(){
    var units = await fetch("http://localhost:8000/api/health-units").then(data => {return data.json()});

    return units;
}

async function listAllPatients(){
    var responseGetAllPatients = await getAllPatients();
    var responseGetHealthUnits = await getAllHealthUnits();
    var rowToListPatients = document.getElementById("listPatients");
    
    var patientStructured = structurePatientsToBeListed(responseGetAllPatients, responseGetHealthUnits);
    var lines = [];
    for(patient in patientStructured){
        line = document.createElement('tr');
        
        tdNamePatient = document.createElement('td');
        tdNamePatient.textContent = patientStructured[patient].patient;

        tdNameUnit = document.createElement('td');
        tdNameUnit.textContent = patientStructured[patient].unit;
        
        const actuallyPatientId = patientStructured[patient].patientId;

        buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('patientId', actuallyPatientId);
        buttonEdit.textContent = 'Editar';
        buttonEdit.onclick = function(){ 
            putDatasPatientInFormToBeEdited(actuallyPatientId);
        };
        
        line.appendChild(tdNamePatient);
        line.appendChild(tdNameUnit);
        line.appendChild(buttonEdit);

        rowToListPatients.appendChild(line);
    }
}

async function putDatasPatientInFormToBeEdited(patientId){
    var patient = await getPatientById(patientId);
    
    document.getElementById('name').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('birthDate').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('healthUnitId').value = '';
    document.getElementById('patientId').value = '';

    document.getElementById('name').value = patient.name;
    document.getElementById('cpf').value = patient.cpf;
    document.getElementById('birthDate').value = patient.birth_day;
    document.getElementById('phone').value = patient.phone;
    document.getElementById('healthUnitId').value = healthUnitId;
    document.getElementById('patientId').value = patientId;

    document.getElementById('buttonForm').textContent = 'Salvar edição';
}

async function getPatientById(id){
    var patient = await fetch(`http://localhost:8000/api/patients/${id}`).then(data => {return data.json()});
    
    return patient;
}

function structurePatientsToBeListed(patients, healthUnits){
    patientStructured = [];

    for(let indexPatient in patients){
        for(let indexHalthUnit in healthUnits){
            if(healthUnits[indexHalthUnit].id == patients[indexPatient].health_unit_id)
                patientStructured.push({
                    'patientId': patients[indexPatient].id,
                    'patient': patients[indexPatient].name,
                    'unit': healthUnits[indexHalthUnit].name 
                });
        }    
    }

    return patientStructured;
}

listAllPatients()