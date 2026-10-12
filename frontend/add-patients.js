async function getAllHealthUnits(){
    var units = await fetch("http://localhost:8000/api/health-units").then(data => {return data.json()});

    return units;
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