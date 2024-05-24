CREATE TABLE user (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(200) NOT NULL,
    salt VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL
)

ALTER TABLE user
ADD COLUMN createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE current_timestamp


CREATE TABLE vehicle
(
	id INT PRIMARY KEY auto_increment,
    vehicle_type INT NOT NULL,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    version VARCHAR(100) NOT NULL,
    seating_capactiy INT,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE current_timestamp
)

CREATE TABLE vehicle_type
(
	id INT PRIMARY KEY auto_increment,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(100) NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE current_timestamp
)

INSERT INTO `rent-your-ride`.`vehicle_type` (`name`) VALUES ('SUV');
INSERT INTO `rent-your-ride`.`vehicle_type` (`name`) VALUES ('SEDAN');
INSERT INTO `rent-your-ride`.`vehicle_type` (`name`) VALUES ('HATCHBACK');


INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('3', 'MARUTI-SUZUKI', 'BALENO', 'SIGMA', '4');
INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('3', 'MARUTI-SUZUKI', 'BALENO', 'DELTA', '4');
INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('1', 'MARUTI-SUZUKI', 'BREEZA', 'LXI', '4');
INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('1', 'MARUTI-SUZUKI', 'BREEZA', 'VXI', '4');
INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('2', 'MARUTI-SUZUKI', 'CIAZ', 'SIGMA', '4');
INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('2', 'MARUTI-SUZUKI', 'CIAZ', 'DELTA', '4');
INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('2', 'MARUTI-SUZUKI', 'CIAZ', 'ZETA', '4');


CREATE TABLE cities
(
	id INT PRIMARY KEY auto_increment,
    name VARCHAR(100) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE current_timestamp
)


INSERT INTO `rent-your-ride`.`cities` (`name`) VALUES ('Agra');
INSERT INTO `rent-your-ride`.`cities` (`name`) VALUES ('Ahmedabad');
INSERT INTO `rent-your-ride`.`cities` (`name`) VALUES ('Bareilly');
INSERT INTO `rent-your-ride`.`cities` (`name`) VALUES ('Bulandshahr');
INSERT INTO `rent-your-ride`.`cities` (`name`) VALUES ('Chitrakoot');
INSERT INTO `rent-your-ride`.`cities` (`name`) VALUES ('Delhi');
INSERT INTO `rent-your-ride`.`cities` (`name`) VALUES ('Faridabad');
INSERT INTO `rent-your-ride`.`cities` (`name`) VALUES ('Greater Noida');
INSERT INTO `rent-your-ride`.`cities` (`name`) VALUES ('Ghaziabad');
INSERT INTO `rent-your-ride`.`cities` (`name`) VALUES ('New Delhi');
INSERT INTO `rent-your-ride`.`cities` (`name`) VALUES ('Noida');



CREATE TABLE bookings
(
	id INT PRIMARY KEY auto_increment,
    vehicle_id INT NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE current_timestamp
)


ALTER TABLE bookings
ADD COLUMN pickup_date DATETIME NOT NULL AFTER vehicle_id,
ADD COLUMN dropoff_date DATETIME NOT NULL AFTER pickup_date,
ADD COLUMN pickup_location INT NOT NULL AFTER dropoff_date,
ADD COLUMN dropoff_location INT NOT NULL AFTER pickup_location



ALTER TABLE user
DROP COLUMN name,
ADD COLUMN firstname VARCHAR(100) NOT NULL AFTER id,
ADD COLUMN lastname VARCHAR(100) AFTER firstname,
ADD COLUMN phone VARCHAR(10) AFTER email,
ADD COLUMN age TINYINT AFTER phone,
ADD COLUMN address VARCHAR(500) AFTER password,
ADD COLUMN city VARCHAR(100) AFTER address,
ADD COLUMN zipcode VARCHAR(10) AFTER city


ALTER TABLE bookings
ADD COLUMN user_id INT NOT NULL AFTER id


INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('2', 'BMW', '3 Series', '330i M Sport', '5');
INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('2', 'BMW', '3 Series', '320d Luxury', '5');
INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('2', 'BMW', '5 Series', '530i M Sport', '5');
INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('2', 'BMW', '5 Series', '520d Luxury', '5');
INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('3', 'BMW', '1 Series', '118d', '5');
INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('1', 'BMW', 'X', '3', '5');
INSERT INTO `rent-your-ride`.`vehicle` (`vehicle_type`, `make`, `model`, `version`, `seating_capactiy`) VALUES ('1', 'BMW', 'x', '5', '5');

ALTER table vehicle
ADD COLUMN URL VARCHAR(100) AFTER vehicle_type


UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'baleno-sigma-bg.png' WHERE (`id` = '1');
UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'baleno-delta-bg.png' WHERE (`id` = '2');
UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'breeza-lxi-bg.png' WHERE (`id` = '3');
UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'breeza-vxi-bg.png' WHERE (`id` = '4');
UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'bmw-330i-bg.png' WHERE (`id` = '8');
UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'bmw-320d-bg.png' WHERE (`id` = '9');
UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'bmw-530m-bg.png' WHERE (`id` = '10');
UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'bmw-520-bg.png' WHERE (`id` = '11');
UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'bmw-118d-bg.png' WHERE (`id` = '12');
UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'BMW-X3-bg.png' WHERE (`id` = '13');
UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'bmw-x5-bg.png' WHERE (`id` = '14');
UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'siaz-sigma-bg.png' WHERE (`id` = '5');
UPDATE `rent-your-ride`.`vehicle` SET `URL` = 'siaz-delta-bg.png' WHERE (`id` = '6');
