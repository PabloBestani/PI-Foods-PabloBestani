const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");


module.exports = (sequelize) => {
    sequelize.define("Recipe", {
        id: {
            type: DataTypes.UUID,
            defaultValue: () => uuidv4(),
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        healthScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // validate: {
            //     min: 0,
            //     max: 100,
            //     step: 1
            // }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        steps: {
            type: DataTypes.JSON,
            allowNull: false
        }
    },
    {timestamps: false}
    );
}