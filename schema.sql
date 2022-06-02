CREATE TABLE IF NOT EXISTS `employee_tracker`.`departments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `employee_tracker`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(30) NOT NULL,
  `salary` DECIMAL(20) NOT NULL DEFAULT 0,
  `department_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_roles_departments_idx` (`department_id` ASC) VISIBLE,
  CONSTRAINT `fk_roles_departments`
    FOREIGN KEY (`department_id`)
    REFERENCES `employee_tracker`.`departments` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `employee_tracker`.`employees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(30) NOT NULL,
  `last_name` VARCHAR(30) NOT NULL,
  `role_id` INT NOT NULL,
  `manager_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_employees_roles_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_employees_employees_idx` (`manager_id` ASC) VISIBLE,
  CONSTRAINT `fk_employees_roles`
    FOREIGN KEY (`role_id`)
    REFERENCES `employee_tracker`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_employees_employees`
    FOREIGN KEY (`manager_id`)
    REFERENCES `employee_tracker`.`employees` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB