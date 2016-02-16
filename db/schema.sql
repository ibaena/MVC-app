CREATE DATABASE burger_list;
USE burger_list;

CREATE TABLE burger
(
ID int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
devoured BOOL DEFAULT true,
date TIMESTAMP,
PRIMARY KEY (ID)
);
