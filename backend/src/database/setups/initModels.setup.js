// MODEL IMPORTS
import { User } from '../models/User.model.js';
import { Snippet } from '../models/Snippet.model.js';

export const initModels = (sequelize) => {
    User.initModel(sequelize);
    Snippet.initModel(sequelize);
}