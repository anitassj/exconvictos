use sistema_prismaseguros;
CREATE TABLE solicitante_form (
  id_solicitante int not null auto_increment primary key,
  tipo enum('Auto', 'Moto') NOT NULL,
  patente varchar(10),
  anio int,
  id_marca int NOT NULL, 
  id_modelo int NOT NULL,
  nombre varchar(100),
  apellido varchar(100),
  email varchar(200),
  celular varchar(10),
  foreign key (id_marca) references marcas(id_marcas),
  foreign key (id_modelo) references modelos(id_modelos)
); 

-- AGREGUEN ESTO A LA TABLA !!
-- 1)
use sistema_prismaseguros;
ALTER TABLE solicitante_form ADD COLUMN leido BOOLEAN DEFAULT FALSE;

-- 2)
USE sistema_prismaseguros;
ALTER TABLE solicitante_form
ADD archivada TINYINT(1) DEFAULT 0 NOT NULL;


-- inserciones de prueba
insert into solicitante_form (tipo, patente, anio, id_marca, id_modelo, nombre, apellido, email, celular) 
values ('Auto', 'ABC123', 2023, 1, 1, 'Clari', 'Marti', 'clar.martz@gmail.com', '1234567890');

insert into solicitante_form (tipo, patente, anio, id_marca, id_modelo, nombre, apellido, email, celular) 
values ('Moto', 'XYZ789', 2022, 2, 2, 'Clara', 'Martin', 'clara.maratin@gmail.com', '0987654321');

insert into solicitante_form (tipo, patente, anio, id_marca, id_modelo, nombre, apellido, email, celular) 
values ('Auto', 'BI456ED', 2024, 10, 3, 'Clar', 'Martinne', 'clarmartinne@gmail.com', '1122334455');


select * from solicitante_form;
