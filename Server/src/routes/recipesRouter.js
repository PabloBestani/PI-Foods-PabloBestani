const {Router} = require("express");
const {getByIdHandler, 
    getByNameHandler, 
    postRecipeHandler} = require("../handlers/recipeHandler");

const recipesRouter = Router();

recipesRouter.get("/:idRecipe", getByIdHandler);

recipesRouter.get("/", getByNameHandler);

recipesRouter.post("/", postRecipeHandler);



module.exports = recipesRouter;




