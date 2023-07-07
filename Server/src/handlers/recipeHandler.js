const {
    getRecipeById, 
    getRecipeByName,
    postRecipe} = require("../controllers/index");



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


const getByNameHandler = async(req, res) => {
    try {
        const {name} = req.query;
        if(!name) return res.status(400).send("Missing name search parameter");
        const response = await getRecipeByName(name);

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
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
    getByNameHandler,
    postRecipeHandler
};