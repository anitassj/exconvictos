use sistema_prismaseguros;
create table vehiculo(
idVehiculo int auto_increment primary key,
tipo_vehiculo varchar(100),
patente varchar(10),
anio varchar(4),
vigencia_desde date,
vigencia_hasta date,
fotos varchar(255),
tipo_seguro varchar(100),
premio_total varchar(100),
suma_asegurada varchar(100),
uso_vehiculo varchar(100),
idPerfilUsuario INT,
FOREIGN KEY (idPerfilUsuario) REFERENCES perfil_usuario(idPerfilUsuario)
);

INSERT INTO vehiculo (tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, fotos, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo, idPerfilUsuario)
VALUES ("Auto", "cc777cc", 2007, "2024/05/07", "2025/05/07", "www.google.com", "premium", 777777, 7777777, "particular", LAST_INSERT_ID());

select * from vehiculo;