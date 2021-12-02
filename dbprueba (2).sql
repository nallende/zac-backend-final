-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-12-2021 a las 16:04:50
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbprueba`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `afp` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from afp$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `empresa` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from empresa$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `empresavigente` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from empresa
where estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `modulo` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from modulo$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `moduloempresa` ()  select 
moem.*, 
case(moem.estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto,
empresa.nombre as empresa,
modulo.nombre as modulo
from modulo_empresa moem JOIN
modulo  on moem.idmodulo = modulo.idmodulo JOIN
empresa on moem.idempresa = empresa.idempresa$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `modulovigente` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from modulo
where estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `personal` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from personal$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `salud` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from salud$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `tipocontrato` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from tipocontrato$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `tipodescuento` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from tipodescuento$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `tipodescuentovigente` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from tipodescuento
where estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `tipoingreso` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from tipoingreso$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `tipoingresovigente` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from tipoingreso
where estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usuario` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from usuario$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usuarioempresa` ()  select 
moem.*, 
case(moem.estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto,
empresa.nombre as empresa,
concat(usuario.nombre,' ',usuario.apellido,' (',usuario.email,')') as usuario
from usuario_empresa moem JOIN
usuario  on moem.idusuario = usuario.idusuario JOIN
empresa on moem.idempresa = empresa.idempresa$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usuariovigente` ()  select *, case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end as estadotexto from usuario
where estado = 1$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `afp`
--

CREATE TABLE `afp` (
  `idafp` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `afp`
--

INSERT INTO `afp` (`idafp`, `nombre`, `estado`, `fecha`) VALUES
(10, 'UNO', 1, '2021-10-24 00:00:00'),
(11, 'MODELO', 1, '2021-10-24 00:00:00'),
(12, 'CAPITAL', 1, '2021-10-24 00:00:00'),
(14, 'CASA', 0, '2021-10-24 00:00:00'),
(16, 'fdgfdgdfg', 1, '2021-11-29 00:00:00'),
(17, 'fdgdfdsss', 1, '2021-11-29 00:00:00'),
(18, 'fdgfdgdfgssss', 1, '2021-11-29 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

CREATE TABLE `cargo` (
  `idcargo` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contrato`
--

CREATE TABLE `contrato` (
  `idcontrato` int(11) NOT NULL,
  `idtipocontrato` int(11) NOT NULL,
  `idcargo` int(11) NOT NULL,
  `idpersonal` int(11) NOT NULL,
  `idafp` int(11) NOT NULL,
  `idsalud` int(11) NOT NULL,
  `sueldobase` int(11) NOT NULL,
  `porcentajeafp` double NOT NULL,
  `porcentajesalud` double NOT NULL,
  `fechacontrato` date NOT NULL,
  `fechafiniquito` date DEFAULT NULL,
  `fechamovimiento` date NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descuento`
--

CREATE TABLE `descuento` (
  `iddescuento` int(11) NOT NULL,
  `idcontrato` int(11) NOT NULL,
  `idtipodescuento` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `valor` int(11) NOT NULL,
  `fechadescuento` date NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `idempresa` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` int(11) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `contacto` varchar(100) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `rut` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`idempresa`, `nombre`, `direccion`, `telefono`, `mail`, `contacto`, `imagen`, `rut`, `estado`, `fecha`) VALUES
(1, 'Empresa 3', 'Direccion 3', 91234567, 'correo111@correo.cl', 'Enrique Rodriguezz', '', 19, 1, '2021-09-01 00:00:00'),
(2, 'Empresa 2sdadasd', 'Direccion 2', 91234567, 'correoq@correo.cl', 'Carlos Rojas', '', 19, 0, '0000-00-00 00:00:00'),
(3, 'Empresa 10', 'Calle 1, Santiago', 912345678, 'empresa10@empresa.cl', 'Carolina Soto', '', 65158379, 1, '2021-11-29 00:00:00'),
(4, 'Empresa 11', 'Calle 50 , Santiago', 912345678, 'empresa1@empresa.cl', 'Matías Delgado', '', 11111111, 1, '2021-11-29 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `links`
--

CREATE TABLE `links` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `log`
--

CREATE TABLE `log` (
  `idlog` int(11) NOT NULL,
  `accion` varchar(50) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulo`
--

CREATE TABLE `modulo` (
  `idmodulo` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `modulo`
--

INSERT INTO `modulo` (`idmodulo`, `nombre`, `estado`, `fecha`) VALUES
(1, 'Administracion', 1, '0000-00-00 00:00:00'),
(2, 'Gestion Personas', 0, '2021-10-24 11:45:39'),
(3, 'Remuneracions', 1, '2021-10-24 11:45:48'),
(22, 'casaasssss', 0, '2021-11-29 00:38:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulo_empresa`
--

CREATE TABLE `modulo_empresa` (
  `idmoduloempresa` int(11) NOT NULL,
  `idmodulo` int(11) NOT NULL,
  `idempresa` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `modulo_empresa`
--

INSERT INTO `modulo_empresa` (`idmoduloempresa`, `idmodulo`, `idempresa`, `estado`, `fecha`) VALUES
(2, 2, 1, 1, '0000-00-00 00:00:00'),
(3, 3, 1, 0, '0000-00-00 00:00:00'),
(5, 22, 1, 1, '2021-11-29 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

CREATE TABLE `personal` (
  `idpersonal` int(11) NOT NULL,
  `rut` varchar(12) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidop` varchar(50) NOT NULL,
  `apellidom` varchar(50) NOT NULL,
  `direccion` varchar(80) NOT NULL,
  `telefono` int(11) NOT NULL,
  `email` varchar(60) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`idpersonal`, `rut`, `nombre`, `apellidop`, `apellidom`, `direccion`, `telefono`, `email`, `estado`, `fecha`) VALUES
(1, '11.111.111-1', 'JORGE', 'ROJAS', 'SALGADO', 'AV PROVIDENCIA 123', 912345678, 'aaa@aaa.cl', 1, '2021-10-25 13:03:51'),
(3, '16.849.419-K', 'Darwin', 'Zamarca', 'zamarca', 'Macul 2701 B1203', 912345678, 'dzamarca@gmail.com', 1, '2021-10-25 20:08:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salud`
--

CREATE TABLE `salud` (
  `idsalud` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `salud`
--

INSERT INTO `salud` (`idsalud`, `nombre`, `estado`, `fecha`) VALUES
(1, 'FONASA', 1, '0000-00-00 00:00:00'),
(2, 'ISAPRE BANMEDICA', 1, '0000-00-00 00:00:00'),
(3, 'ISAPRE COLMENA', 1, '0000-00-00 00:00:00'),
(4, 'ISAPRE 01', 1, '0000-00-00 00:00:00'),
(10, 'asdadasdsss', 0, '2021-11-29 00:00:00'),
(11, 'dada', 0, '2021-11-29 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipocontrato`
--

CREATE TABLE `tipocontrato` (
  `idtipocontrato` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipocontrato`
--

INSERT INTO `tipocontrato` (`idtipocontrato`, `nombre`, `estado`, `fecha`) VALUES
(1, 'INDEFINIDO', 1, '0000-00-00 00:00:00'),
(3, 'PLAZO FIJO', 1, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipodescuento`
--

CREATE TABLE `tipodescuento` (
  `idtipodescuento` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipodescuento`
--

INSERT INTO `tipodescuento` (`idtipodescuento`, `nombre`, `estado`, `fecha`) VALUES
(1, 'Anticipo Sueldo', 1, '2021-11-29 00:00:00'),
(2, 'Crédito Personas', 0, '2021-11-29 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoingreso`
--

CREATE TABLE `tipoingreso` (
  `idtipoingreso` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipoingreso`
--

INSERT INTO `tipoingreso` (`idtipoingreso`, `nombre`, `estado`, `fecha`) VALUES
(1, 'Locomoción', 1, '2021-11-29 00:00:00'),
(2, 'Colación', 1, '2021-11-29 00:00:00'),
(3, 'Estudios', 0, '2021-11-29 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(60) NOT NULL,
  `fullname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `password` varchar(16) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idusuario`, `nombre`, `apellido`, `email`, `login`, `password`, `estado`, `fecha`) VALUES
(1, 'darwin', 'Zamarca', 'admin@admin.cl', 'admin1', '12345', 1, '2021-09-10 00:00:00'),
(2, 'Nicolas', 'Allende', 'a@a.cl', 'admin2', 'admin2', 1, '2021-09-15 00:00:00'),
(6, 'CARMEN', 'PIZARRO', 'mail@mail.cl', '1234', '1234', 0, '2021-10-23 13:47:52'),
(7, 'JUANITO', 'PEREZ', 'aaa@a.cl', '1234', '1234', 0, '2021-10-23 13:58:48'),
(15, 'CARMEN', 'ROJAS', 'correo@correo.cl', 'carmen.rojas', 'SDFDSFSDF', 1, '2021-10-24 14:36:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_empresa`
--

CREATE TABLE `usuario_empresa` (
  `idusuarioempresa` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `idempresa` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_empresa`
--

INSERT INTO `usuario_empresa` (`idusuarioempresa`, `idusuario`, `idempresa`, `estado`, `fecha`) VALUES
(1, 1, 1, 1, '2021-09-03 00:00:00'),
(6, 7, 1, 1, '2021-11-29 00:00:00'),
(7, 7, 2, 1, '2021-11-29 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `afp`
--
ALTER TABLE `afp`
  ADD PRIMARY KEY (`idafp`);

--
-- Indices de la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`idcargo`);

--
-- Indices de la tabla `contrato`
--
ALTER TABLE `contrato`
  ADD PRIMARY KEY (`idcontrato`),
  ADD KEY `idafp` (`idafp`),
  ADD KEY `idcargo` (`idcargo`),
  ADD KEY `idpersonal` (`idpersonal`),
  ADD KEY `idsalud` (`idsalud`),
  ADD KEY `idtipocontrato` (`idtipocontrato`);

--
-- Indices de la tabla `descuento`
--
ALTER TABLE `descuento`
  ADD PRIMARY KEY (`iddescuento`),
  ADD KEY `idcontrato` (`idcontrato`),
  ADD KEY `idtipodescuento` (`idtipodescuento`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`idempresa`);

--
-- Indices de la tabla `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_users` (`user_id`);

--
-- Indices de la tabla `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`idlog`);

--
-- Indices de la tabla `modulo`
--
ALTER TABLE `modulo`
  ADD PRIMARY KEY (`idmodulo`);

--
-- Indices de la tabla `modulo_empresa`
--
ALTER TABLE `modulo_empresa`
  ADD PRIMARY KEY (`idmoduloempresa`),
  ADD KEY `idempresa` (`idempresa`),
  ADD KEY `idmodulo` (`idmodulo`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`idpersonal`);

--
-- Indices de la tabla `salud`
--
ALTER TABLE `salud`
  ADD PRIMARY KEY (`idsalud`);

--
-- Indices de la tabla `tipocontrato`
--
ALTER TABLE `tipocontrato`
  ADD PRIMARY KEY (`idtipocontrato`);

--
-- Indices de la tabla `tipodescuento`
--
ALTER TABLE `tipodescuento`
  ADD PRIMARY KEY (`idtipodescuento`);

--
-- Indices de la tabla `tipoingreso`
--
ALTER TABLE `tipoingreso`
  ADD PRIMARY KEY (`idtipoingreso`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`);

--
-- Indices de la tabla `usuario_empresa`
--
ALTER TABLE `usuario_empresa`
  ADD PRIMARY KEY (`idusuarioempresa`),
  ADD KEY `idempresa` (`idempresa`),
  ADD KEY `idusuario` (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `afp`
--
ALTER TABLE `afp`
  MODIFY `idafp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `cargo`
--
ALTER TABLE `cargo`
  MODIFY `idcargo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contrato`
--
ALTER TABLE `contrato`
  MODIFY `idcontrato` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `descuento`
--
ALTER TABLE `descuento`
  MODIFY `iddescuento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `idempresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `links`
--
ALTER TABLE `links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `log`
--
ALTER TABLE `log`
  MODIFY `idlog` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `modulo`
--
ALTER TABLE `modulo`
  MODIFY `idmodulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `modulo_empresa`
--
ALTER TABLE `modulo_empresa`
  MODIFY `idmoduloempresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `personal`
--
ALTER TABLE `personal`
  MODIFY `idpersonal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `salud`
--
ALTER TABLE `salud`
  MODIFY `idsalud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `tipocontrato`
--
ALTER TABLE `tipocontrato`
  MODIFY `idtipocontrato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipodescuento`
--
ALTER TABLE `tipodescuento`
  MODIFY `idtipodescuento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipoingreso`
--
ALTER TABLE `tipoingreso`
  MODIFY `idtipoingreso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `usuario_empresa`
--
ALTER TABLE `usuario_empresa`
  MODIFY `idusuarioempresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `contrato`
--
ALTER TABLE `contrato`
  ADD CONSTRAINT `contrato_ibfk_1` FOREIGN KEY (`idafp`) REFERENCES `afp` (`idafp`),
  ADD CONSTRAINT `contrato_ibfk_2` FOREIGN KEY (`idcargo`) REFERENCES `cargo` (`idcargo`),
  ADD CONSTRAINT `contrato_ibfk_3` FOREIGN KEY (`idpersonal`) REFERENCES `personal` (`idpersonal`),
  ADD CONSTRAINT `contrato_ibfk_4` FOREIGN KEY (`idsalud`) REFERENCES `salud` (`idsalud`),
  ADD CONSTRAINT `contrato_ibfk_5` FOREIGN KEY (`idtipocontrato`) REFERENCES `tipocontrato` (`idtipocontrato`);

--
-- Filtros para la tabla `descuento`
--
ALTER TABLE `descuento`
  ADD CONSTRAINT `descuento_ibfk_1` FOREIGN KEY (`idcontrato`) REFERENCES `contrato` (`idcontrato`),
  ADD CONSTRAINT `descuento_ibfk_2` FOREIGN KEY (`idtipodescuento`) REFERENCES `tipodescuento` (`idtipodescuento`);

--
-- Filtros para la tabla `links`
--
ALTER TABLE `links`
  ADD CONSTRAINT `fk_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `modulo_empresa`
--
ALTER TABLE `modulo_empresa`
  ADD CONSTRAINT `modulo_empresa_ibfk_1` FOREIGN KEY (`idempresa`) REFERENCES `empresa` (`idempresa`),
  ADD CONSTRAINT `modulo_empresa_ibfk_2` FOREIGN KEY (`idmodulo`) REFERENCES `modulo` (`idmodulo`);

--
-- Filtros para la tabla `usuario_empresa`
--
ALTER TABLE `usuario_empresa`
  ADD CONSTRAINT `usuario_empresa_ibfk_1` FOREIGN KEY (`idempresa`) REFERENCES `empresa` (`idempresa`),
  ADD CONSTRAINT `usuario_empresa_ibfk_2` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
