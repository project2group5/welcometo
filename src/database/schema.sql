DROP DATABASE IF EXISTS welcome_db;
CREATE DATABASE welcome_db;
USE welcome_db;

CREATE TABLE people
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (255),
    description VARCHAR (255)
);
CREATE TABLE restaurant
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (255),
    place VARCHAR (255),
    description VARCHAR (255)
);
CREATE TABLE events
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (255),
    place VARCHAR (255),
    description VARCHAR (255)
);
CREATE TABLE bars
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (255),
    place VARCHAR (255),
    description VARCHAR (255)
);
