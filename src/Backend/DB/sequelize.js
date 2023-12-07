// DB/sequelize.js

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: '../../config/.env' });

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

export default sequelize;  // Export as default
