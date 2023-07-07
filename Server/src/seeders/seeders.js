require("dotenv").config();
const axios = require("axios");
const {Diet} = require("../db");
const formatRecipes = require("../utils/formatRecipes");


const getRecipesSeed = async() => {
    // Busco 100 recetas en la API
    const {API_KEY} = process.env;
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`;
    const {data} = await axios(endpoint);

    // Si se trajeron con exito, las mapeo y formateo usando mi utils function
    if (data.results) {
        const formattedRecipes = formatRecipes(data.results);

        // Las devuelvo en forma de arreglo
        return formattedRecipes;
    }
    throw Error("Failed to fetch and format initial recipes");
};


const getDietsSeed = async(recipes) => {
    // Recorro el arreglo de recetas para tomar el atributo "diets" de cada una
    recipes.forEach((recipe) => {
        const recipeDiets = recipe.diets;
        // Recorro el arreglo de dietas: chequeo si cada dieta ya existe en la tabla Diets, y sino la agrego
        recipeDiets.forEach(async(diet) => {
            const dieta = await Diet.findOrCreate({
                where: {title: diet},
                defaults: {title: diet}
            })
            // console.log(dieta);
            return dieta;
        })
    })
    // Devuelvo un mensaje de exito
    return console.log("Diets loaded into Database");
}


module.exports = {
    getRecipesSeed,
    getDietsSeed
};