use sistema_prismaseguros;
create table datos_usuarios (
id_usuarios int auto_increment primary key, 
email varchar(100),
clave varchar(40) );

insert into datos_usuarios (email,clave) value ('usuario@gmail.com','usuario12345');

select * from datos_usuarios;