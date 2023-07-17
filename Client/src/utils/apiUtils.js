import axios from 'axios';


export async function getAllRecipes() {
    const endpoint = 'http://localhost:3001/recipes';
    const recipes = (await axios(endpoint)).data;
    if(!recipes.length) throw Error("Recipes could not be fetched from server");
    return recipes;
};

export async function getRecipeById(id) {
    const endpoint = `http://localhost:3001/recipes/${id}`;
    const recipe = (await axios(endpoint)).data;
    if (!recipe) throw Error("Recipe could not be fetched from server");
    return recipe;
};

export async function getRecipeByName(name) {
    const endpoint = `http://localhost:3001/recipes/?name=${name}`;
    const recipes = (await axios(endpoint)).data;
    if (!recipes) throw Error("Recipes could not be fetched from server");
    return recipes;
};

export async function getAllDiets() {
    const endpoint = 'http://localhost:3001/diets';
    const diets = (await axios(endpoint)).data;
    if (!diets) throw Error("Diets could not be fetched from server");
    return diets;
};

export async function postRecipe(recipe) {
    const endpoint = 'http://localhost:3001/recipes';
    const response = (await axios.post(endpoint, recipe)).data;
    if (!response) throw Error("Recipe could not be posted into Database");
    return response;
};