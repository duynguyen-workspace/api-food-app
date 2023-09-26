import { Sequelize } from "sequelize";

//? CONNECTION STRING
const sequelize = new Sequelize('db_food', 'root', '1234', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3307'
});

export default sequelize;

//! yarn sequelize-auto -h localhost -d db_food -u root -x 1234 -p 3307 --dialect mysql -o ./src/models -l esm 