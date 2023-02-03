DROP DATABASE IF EXISTS companydb;
CREATE DATABASE companydb CHARSET utf8mb4;
USE companydb;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employee VALUES 
    (1, 'Marta', 2300),
    (2, 'ElSanti', 2500),
    (3, 'Joan', 1900),
    (4, '4tucode', 1800),
    (5, 'Luis', 2400);