const getByIdApi = require("./recipeControllers/getByIdApi");
const getByIdDb = require("./recipeControllers/getByIdDb");
const getByNameApi = require("./recipeControllers/getByNameApi");
const getByNameDb = require("./recipeControllers/getByNameDb");
const getDiets = require("./dietControllers/getDiets");
const createRecipe = require("./recipeControllers/createRecipe");
const validateId = require("../utils/validateId");


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
        console.log("Invalid id");
        return {};
}


const getRecipeByName = async(name) => {
    // Busco todas las recetas que contengan el string en la DB y la API
    const dbRecipes = await getByNameDb(name);
    const apiRecipes = await getByNameApi(name);
    let output = [];

    // Concateno todas las recetas encontradas en un unico arreglo
    if (dbRecipes.length) output.push(...dbRecipes);
    if (apiRecipes.length) output.push(...apiRecipes);

    // Si hubo al menos una receta, devuelvo el arreglo
    if (output.length) return output;
    console.log("No recipes found with given name (at recipeControllers/index.js)");
    return [];
};



const getAllDiets = async() => {
    const diets = await getDiets();
    if (diets) return diets;
    throw Error ("Diets not found in Database (at recipeControllers/index.js)");
}



const postRecipe = async(body) => {
    const recipe = await createRecipe(body);
    if (recipe) return recipe;
    throw Error ("Recipe could not be created (at recipeControllers/index.js)");
}



module.exports = {
    postRecipe,
    getRecipeById,
    getRecipeByName,
    getAllDiets,
    postRecipe
};
