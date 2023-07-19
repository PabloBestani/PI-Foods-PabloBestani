const {Recipe, Diet} = require("../../db");
const {Op} = require("sequelize");
const {formatRecipesDb} = require("../../utils/formatRecipes");



const createRecipe = async(recipe) => {
    // Desestructuro las propiedades que recibi para la receta, y chequeo que todas esten
    const {title, image, summary, healthScore, steps, diets} = recipe;
    if(title && image && summary && healthScore && steps && diets) {

        // Busco la receta en la DB, y si no existe la creo
        const newRecipe = (await Recipe.findOrCreate({
            where: {title: title},
            defaults: {
                title: title,
                healthScore: healthScore,
                image: image,
                summary: summary,
                steps: steps,
            }
        }))[0];

        // Encuentro todos los registros de dietas que me pidieron por parametro
        const dietas = await Diet.findAll({
            where: {
                title: {[Op.in]: diets}
            }
        });

        // Asocio todas las dietas a la receta que cree
        await newRecipe.addDiets(dietas);

        // Retorno la nueva receta, formateada y con sus dietas asociadas
        let output = await Recipe.findByPk(newRecipe.id, {include: [Diet]});
        console.log(output);
        const formattedOutput = formatRecipesDb([output])[0];
        return formattedOutput;
    };
};


module.exports = createRecipe;
