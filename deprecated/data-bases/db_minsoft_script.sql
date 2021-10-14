CREATE DATABASE IF NOT EXISTS db_minsoft;
USE db_minsoft;

CREATE TABLE CARGOS (
	id_cargo varchar(255) NOT NULL,
	nombre_cargo varchar(255) NOT NULL,
	PRIMARY KEY (id_cargo)
);

INSERT INTO CARGOS (id_cargo, nombre_cargo) VALUES
(1001,'Administrador'),
(1002,'Vendedor');

CREATE TABLE ESTADOS_USUARIO (
	id_estado_usuario varchar(255) NOT NULL,
	estado_usuario varchar(255) NOT NULL,
	PRIMARY KEY (id_estado_usuario)
);

INSERT INTO ESTADOS_USUARIO (id_estado_usuario, estado_usuario) VALUES
(2001,'Pendiente'),
(2002,'Autorizado'),
(2003,'No Autorizado');

CREATE TABLE ESTADOS_PRODUCTO (
	id_estado_producto varchar(255) NOT NULL,
	eatado_producto varchar(255) NOT NULL,
	PRIMARY KEY (id_estado_producto)
);

CREATE TABLE ESTADOS_VENTA (
	id_estado_venta varchar(255) NOT NULL,
	eatado_venta varchar(255) NOT NULL,
	PRIMARY KEY (id_estado_venta)
);

CREATE TABLE PRODUCTOS (
	id_producto varchar(255) NOT NULL,
	descripcion varchar(255) NOT NULL,
	valor_unitario INT NOT NULL,
	estado_producto_fk varchar(255) NOT NULL,
	PRIMARY KEY (id_producto)
);

CREATE TABLE USUARIOS (
	id_usuario varchar(255) NOT NULL,
	nombre_usuario varchar(255) NOT NULL,
	apellido_usuario varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	especialidad varchar(255) NOT NULL,
	celular varchar(255) NOT NULL,
	id_cargo_fk varchar(255) NOT NULL,
	fecha_ingreso DATE NOT NULL,
	id_estado_usuario_fk varchar(255) NOT NULL,
	PRIMARY KEY (id_usuario)
);

CREATE TABLE VENTAS (
	id_venta varchar(255) NOT NULL,
	id_estado_venta_fk varchar(255) NOT NULL,
	id_cliente varchar(255) NOT NULL,
	nombre_cliente varchar(255) NOT NULL,
	id_productos_vendidos_fk varchar(255) NOT NULL,
	id_usuario_fk BINARY NOT NULL,
	fecha_venta DATE NOT NULL,
	total_venta INT NOT NULL,
	PRIMARY KEY (id_venta)
);

CREATE TABLE PRODUCTOS_VENDIDOS (
	id_productos_vendidos varchar(255) NOT NULL,
	id_producto_fk varchar(255) NOT NULL,
	cantidad INT(255) NOT NULL,
	PRIMARY KEY (id_productos_vendidos)
);

ALTER TABLE PRODUCTOS ADD CONSTRAINT PRODUCTOS_fk0 FOREIGN KEY (estado_producto_fk) REFERENCES ESTADOS_PRODUCTO(id_estado_producto);

ALTER TABLE USUARIOS ADD CONSTRAINT USUARIOS_fk0 FOREIGN KEY (id_cargo_fk) REFERENCES CARGOS(id_cargo);

ALTER TABLE USUARIOS ADD CONSTRAINT USUARIOS_fk1 FOREIGN KEY (id_estado_usuario_fk) REFERENCES ESTADOS_USUARIO(id_estado_usuario);

ALTER TABLE VENTAS ADD CONSTRAINT VENTAS_fk0 FOREIGN KEY (id_estado_venta_fk) REFERENCES ESTADOS_VENTA(id_estado_venta);

ALTER TABLE VENTAS ADD CONSTRAINT VENTAS_fk1 FOREIGN KEY (id_productos_vendidos_fk) REFERENCES PRODUCTOS_VENDIDOS(id_productos_vendidos);

ALTER TABLE VENTAS ADD CONSTRAINT VENTAS_fk2 FOREIGN KEY (id_usuario_fk) REFERENCES USUARIOS(id_usuario);

ALTER TABLE PRODUCTOS_VENDIDOS ADD CONSTRAINT PRODUCTOS_VENDIDOS_fk0 FOREIGN KEY (id_producto_fk) REFERENCES PRODUCTOS(id_producto);