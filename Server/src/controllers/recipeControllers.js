const { Recipe, Diet } = require("../db");
const axios = require("axios");
require('dotenv').config();
const getByIdApi = require("../helpers/getByIdApi");


//*la ruta ya esta correctamente configurada


//Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla con los tipos de dieta solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la receta en la base de datos, y esta debe estar relacionada con los tipos de dieta indicados (al menos uno).
const createRecipe = async(req, res) => {
    try {
        const {title, image, summary, score, instructions, dietIds} = req.body;
        if(title && image && summary && score && instructions && dietIds) {


            const [newDiet, created] = await Diet.findOrCreate({
                where: {id: 1},
                defaults: {
                    id: 1,
                    title: "diettita"
                }
            });

            const [newRecipe, create] = await Recipe.findOrCreate({
                where: {title: title},
                defaults: {
                    title: title,
                    image: image,
                    summary: summary,
                    score: score,
                    instructions: instructions
                }
            });
            const dietas = await Diet.findAll({where: {id: dietIds}});

            await newRecipe.addDiets(dietas);
            const dietitasss = await newRecipe.getDiets();

            //!DEBERIA DEVOLVER EL SEND Y NO EL JSON
            return res.status(200).json(dietitasss);
            // return res.status(200).send("Recipe creation successful");

        }
        return res.status(400).send("Missing data");


    } catch (error) {
        res.status(400).json({error: error.message});
    }
}




//* GET RECIPE BY ID CONTROLLER


//!DICE EL README:
//*Tiene que incluir los datos de los tipos de dietas asociados a la receta.
//*Debe funcionar tanto para las recetas de la API como para las de la base de datos.

const getRecipeById = (id) => {
    return getByIdApi(id);

}





//* GET RECIPE BY NAME

// Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarla independientemente de mayúsculas o minúsculas.
//! Si no existe la receta, debe mostrar un mensaje adecuado.
//! Debe buscar tanto las de la API como las de la base de datos.

//!NO ANDA AUN (el endpoint es correcto, hay un problema de enrutador aparentemente)
const getRecipeByName = async(req, res) => {
    try {
        const {name} = req.query;
        const {API_KEY} = process.env;
        const endpoint = `https://api.spoonacular.com/recipes/complexSearch?query=${name}apiKey=${API_KEY}`;

        const {data} = await axios(endpoint);

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};







module.exports = {
    createRecipe,
    getRecipeById,
    getRecipeByName
};
