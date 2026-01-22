import { DataTypes, Model } from "sequelize";

export class User extends Model {
    static initModel(sequelize) {
        User.init(
            {
                id: {
                    type: DataTypes.UUID,
                    primaryKey: true,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4,
                },
                email: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: false,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                username: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: false,
                }
            }, {
                sequelize,
                tableName: 'users',
                timestamps: true,
            });

            return User;
    }
}