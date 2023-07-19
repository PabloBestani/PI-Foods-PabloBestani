require("dotenv").config();
const axios = require("axios");
const {formatRecipesApi} = require("../../utils/formatRecipes");


const getByNameApi = async(name) => {
    // Busco las recetas en la API, segun el nombre que me mandaron.
    const {API_KEY} = process.env;
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&apiKey=${API_KEY}`;

    let {results} = (await axios(endpoint)).data;
    if (!results) throw Error("Error trying to fetch from API (at getByNameApi)");
    if (!results.length) {
        console.log("No recipes found in API with given name");
        return [];
    }
    console.log("Recipe data successfully fetched from API");

    // Llamo a mi utils que formatea recetas como las necesito
    const formattedRecipes = formatRecipesApi(results);
    if(!formattedRecipes.length) throw Error("Error formatting recipes (at getByNameApi)")
    
    // Retorno el arreglo de recetas validadas y formateadas
    return formattedRecipes;
};

module.exports = getByNameApi;