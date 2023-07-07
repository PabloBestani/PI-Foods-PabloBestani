const {Recipe} = require("../../db");
const {Op} = require("sequelize");


const getByNameDb = async(name) => {
    // Busco todas las recetas que contengan el string "name" de la DB
    const recipes = await Recipe.findAll({
        where: {title: {[Op.iLike]: `%${name}%`}}
    });

    // Si encuentro una o mas recetas, las devuelvo en forma de arreglo 
    if (recipes.length) {
        console.log("Recipe data successfully fetched from Database")
        return [...recipes];
    }
    // Si no encuentro ninguna, devuelvo un array vacio
    console.log("No recipes with given name found in Database");
    return [];
};

module.exports = getByNameDb;
