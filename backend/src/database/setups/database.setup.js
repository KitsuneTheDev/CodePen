import Sequilize from 'sequelize';
import { databaseConfig } from '../configs/database.config.js';

export const sequelize = new Sequilize(
    databaseConfig.database,
    databaseConfig.user,
    databaseConfig.password,
    {
        host: databaseConfig.host,
        port: databaseConfig.port,
        dialect: databaseConfig.dialect,
        logging: false
    }
);