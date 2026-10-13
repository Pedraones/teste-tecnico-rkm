var buttonSearchPatient = document.getElementById("buttonSearchPatient");

buttonSearchPatient.addEventListener("click", async function(){
    document.getElementById('listPatients').remove();

    const textInserted = {
        "name": document.getElementById("inputSearchPatient").value
    };
    
    const patientsFindeds = await fetch("http://localhost:8000/api/patients/search-by-name", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(textInserted)
    }).then(response => {return response.json()});

    const table = document.createElement("table");
    table.setAttribute("id","listPatients");
    
    const rowHeaderTable = document.createElement("tr");
    
    const patientTd = document.createElement("td");
    patientTd.textContent = "Pacientes";

    const unitTd = document.createElement("td");
    unitTd.textContent = "Unidades";

    rowHeaderTable.appendChild(patientTd);
    rowHeaderTable.appendChild(unitTd);
    table.appendChild(rowHeaderTable);
    document.getElementById("body").appendChild(table);

    const responseGetHealthUnits = await getAllHealthUnits();
    var patientStructured = structurePatientsToBeListed(patientsFindeds, responseGetHealthUnits);

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

        buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('patientId', actuallyPatientId);
        buttonDelete.textContent = 'Deletar';
        buttonDelete.onclick = async function(){ 
            let verifyDesired = prompt('Caso realmente deseje excluir o paciente digite: "DELETAR", então clique em "Ok"');

            if(verifyDesired == "DELETAR"){
                let response = await deletePatient(actuallyPatientId);
                alert(response);
                window.location.reload();
            }
        };
        
        line.appendChild(tdNamePatient);
        line.appendChild(tdNameUnit);
        line.appendChild(buttonEdit);
        line.appendChild(buttonDelete);

        table.appendChild(line);
    }
})

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

async function getAllHealthUnits(){
    var units = await fetch("http://localhost:8000/api/health-units").then(data => {return data.json()});

    return units;
}