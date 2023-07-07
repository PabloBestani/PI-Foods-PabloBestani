require("dotenv").config();
const axios = require("axios");


const getRecipesSeed = async() => {
    // Busco 100 recetas en la API
    const {API_KEY} = process.env;
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`;
    const {data} = await axios(endpoint);
    // Las devuelvo en forma de arreglo
    if (data.results) return data.results;
};