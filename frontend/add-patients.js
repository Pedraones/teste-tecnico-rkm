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

listHealthUnitisInTagSelect()