const {Recipe, Diet} = require("../../db");
const {formatRecipesDb} = require("../../utils/formatRecipes");

const getByIdDb = async(id) => {
    const recipe = await Recipe.findByPk(id, {include: [Diet]});
    if (recipe) {
        console.log("Recipe data successfully fetched from Database (at getByIdDb)");
        const output = formatRecipesDb([recipe]);
        return output[0];
    }
    return "Recipe not found in Database (at getByIdDb)";
};

module.exports = getByIdDb;