-- MySQL Script generated by MySQL Workbench
-- Wed Oct 19 20:47:14 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

DROP DATABASE IF EXISTS `deliberridb`;


-- -----------------------------------------------------
-- Schema deliberridb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema deliberridb
-- -----------------------------------------------------
CREATE DATABASE  `deliberridb`;
USE `deliberridb` ;

-- -----------------------------------------------------
-- Table `deliberridb`.`category`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `deliberridb`.`category` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `deliberridb`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `deliberridb`.`products` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `price` DECIMAL NULL,
  `image` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `promotion` INT NULL,
  `category_id` INT NOT NULL,
    FOREIGN KEY (`category_id`)
    REFERENCES `deliberridb`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `deliberridb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `deliberridb`.`users` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `lastName` DECIMAL NULL,
  `user` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` INT NULL,
  `birthDate` DATE NULL,
  `nationality` VARCHAR(45) NULL,
  `interestCategory` VARCHAR(45) NULL,
  `avatar` VARCHAR(80) NULL,
  `isAdmin` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

