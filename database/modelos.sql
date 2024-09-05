use sistema_prismaseguros;
CREATE TABLE modelos(
id_modelos int not null auto_increment primary key,
id_marca int NOT NULL,
nombre varchar(100),
foreign key (id_marca) references marcas(id_marcas)
 );

-- Inserciones para la tabla de modelos de AUTOS!!!

-- toyota
insert into modelos (id_marca, nombre) values (1, 'Corolla');
insert into modelos (id_marca, nombre) values (1, 'Hilux');
insert into modelos (id_marca, nombre) values (1, 'Yaris');
-- volkswagen
insert into modelos (id_marca, nombre) values (2, 'Golf'); 
insert into modelos (id_marca, nombre) values (2, 'Polo');
insert into modelos (id_marca, nombre) values (2, 'Tiguan'); 
-- ford
insert into modelos (id_marca, nombre) values (3, 'Mustang');
insert into modelos (id_marca, nombre) values (3, 'Fiesta');
insert into modelos (id_marca, nombre) values (3, 'Ranger'); 
-- chevrolet
insert into modelos (id_marca, nombre) values (4, 'Onix'); 
insert into modelos (id_marca, nombre) values (4, 'S10');
insert into modelos (id_marca, nombre) values (4, 'Cruze');
-- renault
insert into modelos (id_marca, nombre) values (5, 'Kangoo'); 
insert into modelos (id_marca, nombre) values (5, 'Duster');
insert into modelos (id_marca, nombre) values (5, 'Logan'); 
-- fiat
insert into modelos (id_marca, nombre) values (6, 'Palio'); 
insert into modelos (id_marca, nombre) values (6, 'Strada'); 
insert into modelos (id_marca, nombre) values (6, 'Cronos'); 
-- nissan
insert into modelos (id_marca, nombre) values (7, 'Sentra');
insert into modelos (id_marca, nombre) values (7, 'Frontier');
insert into modelos (id_marca, nombre) values (7, 'Kicks'); 
-- citroen
insert into modelos (id_marca, nombre) values (8, 'C4'); 
insert into modelos (id_marca, nombre) values (8, 'C3');
insert into modelos (id_marca, nombre) values (8, 'Aircross');
-- chery
insert into modelos (id_marca, nombre) values (9, 'Tiggo 2');
insert into modelos (id_marca, nombre) values (9, 'Arrizo 5');
insert into modelos (id_marca, nombre) values (9, 'QQ'); 
-- jeep
insert into modelos (id_marca, nombre) values (10, 'Renegade'); 
insert into modelos (id_marca, nombre) values (10, 'Compass');
insert into modelos (id_marca, nombre) values (10, 'Wrangler');

-- Inserciones para la tabla de modelos de MOTOS!
-- honda
insert into modelos (id_marca, nombre) values (1, 'CBR 500R');
insert into modelos (id_marca, nombre) values (1, 'CRF 250L');
insert into modelos (id_marca, nombre) values (1, 'CBR 1000RR');
-- yamaha
insert into modelos (id_marca, nombre) values (2, 'YZF-R1');
insert into modelos (id_marca, nombre) values (2, 'MT-07');
insert into modelos (id_marca, nombre) values (2, 'FZ-09');
-- motomel
insert into modelos (id_marca, nombre) values (3, 'Skua 150');
insert into modelos (id_marca, nombre) values (3, 'Breeze 110');
insert into modelos (id_marca, nombre) values (3, 'City 100');
-- dax
insert into modelos (id_marca, nombre) values (4, 'Dax 70');
insert into modelos (id_marca, nombre) values (4, 'Dax 125');
insert into modelos (id_marca, nombre) values (4, 'Dax 50');
-- ducati
insert into modelos (id_marca, nombre) values (5, 'Monster 821');
insert into modelos (id_marca, nombre) values (5, 'Panigale V2');
insert into modelos (id_marca, nombre) values (5, 'Diavel 1260');
-- kawasaki
insert into modelos (id_marca, nombre) values (6, 'Ninja ZX-6R');
insert into modelos (id_marca, nombre) values (6, 'Z650');
insert into modelos (id_marca, nombre) values (6, 'Versys 650');
-- benelli
insert into modelos (id_marca, nombre) values (7, 'Tornado 302');
insert into modelos (id_marca, nombre) values (7, 'Leoncino 500');
insert into modelos (id_marca, nombre) values (7, 'TRK 502');
-- bmw
insert into modelos (id_marca, nombre) values (8, 'S1000RR');
insert into modelos (id_marca, nombre) values (8, 'R1250GS');
insert into modelos (id_marca, nombre) values (8, 'F900R');
-- gilera
insert into modelos (id_marca, nombre) values (9, 'Smx 200');
insert into modelos (id_marca, nombre) values (9, 'RCR 125');
insert into modelos (id_marca, nombre) values (9, 'Nexus 500');
-- zanella
insert into modelos (id_marca, nombre) values (10, 'ZB 110');
insert into modelos (id_marca, nombre) values (10, 'Ranger 250');
insert into modelos (id_marca, nombre) values (10, 'Zanella 150');

select * from modelos;