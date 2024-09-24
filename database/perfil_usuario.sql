use sistema_prismaseguros;
create table perfil_usuario(
idPerfilUsuario int auto_increment primary key,
nombre varchar(100),
apellido varchar(100),
email varchar(200),
celular varchar(10),
direccion varchar(100),
ciudad varchar(100),
provincia varchar(100),
tipo_vehiculo varchar(100),
patente varchar(10),
anio varchar(4),
vigencia_desde varchar(50),
vigencia_hasta varchar(50),
fotos varchar(255),
tipo_seguro varchar(100),
premio_total varchar(100),
suma_asegurada varchar(100),
uso_vehiculo varchar(100)
);