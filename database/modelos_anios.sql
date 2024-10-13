CREATE TABLE modelos_anios (
    id_modelo_anio INT AUTO_INCREMENT PRIMARY KEY,
    id_modelos INT,
    anio INT,
    FOREIGN KEY (id_modelos) REFERENCES modelos(id_modelos)
);
INSERT INTO modelos_anios (id_modelos, anio) VALUES (1, 2018), (1, 2019), (1, 2020), (1, 2021); -- Corolla
INSERT INTO modelos_anios (id_modelos, anio) VALUES (2, 2018), (2, 2019), (2, 2020), (2, 2021); -- Hilux
INSERT INTO modelos_anios (id_modelos, anio) VALUES (3, 2019), (3, 2020), (3, 2021); -- Yaris

-- Volkswagen
INSERT INTO modelos_anios (id_modelos, anio) VALUES (4, 2019), (4, 2020), (4, 2021); -- Golf
INSERT INTO modelos_anios (id_modelos, anio) VALUES (5, 2018), (5, 2019), (5, 2020); -- Polo
INSERT INTO modelos_anios (id_modelos, anio) VALUES (6, 2020), (6, 2021), (6, 2022); -- Tiguan

-- Ford
INSERT INTO modelos_anios (id_modelos, anio) VALUES (7, 2018), (7, 2019), (7, 2020); -- Mustang
INSERT INTO modelos_anios (id_modelos, anio) VALUES (8, 2019), (8, 2020), (8, 2021); -- Fiesta
INSERT INTO modelos_anios (id_modelos, anio) VALUES (9, 2020), (9, 2021), (9, 2022); -- Ranger

-- Chevrolet
INSERT INTO modelos_anios (id_modelos, anio) VALUES (10, 2019), (10, 2020), (10, 2021); -- Onix
INSERT INTO modelos_anios (id_modelos, anio) VALUES (11, 2018), (11, 2019), (11, 2020); -- S10
INSERT INTO modelos_anios (id_modelos, anio) VALUES (12, 2020), (12, 2021), (12, 2022); -- Cruze

-- Renault
INSERT INTO modelos_anios (id_modelos, anio) VALUES (13, 2018), (13, 2019), (13, 2020); -- Kangoo
INSERT INTO modelos_anios (id_modelos, anio) VALUES (14, 2019), (14, 2020), (14, 2021); -- Duster
INSERT INTO modelos_anios (id_modelos, anio) VALUES (15, 2020), (15, 2021), (15, 2022); -- Logan

-- Fiat
INSERT INTO modelos_anios (id_modelos, anio) VALUES (16, 2018), (16, 2019), (16, 2020); -- Palio
INSERT INTO modelos_anios (id_modelos, anio) VALUES (17, 2019), (17, 2020), (17, 2021); -- Strada
INSERT INTO modelos_anios (id_modelos, anio) VALUES (18, 2020), (18, 2021), (18, 2022); -- Cronos

-- Nissan
INSERT INTO modelos_anios (id_modelos, anio) VALUES (19, 2018), (19, 2019), (19, 2020); -- Sentra
INSERT INTO modelos_anios (id_modelos, anio) VALUES (20, 2019), (20, 2020), (20, 2021); -- Frontier
INSERT INTO modelos_anios (id_modelos, anio) VALUES (21, 2020), (21, 2021), (21, 2022); -- Kicks

-- Citroen
INSERT INTO modelos_anios (id_modelos, anio) VALUES (22, 2018), (22, 2019), (22, 2020); -- C4
INSERT INTO modelos_anios (id_modelos, anio) VALUES (23, 2019), (23, 2020), (23, 2021); -- C3
INSERT INTO modelos_anios (id_modelos, anio) VALUES (24, 2020), (24, 2021), (24, 2022); -- Aircross

-- Chery
INSERT INTO modelos_anios (id_modelos, anio) VALUES (25, 2018), (25, 2019), (25, 2020); -- Tiggo 2
INSERT INTO modelos_anios (id_modelos, anio) VALUES (26, 2019), (26, 2020), (26, 2021); -- Arrizo 5
INSERT INTO modelos_anios (id_modelos, anio) VALUES (27, 2020), (27, 2021), (27, 2022); -- QQ

-- Jeep
INSERT INTO modelos_anios (id_modelos, anio) VALUES (28, 2018), (28, 2019), (28, 2020); -- Renegade
INSERT INTO modelos_anios (id_modelos, anio) VALUES (29, 2020), (29, 2021), (29, 2022); -- Compass
INSERT INTO modelos_anios (id_modelos, anio) VALUES (30, 2021), (30, 2022), (30, 2023); -- Wrangler

-- Motos
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(31, 2018), (31, 2019), (31, 2020), (31, 2021), (31, 2022); -- CBR 500R
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(32, 2018), (32, 2019), (32, 2020), (32, 2021), (32, 2022); -- CRF 250L
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(33, 2018), (33, 2019), (33, 2020), (33, 2021), (33, 2022); -- CBR 1000RR
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(34, 2018), (34, 2019), (34, 2020), (34, 2021), (34, 2022); -- YZF-R1
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(35, 2018), (35, 2019), (35, 2020), (35, 2021), (35, 2022); -- MT-07
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(36, 2018), (36, 2019), (36, 2020), (36, 2021), (36, 2022); -- FZ-09
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(37, 2018), (37, 2019), (37, 2020), (37, 2021), (37, 2022); -- Skua 150
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(38, 2018), (38, 2019), (38, 2020), (38, 2021), (38, 2022); -- Breeze 110
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(39, 2018), (39, 2019), (39, 2020), (39, 2021), (39, 2022); -- City 100
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(40, 2018), (40, 2019), (40, 2020), (40, 2021), (40, 2022); -- Dax 70
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(41, 2018), (41, 2019), (41, 2020), (41, 2021), (41, 2022); -- Dax 125
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(42, 2018), (42, 2019), (42, 2020), (42, 2021), (42, 2022); -- Dax 50
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(43, 2018), (43, 2019), (43, 2020), (43, 2021), (43, 2022); -- Monster 821
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(44, 2018), (44, 2019), (44, 2020), (44, 2021), (44, 2022); -- Panigale V2
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(45, 2018), (45, 2019), (45, 2020), (45, 2021), (45, 2022); -- Diavel 1260
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(46, 2018), (46, 2019), (46, 2020), (46, 2021), (46, 2022); -- Ninja ZX-6R
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(47, 2018), (47, 2019), (47, 2020), (47, 2021), (47, 2022); -- Z650
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(48, 2018), (48, 2019), (48, 2020), (48, 2021), (48, 2022); -- Versys 650
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(49, 2018), (49, 2019), (49, 2020), (49, 2021), (49, 2022); -- Tornado 302
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(50, 2018), (50, 2019), (50, 2020), (50, 2021), (50, 2022); -- Leoncino 500
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(51, 2018), (51, 2019), (51, 2020), (51, 2021), (51, 2022); -- TRK 502
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(52, 2018), (52, 2019), (52, 2020), (52, 2021), (52, 2022); -- S1000RR
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(53, 2018), (53, 2019), (53, 2020), (53, 2021), (53, 2022); -- R1250GS
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(54, 2018), (54, 2019), (54, 2020), (54, 2021), (54, 2022); -- F900R
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(55, 2018), (55, 2019), (55, 2020), (55, 2021), (55, 2022); -- Smx 200
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(56, 2018), (56, 2019), (56, 2020), (56, 2021), (56, 2022); -- RCR 125
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(57, 2018), (57, 2019), (57, 2020), (57, 2021), (57, 2022); -- Nexus 500
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(58, 2018), (58, 2019), (58, 2020), (58, 2021), (58, 2022); -- ZB 110
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(59, 2018), (59, 2019), (59, 2020), (59, 2021), (59, 2022); -- Ranger 250
INSERT INTO modelos_anios (id_modelos, anio) VALUES 
(60, 2018), (60, 2019), (60, 2020), (60, 2021), (60, 2022); -- Zanella 150

select * from modelos_anios;