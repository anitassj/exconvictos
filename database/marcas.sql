USE sistema_prismaseguros;
-- Borrar la tabla marcas


CREATE TABLE marcas (
    id_marcas INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('Auto', 'Moto') NOT NULL,
    nombre VARCHAR(100) NOT NULL
);

-- Inserciones para la tabla de marcas de autos
insert into marcas (tipo, nombre) values ('Auto', 'Toyota');
insert into marcas (tipo, nombre) values ('Auto', 'Volkswagen');
insert into marcas (tipo, nombre) values ('Auto', 'Ford');
insert into marcas (tipo, nombre) values ('Auto', 'Chevrolet');
insert into marcas (tipo, nombre) values ('Auto', 'Renault');
insert into marcas (tipo, nombre) values ('Auto', 'Fiat');
insert into marcas (tipo, nombre) values ('Auto', 'Nissan');
insert into marcas (tipo, nombre) values ('Auto', 'Citroen');
insert into marcas (tipo, nombre) values ('Auto', 'Chery');
insert into marcas (tipo, nombre) values ('Auto', 'Jeep');

-- Inserciones para la tabla de marcas de motos
insert into marcas (tipo, nombre) values ('Moto', 'Honda');
insert into marcas (tipo, nombre) values ('Moto', 'Yamaha');
insert into marcas (tipo, nombre) values ('Moto', 'Motomel');
insert into marcas (tipo, nombre) values ('Moto', 'Dax');
insert into marcas (tipo, nombre) values ('Moto', 'Ducati');
insert into marcas (tipo, nombre) values ('Moto', 'Kawasaki'); 
insert into marcas (tipo, nombre) values ('Moto', 'Benelli');
insert into marcas (tipo, nombre) values ('Moto', 'BMW');
insert into marcas (tipo, nombre) values ('Moto', 'Gilera');
insert into marcas (tipo, nombre) values ('Moto', 'Zanella');

-- mostrar las marcas
select * from marcas;