create table exconvictos_usuarios(
id_usuarios int not null auto_increment,
email varchar(70) not null,
clave varchar(30) not null,
primary key (id_usuarios)
);
insert into exconvictos_usuarios (email,clave) value ('prueba123@gmail.com','12345');
select * from exconvictos_usuarios;
