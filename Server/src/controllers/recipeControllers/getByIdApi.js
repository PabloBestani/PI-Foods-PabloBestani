require("dotenv").config();
const axios = require("axios");
const formatRecipes = require("../../utils/formatRecipes");

const getByIdApi = async(id) => {
    // Busco la receta en la API, segun el id que me mandaron.
    const {API_KEY} = process.env;
    const endpoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
    const {data} = await axios(endpoint);
    if (!data) throw Error("Error trying to fetch from API");
    console.log("Recipe data successfully fetched from API");
    
    const formattedRecipe = formatRecipes([data])[0];
    return formattedRecipe;
}

module.exports = getByIdApi;







