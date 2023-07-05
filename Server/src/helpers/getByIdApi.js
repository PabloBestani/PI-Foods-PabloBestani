require("dotenv").config();
const axios = require("axios");

const getByIdApi = async(id) => {
    // return `LLEGUE AL HANDLER DE LA API con el id ${id}`;
    const {API_KEY} = process.env;
    const endpoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
    const {data} = await axios(endpoint);
}

module.exports = getByIdApi;







