const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Diet", {
        id: {
            
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
    },
    {timestamps: false}
    );
};