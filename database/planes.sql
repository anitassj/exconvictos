CREATE TABLE planes (
id_planes int auto_increment primary key,
tipo varchar(100),
premio_total decimal);

INSERT INTO planes (tipo, premio_total) VALUES 
('Plan Básico', 15000),
('Plan Intermedio', 30000),
('Plan Premium', 60000);

SELECT * FROM planes;