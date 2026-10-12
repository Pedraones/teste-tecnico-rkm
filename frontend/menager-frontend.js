async function getAllPatients(){
    var patients = await fetch("http://localhost:8000/api/patients").then(data => {return data.json()});

    return patients;
}

async function getAllHealthUnits(){
    var units = await fetch("http://localhost:8000/api/health-units").then(data => {return data.json()});

    return units;
}