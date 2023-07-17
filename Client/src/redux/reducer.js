import { 
    SET_ALL_RECIPES, 
    SET_ALL_DIETS,
    SET_RECIPES_BY_NAME, 
    INCREASE_PAGE, 
    DECREASE_PAGE, 
    RESET_PAGE, 
    ORDER_RECIPES,
    FILTER_RECIPES,
    RESET_FILTERS,
    CREATE_RECIPE
} from "./actions";
import * as utils from '../utils/reduxUtils';



let initialState = {
    allRecipes: [],
    allDiets: [],
    activeFilters: {
        chosenOrigin: 'All',
        chosenDiets: [],
    },
    chosenOrder: 'Select order',
    byName: [],
    filteredRecipes: [],
    currPage: 1
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SET_ALL_RECIPES:
            return {
                ...state,
                allRecipes: payload,
                filteredRecipes: payload
            };
        case SET_ALL_DIETS:
            return {
                ...state,
                allDiets: payload
            };
        case SET_RECIPES_BY_NAME:
            return {
                ...state,
                // byName: payload,
                // filteredByOrigin: payload,
                // combinedFiltered: payload
            };
        case INCREASE_PAGE:
            return {
                ...state,
                currPage: state.currPage + 1
            };
        case DECREASE_PAGE:
            return {
                ...state,
                currPage: state.currPage - 1
            };
        case RESET_PAGE:
            return {
                ...state,
                currPage: 1
            };
        case ORDER_RECIPES:
            const ordered = utils.orderRecipes(state.filteredRecipes, payload);
            return {
                ...state,
                chosenOrder: payload,
                filteredRecipes: ordered,
            };
        case FILTER_RECIPES:
            const filtered = utils.filterRecipes(state.allRecipes, payload);
            return {
                ...state,
                activeFilters: payload,
                filteredRecipes: filtered,
                currPage: 1
            }
        case RESET_FILTERS:
            return {
                ...state,
                activeFilters: {
                    chosenOrigin: 'All',
                    chosenDiets: [],
                },
                chosenOrder: 'Select order',
                filteredRecipes: state.allRecipes,
                currPage: 1
            }
        case CREATE_RECIPE:
            return {
                ...state,
                allRecipes: [payload, ...state.allRecipes],
                filteredRecipes: [payload, ...state.filteredRecipes],
            };
        default:
            return state;
    };
}

export default rootReducer;