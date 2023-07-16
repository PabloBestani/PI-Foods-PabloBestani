const {Diet} = require("../db");
const getRecipes = require("../helpers/getRecipes");



const getDietsSeed = async() => {
    // Llamo al helper que obtiene 100 recetas de la API
    const recipes = await getRecipes();
    if(recipes.length) console.log("Recipes fetched from API")
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
    return "Diets loaded into Database";
}


module.exports = {
    getDietsSeed
};