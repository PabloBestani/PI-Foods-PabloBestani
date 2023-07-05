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
        image: {
            type: DataTypes.STRING,
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        //!HsCORE DEBERIA SER INT U OTRA COSA? Y DEBERIA TENER UN MIN Y MAX VALUE?
        score: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        // !ES INSTRUCTIONS O DEBERIA SER ANALYZEDiNSTRUCTIONS?
        instructions: {
            type: DataTypes.TEXT
        }
    },
    {timestamps: false}
    );
}