

export function validateOrigin(recipe) {
    const {id} = recipe;
    if (id) {
        const uuidv4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        const numberRegex = /^[0-9]+$/;
    
        if (uuidv4Regex.test(id)) return 'Database';
        if (numberRegex.test(id)) return 'API';
    }
    throw Error("The origin of a recipe could not be validated");
};


export function filterRecipes(recipes, filters) {
    const {chosenDiets, chosenOrigin} = filters;
    let filtered = [...recipes];
    if (chosenOrigin !== 'All') {
        filtered = filtered.filter((recipe) => {
            return validateOrigin(recipe) === chosenOrigin;
        });
    };
    if (chosenDiets.length) {
        filtered = filtered.filter ((recipe) => {
            return chosenDiets.every((diet) => recipe.diets.includes(diet));
        });
    };

    return filtered;
};


export function orderRecipes(recipes, order) {
    let orderedArray = [...recipes];
    if (order === "A-Z") {
        orderedArray.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
    } else if (order === "Z-A") {
        orderedArray.sort((a, b) => b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1);
    } else if (order === "Least Healthy") {
        orderedArray.sort((a, b) => a.healthScore - b.healthScore);
    } else if (order === "Healthiest") {
        orderedArray.sort((a, b) => b.healthScore - a.healthScore);
    };

    return orderedArray;
}
