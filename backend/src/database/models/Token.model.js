import { DataTypes, Model } from "sequelize";

export class Token extends Model {
    static initModel(sequelize) {
        Token.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            token: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        }, {
            sequelize,
            tableName: "tokens",
            timestamps: true,
        });
    }
}