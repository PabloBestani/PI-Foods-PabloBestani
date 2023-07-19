require("dotenv").config();
const axios = require("axios");
const {formatRecipesApi, formatRecipesDb} = require("../utils/formatRecipes");
const {Recipe, Diet} = require("../db");


const getRecipesApi = async() => {
    // Busco 100 recetas en la API
    const {API_KEY} = process.env;
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`;
    const {data} = await axios(endpoint);

    // Si se trajeron con exito, las mapeo y formateo usando mi utils function
    if (data.results) {
        const formattedRecipes = formatRecipesApi(data.results);

        // Las devuelvo en forma de arreglo
        return formattedRecipes;
    }
    throw Error("Failed to fetch and format initial recipes (at getRecipes)");
};

const getRecipesDb = async() => {
    const recipes = await Recipe.findAll({include: [Diet]});
    // Si se trajo una o mas, las mapeo y formateo usando mi utils function
    if (recipes.length) {
        const formattedRecipes = formatRecipesDb(recipes);
        // Las devuelvo en forma de arreglo
        return formattedRecipes;
    }
    console.log("No recipes found in Database");
    return [];
};

const getAllRecipes = async() => {
    try {
        let output = [];
        const recipesApi = await getRecipesApi();
        const recipesDb = await getRecipesDb();

        recipesDb.length && output.push(...recipesDb);
        recipesApi.length && output.push(...recipesApi);
        return output;
    } catch (error) {
        throw Error(error.message);
    };
};


module.exports = getAllRecipes;