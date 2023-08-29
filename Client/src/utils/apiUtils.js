import axios from 'axios';
const URL_BASE='https://pi-foods-pablobestani.onrender.com'
axios.defaults.url = URL_BASE


export async function getAllRecipes() {
    // const endpoint = '/recipes';
    const recipes = (await axios('/recipes')).data;
    if(!recipes.length) throw Error("Recipes could not be fetched from server (at apiUtils");
    return recipes;
};

export async function getRecipeById(id) {
    // const endpoint = `/recipes/${id}`;
    const recipe = (await axios(`/recipes/${id}`)).data;
    if (!recipe) throw Error("Recipe could not be fetched from server (at apiUtils");
    return recipe;
};

export async function getRecipeByName(name) {
    // const endpoint = `/recipes/?name=${name}`;
    const recipes = (await axios(`/recipes/?name=${name}`)).data;
    if (!recipes) throw Error("Recipes could not be fetched from server (at apiUtils");
    return recipes;
};

export async function getAllDiets() {
    // const endpoint = '/diets';
    const diets = (await axios('/diets')).data;
    if (!diets) throw Error("Diets could not be fetched from server (at apiUtils");
    return diets;
};

export async function postRecipe(recipe) {
    // console.log(recipe);
    // const endpoint = '/recipes';
    const response = (await axios.post('/recipes', recipe)).data;
    if (!response) throw Error("Recipe could not be posted into Database (at apiUtils");
    return response;
};