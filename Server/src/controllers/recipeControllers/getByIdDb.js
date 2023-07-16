const {Recipe} = require("../../db");


const getByIdDb = async(id) => {
    const recipe = await Recipe.findOne({where: {id: id}});
    if (recipe) {
        console.log("Recipe data successfully fetched from Database")
        return recipe;
    }
    return "Recipe not found in Database";
};

module.exports = getByIdDb;