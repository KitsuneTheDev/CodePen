import { sequelize } from "./setups/database.setup.js";
import { initModels } from "./setups/initModels.setup.js";
import { associateModels } from "./setups/association.setup.js";

export const initDatabase = async () => {
    initModels(sequelize);
    associateModels();
    await sequelize.authenticate();
    await sequelize.sync();
}