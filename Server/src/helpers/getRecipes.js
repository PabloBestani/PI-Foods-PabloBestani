require("dotenv").config();
const axios = require("axios");
const {formatRecipesApi} = require("../utils/formatRecipes");


const getRecipes = async() => {
    // Busco 100 recetas en la API
    try {
        const {API_KEY} = process.env;
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`;
    const {data} = await axios(endpoint);

    // Si se trajeron con exito, las mapeo y formateo usando mi utils function
    if (data.results) {
        const formattedRecipes = formatRecipesApi(data.results);

        // Las devuelvo en forma de arreglo
        return formattedRecipes;
    }
    throw Error("Failed to fetch and format initial recipes");
    } catch (error) {
        throw Error(error.message);
    }
    
};

module.exports = getRecipes;