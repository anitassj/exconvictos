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
provincia varchar(100)
);

insert into datosPersonales(nombre,apellido,dni,email,celular,direccion,ciudad,provincia)
values('Clara', 'Martínez', '77777777', 'clara@gmail.com', '0303456000', 'Pellegrini 7', 'Chivilcoy', 'Buenos Aires');

