USE sistema_prismaseguros;
-- Borrar la tabla modelos

CREATE TABLE modelos(
    id_modelos INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_marcas INT NOT NULL, -- Cambie id_marca por id_marcas
    nombre VARCHAR(100),
    FOREIGN KEY (id_marcas) REFERENCES marcas(id_marcas) -- Cambie id_marca por id_marcas
);

-- Inserciones para la tabla de modelos de AUTOS!!!

-- Toyota
INSERT INTO modelos (id_marcas, nombre) VALUES (1, 'Corolla');
INSERT INTO modelos (id_marcas, nombre) VALUES (1, 'Hilux');
INSERT INTO modelos (id_marcas, nombre) VALUES (1, 'Yaris');
-- Volkswagen
INSERT INTO modelos (id_marcas, nombre) VALUES (2, 'Golf');
INSERT INTO modelos (id_marcas, nombre) VALUES (2, 'Polo');
INSERT INTO modelos (id_marcas, nombre) VALUES (2, 'Tiguan');
-- Ford
INSERT INTO modelos (id_marcas, nombre) VALUES (3, 'Mustang');
INSERT INTO modelos (id_marcas, nombre) VALUES (3, 'Fiesta');
INSERT INTO modelos (id_marcas, nombre) VALUES (3, 'Ranger');

-- Chevrolet
INSERT INTO modelos (id_marcas, nombre) VALUES (4, 'Onix');
INSERT INTO modelos (id_marcas, nombre) VALUES (4, 'S10');
INSERT INTO modelos (id_marcas, nombre) VALUES (4, 'Cruze');

-- Renault
INSERT INTO modelos (id_marcas, nombre) VALUES (5, 'Kangoo');
INSERT INTO modelos (id_marcas, nombre) VALUES (5, 'Duster');
INSERT INTO modelos (id_marcas, nombre) VALUES (5, 'Logan');
-- Fiat
INSERT INTO modelos (id_marcas, nombre) VALUES (6, 'Palio');
INSERT INTO modelos (id_marcas, nombre) VALUES (6, 'Strada');
INSERT INTO modelos (id_marcas, nombre) VALUES (6, 'Cronos');
-- Nissan
INSERT INTO modelos (id_marcas, nombre) VALUES (7, 'Sentra');
INSERT INTO modelos (id_marcas, nombre) VALUES (7, 'Frontier');
INSERT INTO modelos (id_marcas, nombre) VALUES (7, 'Kicks');
-- Citroen
INSERT INTO modelos (id_marcas, nombre) VALUES (8, 'C4');
INSERT INTO modelos (id_marcas, nombre) VALUES (8, 'C3');
INSERT INTO modelos (id_marcas, nombre) VALUES (8, 'Aircross');
-- Chery
INSERT INTO modelos (id_marcas, nombre) VALUES (9, 'Tiggo 2');
INSERT INTO modelos (id_marcas, nombre) VALUES (9, 'Arrizo 5');
INSERT INTO modelos (id_marcas, nombre) VALUES (9, 'QQ');
-- Jeep
INSERT INTO modelos (id_marcas, nombre) VALUES (10, 'Renegade');
INSERT INTO modelos (id_marcas, nombre) VALUES (10, 'Compass');
INSERT INTO modelos (id_marcas, nombre) VALUES (10, 'Wrangler');
-- Inserciones para la tabla de modelos de MOTOS!

-- Honda
INSERT INTO modelos (id_marcas, nombre) VALUES (11, 'CBR 500R');
INSERT INTO modelos (id_marcas, nombre) VALUES (11, 'CRF 250L');
INSERT INTO modelos (id_marcas, nombre) VALUES (11, 'CBR 1000RR');
-- Yamaha
INSERT INTO modelos (id_marcas, nombre) VALUES (12, 'YZF-R1');
INSERT INTO modelos (id_marcas, nombre) VALUES (12, 'MT-07');
INSERT INTO modelos (id_marcas, nombre) VALUES (12, 'FZ-09');
-- Motomel
INSERT INTO modelos (id_marcas, nombre) VALUES (13, 'Skua 150');
INSERT INTO modelos (id_marcas, nombre) VALUES (13, 'Breeze 110');
INSERT INTO modelos (id_marcas, nombre) VALUES (13, 'City 100');
-- Dax
INSERT INTO modelos (id_marcas, nombre) VALUES (14, 'Dax 70');
INSERT INTO modelos (id_marcas, nombre) VALUES (14, 'Dax 125');
INSERT INTO modelos (id_marcas, nombre) VALUES (14, 'Dax 50');
-- Ducati
INSERT INTO modelos (id_marcas, nombre) VALUES (15, 'Monster 821');
INSERT INTO modelos (id_marcas, nombre) VALUES (15, 'Panigale V2');
INSERT INTO modelos (id_marcas, nombre) VALUES (15, 'Diavel 1260');
-- Kawasaki
INSERT INTO modelos (id_marcas, nombre) VALUES (16, 'Ninja ZX-6R');
INSERT INTO modelos (id_marcas, nombre) VALUES (16, 'Z650');
INSERT INTO modelos (id_marcas, nombre) VALUES (16, 'Versys 650');
-- Benelli
INSERT INTO modelos (id_marcas, nombre) VALUES (17, 'Tornado 302');
INSERT INTO modelos (id_marcas, nombre) VALUES (17, 'Leoncino 500');
INSERT INTO modelos (id_marcas, nombre) VALUES (17, 'TRK 502');
-- BMW
INSERT INTO modelos (id_marcas, nombre) VALUES (18, 'S1000RR');
INSERT INTO modelos (id_marcas, nombre) VALUES (18, 'R1250GS');
INSERT INTO modelos (id_marcas, nombre) VALUES (18, 'F900R');
-- Gilera
INSERT INTO modelos (id_marcas, nombre) VALUES (19, 'Smx 200');
INSERT INTO modelos (id_marcas, nombre) VALUES (19, 'RCR 125');
INSERT INTO modelos (id_marcas, nombre) VALUES (19, 'Nexus 500');
-- Zanella
INSERT INTO modelos (id_marcas, nombre) VALUES (20, 'ZB 110');
INSERT INTO modelos (id_marcas, nombre) VALUES (20, 'Ranger 250');
INSERT INTO modelos (id_marcas, nombre) VALUES (20, 'Zanella 150');

SELECT * FROM modelos;