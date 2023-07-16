const {
    getRecipeById, 
    getRecipeByName,
    postRecipe
} = require("../controllers/index");
const getRecipes = require("../helpers/getRecipes");



const getRecipesHandler = async(req, res) => {
    try {
        const {name} = req.query;
        let response = [];
        if(!name) {
            response = await getRecipes();
            return res.status(200).json(response);
        };
        
        response = await getRecipeByName(name);
        return res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
}

const getByIdHandler = async(req, res) => {
    try {
        const {idRecipe} = req.params;
        if(!idRecipe) return res.status(400).send("Missing recipe ID");
        const response = await getRecipeById(idRecipe);

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}





const postRecipeHandler = async(req, res) => {
    try {
        const {body} = req;
        const recipe = await postRecipe(body);

        return res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}



module.exports = {
    getByIdHandler,
    getRecipesHandler,
    postRecipeHandler
};