CREATE DATABASE medicitas;
USE medicitas;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('paciente','doctor','admin') DEFAULT 'paciente',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE especialidades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

CREATE TABLE doctores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    telefono VARCHAR(20),
    especialidad_id INT,
    experiencia INT,
    FOREIGN KEY (especialidad_id) REFERENCES especialidades(id)
);

CREATE TABLE citas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    doctor_id INT,
    fecha DATE,
    hora TIME,
    motivo TEXT,
    estado ENUM('pendiente','confirmada','cancelada') DEFAULT 'pendiente',
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (doctor_id) REFERENCES doctores(id)
);

CREATE TABLE historial_medico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    diagnostico TEXT,
    tratamiento TEXT,
    fecha DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO especialidades(nombre, descripcion) VALUES
('Cardiología','Especialidad del corazón'),
('Dermatología','Especialidad de la piel'),
('Pediatría','Atención infantil'),
('Neurología','Sistema nervioso'),
('Oftalmología','Salud visual');

INSERT INTO doctores(nombre,email,telefono,especialidad_id,experiencia) VALUES
('Dr. Juan Pérez','juan@medicitas.com','4871111111',1,10),
('Dra. Ana López','ana@medicitas.com','4872222222',2,7),
('Dr. Luis García','luis@medicitas.com','4873333333',3,12),
('Dra. Elena Torres','elena@medicitas.com','4874444444',4,8),
('Dr. Carlos Ruiz','carlos@medicitas.com','4875555555',5,15);

INSERT INTO usuarios(nombre,email,password,rol) VALUES
('Mauricio Tello','mauricio@gmail.com','123456','paciente'),
('María Celeste','celeste@gmail.com','123456','paciente'),
('Pedro Martínez','pedro@gmail.com','123456','paciente'),
('Laura Sánchez','laura@gmail.com','123456','paciente'),
('Ricardo Gómez','ricardo@gmail.com','123456','paciente');

INSERT INTO citas(usuario_id,doctor_id,fecha,hora,motivo,estado) VALUES
(1,1,'2026-05-10','10:00:00','Chequeo general','confirmada'),
(2,2,'2026-05-12','11:00:00','Consulta dermatológica','pendiente'),
(3,3,'2026-05-13','09:30:00','Control infantil','confirmada'),
(4,4,'2026-05-14','15:00:00','Migraña constante','pendiente'),
(5,5,'2026-05-15','16:30:00','Examen visual','confirmada');

INSERT INTO historial_medico(usuario_id,diagnostico,tratamiento,fecha) VALUES
(1,'Hipertensión','Medicamento diario','2026-01-10'),
(2,'Dermatitis','Crema tópica','2026-02-15'),
(3,'Gripe','Reposo y medicamentos','2026-03-20'),
(4,'Migraña','Analgésicos','2026-04-12'),
(5,'Miopía','Uso de lentes','2026-05-01');