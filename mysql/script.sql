DROP DATABASE IF EXISTS pruebaplatzi;

CREATE DATABASE pruebaplatzi;
USE pruebaplatzi;

CREATE TABLE IF NOT EXISTS books (
    book_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    author_id INTEGER UNSIGNED,
    title VARCHAR(100) NOT NULL,
    year INTEGER UNSIGNED NOT NULL DEFAULT 1900,
    language VARCHAR(2) NOT NULL DEFAULT 'es' COMMENT 'ISO 639-1 Language',
    cover_url VARCHAR(500),
    price DOUBLE(6,2) NOT NULL DEFAULT 10.0,
    sellable TINYINT(1) DEFAULT 1,
    copies INTEGER NOT NULL DEFAULT 1,
    description TEXT
);

CREATE TABLE IF NOT EXISTS authors (
    author_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    nationality VARCHAR(3)
);

CREATE TABLE clients (
    client_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    birthdate DATETIME,
    gender ENUM('M', 'F', 'ND') NOT NULL,
    active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS operations (
    operation_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    book_id INTEGER UNSIGNED,
    client_id INTEGER UNSIGNED,
    type ENUM('P', 'D', 'V'),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    finished TINYINT(1) NOT NULL
);


INSERT INTO authors(author_id, name, nationality) VALUES ('', 'Juan Rulfo', 'MEX');

INSERT INTO authors(name, nationality) VALUES('Gabriel Garcia Marquez', 'COL');

INSERT INTO authors VALUES('', 'Juan Gabriel Vasquez', 'COL');

INSERT INTO authors(name, nationality)
VALUES('Julio Cortazar', 'ARG'),
    ('Isabel Allende', 'CHI'),
    ('Octavio Paz', 'MEX'),
    ('Juan Carlos Onetti', 'URU');


INSERT INTO `clients`(name, email, birthdate, gender, active, created_at) VALUES 
('Maria Dolores Gomez','Maria Dolores.95983222J@random.names','1971-06-06','F',1,'2018-04-09 16:51:30'),
('Adrian Fernandez','Adrian.55818851J@random.names','1970-04-09','M',1,'2018-04-09 16:51:30'),
('Maria Luisa Marin','Maria Luisa.83726282A@random.names','1957-07-30','F',1,'2018-04-09 16:51:30'),
('Pedro Sanchez','Pedro.78522059J@random.names','1992-01-31','M',1,'2018-04-09 16:51:30'),
('Pablo Saavedra','Pablo.93733268B@random.names','1960-07-21','M',1,'2018-04-09 16:51:30');

