import { getAllDiets } from "./apiUtils";


export default async function listAllDiets() {
    const allDiets = await getAllDiets()
    .then((diets) => diets.map((diet) => {
        return diet.title;
    }))
    .then((diets) => {
        return diets;
    })
    .catch((error) => error.message);
    return allDiets;
}