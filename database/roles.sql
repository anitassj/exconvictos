use sistema_prismaseguros;
CREATE TABLE roles (
    id_roles INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

insert into roles (id_roles, nombre) values ('1', 'Administrador'),
('2', 'Usuario');
SELECT * FROM roles;