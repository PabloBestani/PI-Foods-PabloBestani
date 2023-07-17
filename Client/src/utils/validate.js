
export default function validateForm (recipe, diets) {
    let errors = {};
    const {title, healthScore, summary, steps} = recipe;
    const hasNumbers = /\d+/g.test;


    // Valido el title
    if(!title) {
        errors.title = "Field required";
    } else {
        if (hasNumbers(title)){
            errors.title = "Recipe name must not contain numbers";
        };
    }
    // Valido el healthScore
    //!FALTA DE ACA EN ADELANTE
    if(!healthScore) {
        errors.healthScore = "Field required";
    } else {

    }
    // Valido el summary
    if(!summary) {
        errors.summary = "Field required";
    }
    // Valido los steps
    //!ESTO REQUIERE que haya seteado bien los inputs para los steps
    if(!steps) {
        errors.steps = "Field required";
    }
    // Valido las diets
    if(!diets.length) {
        errors.diets = "Field required";
    }

    return errors;
}