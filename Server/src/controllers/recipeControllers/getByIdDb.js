const {Recipe} = require("../../db");

const getByIdDb = async(id) => {
    const recipe = await Recipe.findOne({where: {id: id}});
    if (recipe) {
        console.log("Recipe data successfully fetched from Database")
        return recipe;
    }
};

module.exports = getByIdDb;