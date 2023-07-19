const {Recipe, Diet} = require("../../db");
const {formatRecipesDb} = require("../../utils/formatRecipes");
const {Op} = require("sequelize");


const getByNameDb = async(name) => {
    // Busco todas las recetas que contengan el string "name" de la DB
    const recipes = await Recipe.findAll({
        where: {title: {[Op.iLike]: `%${name}%`}},
        include: [Diet]
    });

    // Si encuentro una o mas recetas, las formateo y devuelvo en forma de arreglo 
    if (recipes.length) {
        console.log("Recipe data successfully fetched from Database")
        const output = formatRecipesDb(recipes);
        return [...output];
    }
    // Si no encuentro ninguna, devuelvo un array vacio
    console.log("No recipes found in Database with given name");
    return [];
};

module.exports = getByNameDb;
