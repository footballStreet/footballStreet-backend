import Sequelize from 'sequelize';

const db = new Sequelize('interview_simulator', 'postgres', 'qwerty', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: 0,
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
});

export default db;