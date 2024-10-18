use sistema_prismaseguros;
create table datosVehiculo(
id_vehiculo int auto_increment primary key,
id_cliente int,
tipo_vehiculo varchar(100),
patente varchar(10),
uso_vehiculo varchar(100),
foto varchar(255),
vigencia_desde date,
vigencia_hasta date,
id_marcas int, 
id_modelos int,
id_modeloanio int,
id_planes int,
id_sumasegurada int,
premio_total int,
foreign key (id_cliente) references datosPersonales(id_cliente),
foreign key(id_marcas) references marcas(id_marcas),
foreign key(id_modelos) references modelos(id_modelos),
foreign key (id_modeloanio) references modelos_anios(id_modelo_anio),
foreign key(id_planes) references  planes(id_planes),
foreign key(id_sumasegurada) references  planes_precios(id_precioPlan)
);
-- drop table datosVehiculo; //BORRAAAAAAAAR TABLA ANTIGUA Y HACERLA OTRA VEZ CON ESTOS CAMBIOS! 
/*SI NO LOS DEJA CAMBIEN EL MODO SAFE : SET SQL_SAFE_UPDATES = 0; */
/*PARA VOLVER AL MODO SAFE : SET SQL_SAFE_UPDATES = 1;*/