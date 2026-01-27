import { User } from '../models/User.model.js';
import { Snippet } from '../models/Snippet.model.js';

export const associateModels = () => {
    User.hasMany(Snippet, {foreignKey: 'userId'});
    Snippet.belongsTo(User, {foreignKey: 'userId'});
}