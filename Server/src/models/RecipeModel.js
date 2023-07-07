const {DataTypes} = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define("Recipe", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
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
        // !ES INSTRUCTIONS O DEBERIA SER ANALYZEDiNSTRUCTIONS?
        steps: {
            type: DataTypes.JSON,
            allowNull: false
        }
        // instructions: {
        //     type: DataTypes.TEXT
        //     allowNull: false
        // }
    },
    {timestamps: false}
    );
}