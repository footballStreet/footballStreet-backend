import Sequelize from 'sequelize';
import config from '../config/config.js';

const env = 'development';

const db = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  config[env],
);

export default db;