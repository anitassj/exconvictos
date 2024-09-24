use sistema_prismaseguros;
create table perfil_usuario(
idPerfilUsuario int auto_increment primary key,
nombre varchar(100),
apellido varchar(100),
dni varchar(9),
email varchar(200),
celular varchar(10),
direccion varchar(100),
ciudad varchar(100),
provincia varchar(100),
tipo_vehiculo varchar(100),
patente varchar(10),
anio varchar(4),
vigencia_desde date,
vigencia_hasta date,
fotos varchar(255),
tipo_seguro varchar(100),
premio_total varchar(100),
suma_asegurada varchar(100),
uso_vehiculo varchar(100)
);

insert into perfil_usuario(nombre, apellido, dni, email, celular, direccion, ciudad, provincia, tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, fotos, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo)values("Clara", "Martínez", 07777777, "cm@mail.com", 0303456, "Pellegrini 7", "Chivilcoy", "Buenos Aires", "Auto", "cc777cc", 2007, "2024/05/07", "2025/05/07", "www.google.com", "premium", 777777, 7777777, "particular");

select * from perfil_usuario;