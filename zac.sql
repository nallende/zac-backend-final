CREATE DATABASE  IF NOT EXISTS `zac` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `zac`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: zac
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `afp`
--

DROP TABLE IF EXISTS `afp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `afp` (
  `idempresa` int NOT NULL,
  `idafp` int NOT NULL,
  `afp_nombre` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `afp_contacto` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `afp_telefono` varchar(12) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `afp_mail` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `afp_feccre` datetime NOT NULL,
  `afp_fecmod` datetime NOT NULL,
  `afp_estado` tinyint NOT NULL,
  PRIMARY KEY (`idafp`,`idempresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `afp`
--

LOCK TABLES `afp` WRITE;
/*!40000 ALTER TABLE `afp` DISABLE KEYS */;
/*!40000 ALTER TABLE `afp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `afp_trabajador`
--

DROP TABLE IF EXISTS `afp_trabajador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `afp_trabajador` (
  `idempresa` int NOT NULL,
  `idafp_trabajador` int NOT NULL,
  `idafp` int NOT NULL,
  `idtrabajador` int NOT NULL,
  `afp_porcentaje` double DEFAULT NULL,
  `aftr_feccre` datetime NOT NULL,
  `aftr_fecmod` datetime NOT NULL,
  `aftr_estado` tinyint NOT NULL,
  PRIMARY KEY (`idafp_trabajador`,`idafp`,`idtrabajador`,`idempresa`),
  KEY `idafp_idx` (`idafp`),
  KEY `idtrabajador_idx` (`idtrabajador`),
  CONSTRAINT `FK_565a8be54c8f89706b32ac374b7` FOREIGN KEY (`idtrabajador`) REFERENCES `trabajador` (`idtrabajador`),
  CONSTRAINT `FK_b0e8d7b00b95b7bd49e1773c474` FOREIGN KEY (`idafp`) REFERENCES `afp` (`idafp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `afp_trabajador`
--

LOCK TABLES `afp_trabajador` WRITE;
/*!40000 ALTER TABLE `afp_trabajador` DISABLE KEYS */;
/*!40000 ALTER TABLE `afp_trabajador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargo` (
  `idempresa` int NOT NULL,
  `idcargo` int NOT NULL AUTO_INCREMENT,
  `carg_nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `carg_feccre` datetime NOT NULL,
  `carg_fecmod` datetime NOT NULL,
  `carg_estado` tinyint NOT NULL,
  PRIMARY KEY (`idcargo`,`idempresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargo`
--

LOCK TABLES `cargo` WRITE;
/*!40000 ALTER TABLE `cargo` DISABLE KEYS */;
/*!40000 ALTER TABLE `cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `idempresa` int NOT NULL AUTO_INCREMENT,
  `empr_nombre` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `empr_rut` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `empr_direccion` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `empr_telefono` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `empr_mail` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `empr_contacto` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `empr_imagen` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `empr_estado` tinyint NOT NULL,
  `empr_feccre` date NOT NULL,
  `empr_fecmod` date NOT NULL,
  PRIMARY KEY (`idempresa`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'Universidad Tecnologica de Chile INACAP','72012000-3','Apoquindo 7282','24722500','inacap@inacap.cl','Loreto','htttp:IMAGEURL',1,'2021-01-01','2022-01-01'),(2,'INACAP','72012000-3','Apoquindo 7282','24722500','apoquindo@inacap.cl','Loreto ','htttp:IMAGEURL',1,'2021-11-25','2022-11-25');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modulo`
--

DROP TABLE IF EXISTS `modulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modulo` (
  `idmodulo` int NOT NULL AUTO_INCREMENT,
  `modu_nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `modu_feccrea` datetime DEFAULT NULL,
  `modu_fecmod` datetime DEFAULT NULL,
  `modu_estado` tinyint DEFAULT NULL,
  PRIMARY KEY (`idmodulo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modulo`
--

LOCK TABLES `modulo` WRITE;
/*!40000 ALTER TABLE `modulo` DISABLE KEYS */;
/*!40000 ALTER TABLE `modulo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modulo_empresa`
--

DROP TABLE IF EXISTS `modulo_empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modulo_empresa` (
  `idmodulo_empresa` int NOT NULL AUTO_INCREMENT,
  `idmodulo` int NOT NULL,
  `idempresa` int NOT NULL,
  `moem_feccre` datetime DEFAULT NULL,
  `moem_fecmod` datetime DEFAULT NULL,
  `moem_estado` tinyint DEFAULT NULL,
  PRIMARY KEY (`idmodulo_empresa`,`idmodulo`,`idempresa`),
  KEY `idmodulo_idx` (`idmodulo`),
  KEY `idmepresa_idx` (`idempresa`),
  CONSTRAINT `FK_c9738e3a5f40881862de3f2403f` FOREIGN KEY (`idmodulo`) REFERENCES `modulo` (`idmodulo`),
  CONSTRAINT `FK_e8b77dff899857a8aaa34b506af` FOREIGN KEY (`idempresa`) REFERENCES `empresa` (`idempresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modulo_empresa`
--

LOCK TABLES `modulo_empresa` WRITE;
/*!40000 ALTER TABLE `modulo_empresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `modulo_empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salud`
--

DROP TABLE IF EXISTS `salud`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salud` (
  `idempresa` int NOT NULL,
  `idsalud` int NOT NULL AUTO_INCREMENT,
  `salu_nombre` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `salu_contacto` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `salu_telefono` varchar(12) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `salu_mail` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `salu_feccre` datetime NOT NULL,
  `salu_fecmod` datetime NOT NULL,
  `salu_estado` tinyint NOT NULL,
  PRIMARY KEY (`idsalud`,`idempresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salud`
--

LOCK TABLES `salud` WRITE;
/*!40000 ALTER TABLE `salud` DISABLE KEYS */;
/*!40000 ALTER TABLE `salud` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipocontrato`
--

DROP TABLE IF EXISTS `tipocontrato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipocontrato` (
  `idempresa` int NOT NULL,
  `idtipocontrato` int NOT NULL,
  `tico_nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tico_feccre` datetime NOT NULL,
  `tico_fecmod` datetime NOT NULL,
  `tico_estado` tinyint NOT NULL,
  PRIMARY KEY (`idtipocontrato`,`idempresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipocontrato`
--

LOCK TABLES `tipocontrato` WRITE;
/*!40000 ALTER TABLE `tipocontrato` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipocontrato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trabajador`
--

DROP TABLE IF EXISTS `trabajador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trabajador` (
  `idempresa` int NOT NULL,
  `idtrabajador` int NOT NULL,
  `trab_nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trab_apellidop` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trab_apellidom` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trab_rut` varchar(12) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trab_direccion` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trab_telefono` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trab_mail` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `trab_feccre` datetime NOT NULL,
  `trab_fecmod` datetime NOT NULL,
  `trab_estado` tinyint NOT NULL,
  PRIMARY KEY (`idtrabajador`,`idempresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabajador`
--

LOCK TABLES `trabajador` WRITE;
/*!40000 ALTER TABLE `trabajador` DISABLE KEYS */;
/*!40000 ALTER TABLE `trabajador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `usua_nombre` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `usua_apellido` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `usua_mail` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `usua_telefono` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `usua_login` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `usua_password` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `usua_feccre` datetime NOT NULL,
  `usua_fecmod` datetime DEFAULT NULL,
  `usua_estado` tinyint NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Nicolas','Allende','na@zac.cl','777777','nav222','777777','2021-01-01 00:00:00',NULL,0),(2,'Darwin','Zamarca','dg@zac.cl','777777','dag222','777777','2021-01-01 00:00:00',NULL,0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_empresa`
--

DROP TABLE IF EXISTS `usuario_empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_empresa` (
  `idusuario_empresa` int NOT NULL AUTO_INCREMENT,
  `idusuario` int NOT NULL,
  `idempresa` int NOT NULL,
  `usem_feccre` datetime DEFAULT NULL,
  `usem_fecmod` datetime DEFAULT NULL,
  `usem_estado` tinyint DEFAULT NULL,
  PRIMARY KEY (`idusuario_empresa`,`idusuario`,`idempresa`),
  KEY `isusuario_idx` (`idusuario`),
  KEY `idempresa_idx` (`idempresa`),
  CONSTRAINT `FK_25207c10f229bd5949828dfaac7` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`),
  CONSTRAINT `FK_6294aae5da598bbe2dc97a4d7ae` FOREIGN KEY (`idempresa`) REFERENCES `empresa` (`idempresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_empresa`
--

LOCK TABLES `usuario_empresa` WRITE;
/*!40000 ALTER TABLE `usuario_empresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_empresa` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-27 14:37:08
