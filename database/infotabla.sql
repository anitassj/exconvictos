
-- agregar esto en la tabla del form
alter table solicitante_form
  add column id_marcas int,
  add column id_modelo int,
  drop column marca,
  drop column modelo,
  add foreign key (id_marca) references marcas(id_marcas),
  add foreign key (id_modelo) references modelos(id_modelo); 