const {Router} = require("express");
const {getAllDietsHandler} = require("../handlers/dietHandler");

const dietsRouter = Router();

dietsRouter.get("/", getAllDietsHandler);



module.exports = dietsRouter;
