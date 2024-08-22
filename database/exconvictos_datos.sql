create table exconvictos_datos (
id_preso int auto_increment,
nombre varchar(30), 
apellido varchar(30),
dni int not null, 
fecha_nac date, 
ciudad_natal varchar(30), 
ciudad_prox varchar(30),
num_causa int not null,
abogado varchar(30), 
juzgado varchar(30),
primary key (id_preso)
);

