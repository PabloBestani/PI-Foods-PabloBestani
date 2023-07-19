require("dotenv").config();
const axios = require("axios");
const {formatRecipesApi} = require("../../utils/formatRecipes");

const getByIdApi = async(id) => {
    // Busco la receta en la API, segun el id que me mandaron.
    const {API_KEY} = process.env;
    const endpoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
    const {data} = await axios(endpoint);
    if (!data) throw Error("Error trying to fetch from API");
    console.log("Recipe data successfully fetched from API");
    
    const formattedRecipe = formatRecipesApi([data])[0];
    if (formattedRecipe) return formattedRecipe;
    return "Recipe not found in API";
}

module.exports = getByIdApi;







