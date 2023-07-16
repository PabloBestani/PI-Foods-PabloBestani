const getByIdApi = require("./recipeControllers/getByIdApi");
const getByIdDb = require("./recipeControllers/getByIdDb");
const getByNameApi = require("./recipeControllers/getByNameApi");
const getByNameDb = require("./recipeControllers/getByNameDb");
const getDiets = require("./dietControllers/getDiets");
const createRecipe = require("./recipeControllers/createRecipe");
const validateId = require("../utils/validateId");

//! CHEQUEAR LO DE UUID para validar que es lo que recibo por parametro, asi se donde buscarlo
const getRecipeById = async(id) => {
        const idType = validateId(id);
        if(idType === 'number') {
            const apiRecipe = await getByIdApi(id);
            if (apiRecipe) return apiRecipe;
            throw Error ("API recipe not recieved at controllers/index.js");
        }
        if (idType === 'uuid') {
            const dbRecipe = await getByIdDb(id);
            if (dbRecipe) return dbRecipe;
            throw Error ("Database recipe not recieved at controllers/index.js");
        }
        throw Error ("Invalid id");
}


const getRecipeByName = async(name) => {
    // Busco todas las recetas que contengan el string en la DB y la API
    const dbRecipes = await getByNameDb(name);
    const apiRecipes = await getByNameApi(name);

    // Concateno todas las recetas encontradas en un unico arreglo
    const output = [...dbRecipes, ...apiRecipes];

    // Si hubo al menos una receta, devuelvo el arreglo
    if (output.length) return output;
    throw Error ("No recipes found with given name");
};



const getAllDiets = async() => {
    const diets = await getDiets();
    if (diets) return diets;
    throw Error ("Diets not found in Database");
}



const postRecipe = async(body) => {
    const recipe = await createRecipe(body);
    if (recipe) return recipe;
    throw Error ("Recipe could not be created");
}



module.exports = {
    postRecipe,
    getRecipeById,
    getRecipeByName,
    getAllDiets,
    postRecipe
};
