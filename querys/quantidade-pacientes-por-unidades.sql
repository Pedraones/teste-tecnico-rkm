SELECT
    COUNT(patients.id) AS "Quantidade de pacientes",
    health_units.name AS "Unidade de Saúde"
FROM patients

INNER JOIN health_units
ON health_units.id = patients.health_unit_id

GROUP BY health_units.id