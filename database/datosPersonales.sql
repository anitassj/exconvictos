use sistema_prismaseguros;
create table datosPersonales(
id_cliente int auto_increment primary key,
nombre varchar(100),
apellido varchar(100),
dni varchar(9),
email varchar(200),
celular varchar(10),
direccion varchar(100),
ciudad varchar(100),
provincia varchar(100),
id_vehiculo int);

