import DatabaseService from './DatabaseService';
const database = new DatabaseService();

export const schema = () => {

    let sql_type = 'CREATE TABLE IF NOT EXISTS `type` (' +
        '`id` int(11) NOT NULL AUTO_INCREMENT,' +
        '`name` varchar(255) NOT NULL,' +
        '`description` TEXT,' +
        'PRIMARY KEY(`id`),' +
        'CONSTRAINT `FK_USER_CAMP` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)' +
        ') ENGINE = InnoDB DEFAULT CHARSET = utf8';

    let sql_place = 'CREATE TABLE IF NOT EXISTS `place` (' +
        '`id` int(11) NOT NULL AUTO_INCREMENT,' +
        '`name` varchar(255) NOT NULL,' +
        '`description` TEXT,' +
        'PRIMARY KEY(`id`)' +
        ') ENGINE = InnoDB DEFAULT CHARSET = utf8';

    let sql_description = 'CREATE TABLE IF NOT EXISTS `description` (' +
        '`id` int(11) NOT NULL AUTO_INCREMENT,' +
        '`name` varchar(255) NOT NULL,' +
        '`text` TEXT NOT NULL,' +
        '`description` TEXT,' +
        'PRIMARY KEY(`id`),' +
        'CONSTRAINT `FK_USER_COMMENT` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),' +
        'CONSTRAINT `FK_CAMP_COMMENT` FOREIGN KEY (`campground_id`) REFERENCES `campgrounds` (`id`)' +
        ') ENGINE = InnoDB DEFAULT CHARSET = utf8';


    database.query(sql_type, null);
    database.query(sql_place, null);
    database.query(sql_description, null);
};