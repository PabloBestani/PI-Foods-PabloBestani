import axios from 'axios';
// require("dotenv").config();
// const {URL_BASE} = process.env;
const URL_BASE='https://pi-foods-pablobestani.onrender.com'
// const URL_BASE='http://localhost:3001'
axios.defaults.baseURL = URL_BASE;


export async function getAllRecipes() {
    const recipes = (await axios(`/recipes`)).data;
    if(!recipes.length) throw Error("Recipes could not be fetched from server (at apiUtils");
    return recipes;
};

export async function getRecipeById(id) {
    const recipe = (await axios(`/recipes/${id}`)).data;
    if (!recipe) throw Error("Recipe could not be fetched from server (at apiUtils");
    return recipe;
};

export async function getRecipeByName(name) {
    const recipes = (await axios(`/recipes/?name=${name}`)).data;
    if (!recipes) throw Error("Recipes could not be fetched from server (at apiUtils");
    return recipes;
};

export async function getAllDiets() {
    const diets = (await axios('/diets')).data;
    if (!diets) throw Error("Diets could not be fetched from server (at apiUtils");
    return diets;
};

export async function postRecipe(recipe) {
    const response = (await axios.post('/recipes', recipe)).data;
    if (!response) throw Error("Recipe could not be posted into Database (at apiUtils");
    return response;
};