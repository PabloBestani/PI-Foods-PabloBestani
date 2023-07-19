
export default function validateForm (recipe, steps) {
    let errors = {};
    const {title, healthScore, summary} = recipe;
    const noNumsRegex = /\d+/g;
    const onlyNumsRegex = /^[0-9]+$/;

    // Valido el title
    if(!title.length) {
        errors.title = "Field required";
    } else {
        if (noNumsRegex.test(title)){
            errors.title = "Recipe name must not contain numbers";
        };
    }
    // Valido el healthScore
    if(!healthScore) {
        errors.healthScore = "Field required";
    } else {
        if (!onlyNumsRegex.test(healthScore)) {
            errors.healthScore = "Health Score must be a number";
        }
        else if (healthScore < 0 || healthScore > 100) {
            errors.healthScore = "Health Score must be a number between 0 and 100";
        };
    }
    // Valido el summary
    if(!summary) {
        errors.summary = "Field required";
    } else {
        if (summary.length < 20) {
            errors.summary = "Summary needs to be more extense";
        };
    }
    // Valido los steps
    if(
        !Object.values(steps)[0] &&
        !Object.values(steps)[1] &&
        !Object.values(steps)[2]
    ) {
        errors.steps = "Field required";
    } else {
        if (Object.keys(steps).length < 3) {
            errors.steps = "Please add more steps";
        };
    }

    return errors;
}