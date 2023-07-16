const {Router} = require("express");
const {getByIdHandler, 
    getRecipesHandler, 
    postRecipeHandler} = require("../handlers/recipeHandler");

const recipesRouter = Router();

recipesRouter.get("/:idRecipe", getByIdHandler);

recipesRouter.get("/", getRecipesHandler);

recipesRouter.post("/", postRecipeHandler);



module.exports = recipesRouter;




