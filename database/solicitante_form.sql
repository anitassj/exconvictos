use sistema_prismaseguros;
create table solicitante_form (
  id_solicitante int NOT NULL AUTO_INCREMENT,
  tipo enum('Auto','Moto','Bicicleta') NOT NULL,
  patente varchar(10),
  anio int,
  marca varchar(100),
  modelo varchar(100),
  nombre varchar(100),
  apellido varchar(100),
  email varchar(200),
  celular varchar(13) ,
  PRIMARY KEY (`id_solicitante`));
  
  insert into solicitante_form (tipo,patente,anio,marca,modelo,nombre,apellido,email,celular) value ('Auto','AB123CD','2018','Toyota','Corolla','Juan','Borja','solicitante@gmail.com','2345480654');

	select * from solicitante_form;