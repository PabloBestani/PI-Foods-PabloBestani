require("dotenv").config();
const axios = require("axios");
const formatRecipes = require("../../utils/formatRecipes");


const getByNameApi = async(name) => {
    // Busco las recetas en la API, segun el nombre que me mandaron.
    const {API_KEY} = process.env;
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&apiKey=${API_KEY}`;

    let {results} = (await axios(endpoint)).data;
    if (!results) throw Error("Error trying to fetch from API");
    console.log("Recipe data successfully fetched from API");

    // Llamo a mi utils que formatea recetas como las necesito
    const formattedRecipes = formatRecipes(results);
    if(!formattedRecipes.length) throw Error("Error formatting recipes")
    
    // Retorno el arreglo de recetas validadas y formateadas
    return formattedRecipes;
};

module.exports = getByNameApi;