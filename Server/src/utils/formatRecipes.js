
const formatRecipes = (recipes) => {
    // Elijo las propiedades de la receta que a mi me interesan
    const propertiesToCheck = ["title", "healthScore", "image", "summary", 
    "analyzedInstructions", "diets", "vegetarian", "vegan", "glutenFree"];

    // Mapeo el arreglo de recetas para validarlas y formatearlas
    const formattedRecipes = recipes.map((recipe) => {

        // Chequeo que ninguna de las propiedades importantes sea undefined
        for (prop of propertiesToCheck) {
            if (recipe[prop] === undefined) throw Error (`Controller failed to get recipe ${prop}`);
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
}

module.exports = formatRecipes;