use sistema_prismaseguros;
create table vehiculo(
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
select * from vehiculo;