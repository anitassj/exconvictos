create table planes_precios (
id_precioPlan int auto_increment primary key,
id_modelo_anio int,
id_planes int,
precio decimal,
foreign key (id_modelo_anio) references modelos_anios (id_modelo_anio), /*con este id puedo utilizar la marca, modelo y su anio, para despues ref con los planes*/
foreign key (id_planes) references planes (id_planes) /*referencio la tabla PLANES para utilizar su id, y segun el tipo de plan(1,2,3) le pongo el valor*/
);
-- select * from modelos_anios;
INSERT INTO planes_precios (id_modelo_anio, id_planes, precio) VALUES
-- corolla 2018
(1, 1, 18000), 
(1, 2, 23000), 
(1, 3, 30000), 
-- hilux 2018
(2, 1, 20000), -- Hilux 2018, Básico
(2, 2, 26000), -- Hilux 2018, Intermedio
(2, 3, 33000), -- Hilux 2018, Premium
-- cbr 500r
(97, 1, 12000), 
(97, 2, 15000), 
(97, 3, 25000), 
-- dax 70
(138, 1, 10000), 
(138, 2, 12000), 
(138, 3, 15000);
select * from planes_precios;

SELECT p.tipo, ma.anio, mp.precio
FROM planes_precios mp
JOIN modelos_anios ma ON mp.id_modelo_anio = ma.id_modelo_anio
JOIN planes p ON mp.id_planes = p.id_planes
JOIN modelos m ON ma.id_modelos = m.id_modelos
JOIN marcas marca ON m.id_marcas = marca.id_marcas
WHERE marca.nombre = 'Toyota' AND m.nombre = 'Corolla' AND ma.anio = 2018 AND p.tipo = 'Plan básico';

/*SELECT marca.nombre AS marca, m.nombre AS modelo, ma.anio, p.tipo AS plan, mp.precio -- alias para los campos de las tablas
FROM planes_precios mp 
JOIN modelos_anios ma ON mp.id_modelo_anio = ma.id_modelo_anio
JOIN planes p ON mp.id_planes = p.id_planes
JOIN modelos m ON ma.id_modelos = m.id_modelos
JOIN marcas marca ON m.id_marcas = marca.id_marcas
WHERE marca.nombre = 'Toyota'  AND m.nombre = 'Corolla'  AND ma.anio = 2018 AND p.tipo = 'Plan intermedio';*/
 