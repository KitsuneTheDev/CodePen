import { sequelize } from "./setups/database.setup.js";
import { initModels } from "./setups/initModels.setup.js";
import { associateModels } from "./setups/association.setup.js";
import { User  } from "./models/User.model.js";
import { Snippet  } from "./models/Snippet.model.js";

export const initDatabase = async () => {
    initModels(sequelize);
    associateModels();
    await sequelize.authenticate();
    await sequelize.sync();
}

export const db = {
    sequelize,
    User,
    Snippet,
}