async function getAllPatients(){
    var patients = await fetch("http://localhost:8000/api/patients").then(data => {return data.json()});

    return patients;
}