-- Eliminar la clave foránea en la tabla modelos
ALTER TABLE modelos DROP FOREIGN KEY modelos_ibfk_1;

-- Borrar las tabla
DROP TABLE IF EXISTS marcas;

-- Volver a crear la tablas, estan en los codigos marcas y modelos.