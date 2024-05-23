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