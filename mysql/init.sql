CREATE DATABASE workadventureadmin;

USE workadventureadmin;

CREATE TABLE tags (
    id Int auto_increment,
    tagName varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE admins (
    id Int auto_increment,
    userId varchar(255),
    tagId Int,
    PRIMARY KEY (id),
    FOREIGN KEY (tagId) REFERENCES tags(id)
);

CREATE TABLE banned (
    id Int auto_increment,
    userId varchar(255),
    PRIMARY KEY (id)
);

INSERT INTO tags (tagName)
VALUES ("admin");