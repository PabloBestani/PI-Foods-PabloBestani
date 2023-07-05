const {getRecipeById, getRecipeByName, createRecipe} = require("../controllers/recipeControllers");

//!DICE EL README:
//*Tiene que incluir los datos de los tipos de dietas asociados a la receta.
//*Debe funcionar tanto para las recetas de la API como para las de la base de datos.

const getByIdHandler = (req, res) => {
    try {
        const {idRecipe} = req.params;
        const response = getRecipeById(idRecipe);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


const getByNameHandler = async(req, res) => {
    try {
       
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


const postRecipeHandler = async(req, res) => {
    try {
       
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}



module.exports = {
    getByIdHandler,
    getByNameHandler,
    postRecipeHandler
};