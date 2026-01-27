import { User } from '../models/User.model.js';
import { Snippet } from '../models/Snippet.model.js';
import { Token } from '../models/Token.model.js';

export const associateModels = () => {
    User.hasMany(Snippet, {foreignKey: 'userId'});
    Snippet.belongsTo(User, {foreignKey: 'userId'});

    User.hasOne(Token, {foreignKey: 'userId'});
    Token.belongsTo(User, {foreignKey: 'userId'});
}