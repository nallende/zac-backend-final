CREATE PROCEDURE `afp` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from afp;

CREATE PROCEDURE `empresa` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from empresa;

CREATE PROCEDURE `empresavigente` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from empresa
where estado = 1;

CREATE PROCEDURE `modulo` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from modulo;

CREATE PROCEDURE `moduloempresa` ()  select 
moem.*, 
case(moem.estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto,
empresa.nombre as empresa,
modulo.nombre as modulo
from modulo_empresa moem JOIN
modulo  on moem.idmodulo = modulo.idmodulo JOIN
empresa on moem.idempresa = empresa.idempresa;

CREATE PROCEDURE `modulovigente` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from modulo
where estado = 1;

CREATE PROCEDURE `personal` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from personal;

CREATE PROCEDURE `salud` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from salud;

CREATE PROCEDURE `tipocontrato` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from tipocontrato;

CREATE PROCEDURE `tipodescuento` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from tipodescuento;

CREATE PROCEDURE `tipodescuentovigente` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from tipodescuento
where estado = 1;

CREATE PROCEDURE `tipoingreso` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from tipoingreso;

CREATE PROCEDURE `tipoingresovigente` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from tipoingreso
where estado = 1;

CREATE PROCEDURE `usuario` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from usuario;

CREATE PROCEDURE `usuarioempresa` ()  select 
moem.*, 
case(moem.estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto,
empresa.nombre as empresa,
concat(usuario.nombre,' ',usuario.apellido,' (',usuario.email,')') as usuario
from usuario_empresa moem JOIN
usuario  on moem.idusuario = usuario.idusuario JOIN
empresa on moem.idempresa = empresa.idempresa;

CREATE PROCEDURE `usuariovigente` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from usuario
where estado = 1;

DELIMITER ;