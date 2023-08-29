
const formatRecipesApi = (recipes) => {
    // Elijo las propiedades de la receta que a mi me interesan
    const propertiesToCheck = ["title", "healthScore", "image", "summary", 
    "analyzedInstructions", "diets", "vegetarian", "vegan", "glutenFree"];

    // Mapeo el arreglo de recetas para validarlas y formatearlas
    const formattedRecipes = recipes.map((recipe) => {

        // Chequeo que ninguna de las propiedades importantes sea undefined
        for (prop of propertiesToCheck) {
            if (recipe[prop] === undefined) console.log(`Controller failed to get recipe ${prop}`);
        }

        //Desestructuro las propiedades elegidas
        const {id, title, healthScore, image, summary, analyzedInstructions, diets, vegetarian, vegan, glutenFree} = recipe;

        // Devuelvo un objeto con los valores desestructurados
        return {
            id: id,
            title: title,
            healthScore: healthScore,
            image: image,
            summary: summary,
            steps: analyzedInstructions[0]?.steps,
            diets: diets,
            vegetarian: vegetarian,
            vegan: vegan,
            glutenFree: glutenFree
        };
    });
    return formattedRecipes;
};


const formatRecipesDb = (recipes) => {
 // Elijo las propiedades de la receta que a mi me interesan
 const propertiesToCheck = ["title", "healthScore", "image", "summary", 
 "steps", "Diets"];

 // Mapeo el arreglo de recetas para validarlas y formatearlas
 const formattedRecipes = recipes.map((recipe) => {

     // Chequeo que ninguna de las propiedades importantes sea undefined
     for (prop of propertiesToCheck) {
         if (recipe[prop] === undefined) throw Error (`Controller failed to get recipe ${prop} (at formatRecipesDb)`);
     }

     //Desestructuro las propiedades elegidas
     const {id, title, healthScore, image, summary, steps, Diets} = recipe;

     // Formateo las dietas que me llegaron como un registro de tabla asociada
     const diets = Diets.map((diet) => {
        return diet.title;
     })
     // Devuelvo un objeto con los valores desestructurados
     return {
         id: id,
         title: title,
         healthScore: healthScore,
         image: image,
         summary: summary,
         steps: steps,
         diets: diets
     };
 });
 return formattedRecipes;
}

module.exports = {
    formatRecipesApi,
    formatRecipesDb
};