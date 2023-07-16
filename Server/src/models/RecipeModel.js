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
        //!HsCORE DEBERIA TENER UN MIN Y MAX VALUE?
        healthScore: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
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