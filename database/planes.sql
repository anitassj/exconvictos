CREATE TABLE planes (
id_planes int auto_increment primary key,
tipo varchar(100)
);

INSERT INTO planes (tipo) VALUES 
('Plan básico'),
('Plan intermedio'),
('Plan premium');

SELECT * FROM planes;

