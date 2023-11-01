# Calienticos-Y-Deliciosos


Presentacion:https://www.canva.com/design/DAFpA8a3d4E/qZmiOmYU8s3ueq6gqrZ9Cg/edit?utm_content=DAFpA8a3d4E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton


Base De Datos: 

CREATE DATABASE panaderia;

USE panaderia;

CREATE TABLE encuesta(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Experiencia ENUM('muy buena','buena','regular','mala'),
    Compartir_info ENUM('muy probable','probable','poco probable'),
    Calificacion ENUM('muy buena','buena','regular','mala'),
    Colaboradores ENUM('si','no'),
    Recomendacion_cola VARCHAR (500) ,
    Queja_reclamo VARCHAR(500)
);

CREATE TABLE factura(
    nombre VARCHAR(500) PRIMARY KEY,
    direccion VARCHAR(500),
    especificacion VARCHAR(500),
    total VARCHAR(700)
);