import { DataTypes, Model } from "sequelize";

export class Snippet extends Model {
    static initModel(sequelize) {
        Snippet.init(
            {
                id: {
                    type: DataTypes.UUID,
                    primaryKey: true,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4,
                }, 
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                code: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                language: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    defaultValue: 'bash',
                },
                description: {
                    type: DataTypes.TEXT,
                },
                tags: {
                    type: DataTypes.ARRAY(DataTypes.STRING),
                    defaultValue: [],
                },
                isPublic: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false,
                }
            }, {
            sequelize,
            tableName: "snippets",
            timestamps: true,
        });

        return Snippet;
    }
}