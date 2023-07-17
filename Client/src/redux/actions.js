import { getAllRecipes, getRecipeByName, postRecipe } from '../utils/apiUtils';
import listAllDiets from '../utils/listAllDiets';
export const SET_ALL_RECIPES = 'SET_ALL_RECIPES';
export const SET_ALL_DIETS = 'SET_ALL_DIETS';
export const SET_RECIPES_BY_NAME = 'SET_RECIPES_BY_NAME';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const INCREASE_PAGE = 'INCREASE_PAGE';
export const DECREASE_PAGE = 'DECREASE_PAGE';
export const RESET_PAGE = 'RESET_PAGE';
export const FILTER_RECIPES = 'FILTER_RECIPES';
export const RESET_FILTERS = 'RESET_FILTERS';
export const ORDER_RECIPES = 'ORDER_RECIPES';




export function setAllRecipes() {
    return async(dispatch) => {
        try {
            const recipes = await getAllRecipes();
            return dispatch({
                type: SET_ALL_RECIPES,
                payload: recipes
            });
        } catch(error) {
            console.log('ERROR at setAllRecipes: ', error.message);
        };
    }
};

export function setAllDiets() {
    return async(dispatch) => {
        try {
            const diets = await listAllDiets();
            return dispatch({
                type: SET_ALL_DIETS,
                payload: diets
            });
        } catch(error) {
            console.log('ERROR at setAllDiets: ', error.message);
        };
    }
};

export function setRecipesByName(name) {
    return async(dispatch) => {
        try {
            const recipes = await getRecipeByName(name);
            return dispatch({
                type: SET_RECIPES_BY_NAME,
                payload: recipes
            })
        } catch (error) {
            throw Error(error.message);
        };
    }
}

export function increasePage() {
    return {
        type: INCREASE_PAGE,
    };
};

export function decreasePage() {
    return {
        type: DECREASE_PAGE,
    };
};

export function resetPage() {
    return {
        type: RESET_PAGE,
    };
};

export function orderRecipes(order) {
    return {
        type: ORDER_RECIPES,
        payload: order
    };
};

export function filterRecipes(filters) {
    return {
        type: FILTER_RECIPES,
        payload: filters
    }
}
export function resetFilters() {
    return {
        type: RESET_FILTERS,
    }
}

export function createRecipe(recipe) {
    return async(dispatch) => {
        try {
            const response = await postRecipe(recipe);
            //!LLAMAR a una util de formateo de receta
            return dispatch({
                type: CREATE_RECIPE,
                payload: response
            })
        } catch (error) {
            throw Error(error.message);
        }
    }

};
