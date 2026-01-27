// MODEL IMPORTS
import { User } from '../models/User.model.js';
import { Snippet } from '../models/Snippet.model.js';
import { Token } from '../models/Token.model.js';

export const initModels = (sequelize) => {
    User.initModel(sequelize);
    Snippet.initModel(sequelize);
    Token.initModel(sequelize);
}