async function getAllHealthUnits(){
    var units = await fetch("http://localhost:8000/api/health-units").then(data => {return data.json()});

    return units;
}

async function listHealthUnitisInTagSelect() {
    units = await getAllHealthUnits();

    select = document.getElementById("healthUnitId");
    
    units = structureUnitsToBeListed(units);
    
    for(indexUnit in units){
        option = document.createElement('option');
        option.setAttribute('value', units[indexUnit].id)
        option.textContent = units[indexUnit].name
        
        select.appendChild(option);
    }
}

function structureUnitsToBeListed(healthUnits){
    unitsStructured = [];
    
    for(indexUnit in healthUnits){
        unitsStructured.push({
            "id": healthUnits[indexUnit].id,
            "name": healthUnits[indexUnit].name
        });
    }

    return unitsStructured;
}

async function existCpf(cpf){
    var patients = await fetch("http://localhost:8000/api/patients").then(data => {return data.json()});
    
    for(indexPatient in patients){
        if(patients[indexPatient].cpf == cpf) return true;
    }

    return false;
}

async function storePatient(event){
    event.preventDefault();
    var datas = {
        'name': document.getElementById('name').value,
        'cpf': document.getElementById('cpf').value,
        'phone': document.getElementById('phone').value,
        'birthday': document.getElementById('birthDate').value,
        'HealthUnitId': document.getElementById('healthUnitId').value,
    };

    const existCpfPatient = await existCpf(datas.cpf);
    
    if(existCpfPatient){
        datas = {};
        return alert('Criação interrompida: já existe paciente com este CPF');
    }
    
    res = await fetch("http://localhost:8000/api/patients", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(datas)
    });
    
    window.location.reload();
}

listHealthUnitisInTagSelect()