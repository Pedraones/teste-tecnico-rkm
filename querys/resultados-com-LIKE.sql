SELECT
    patients.name AS "Paciente",
    health_units.name AS "Unidade de Saúde"
FROM patients

INNER JOIN health_units
ON health_units.id = patients.health_unit_id

WHERE patients.name LIKE "%MARIA%"