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
    provincia varchar(100)
);

insert into perfil_usuario(nombre, apellido, dni, email, celular, direccion, ciudad, provincia)values("Clara", "Martínez", 07777777, "cm@mail.com", 0303456, "Pellegrini 7", "Chivilcoy", "Buenos Aires");

select * from perfil_usuario;