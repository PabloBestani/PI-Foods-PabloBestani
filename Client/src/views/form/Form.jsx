import { useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import styles from "./form.module.css";


function Form() {
    const allDiets = useSelector((state) => state.allDiets);
    const {
        errors,
        recipe,
        currSteps,
        checkedDiets,
        submitHandler, 
        recipeChangeHandler, 
        dietChangeHandler,
        addSteps,
        stepsOnChange
    } = useForm();


    return (
        <div className={styles.container}>
            <h1>Create your own Recipe</h1>

            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.textInputs}>
                    <label>Recipe name</label>
                    <input type="text" name="title" value={recipe.title} onChange={recipeChangeHandler}/>
                    {errors.title && <p>{errors.title}</p>}
                    

                    <label>Summary</label>
                    <input type="text" name="summary" value={recipe.summary} onChange={recipeChangeHandler}/>
                    {errors.summary && <p>{errors.summary}</p>}
                    
                    <label>Health Score</label>
                    <input type="number" name="healthScore" value={recipe.healthScore} onChange={recipeChangeHandler}/>
                    {errors.healthScore && <p>{errors.healthScore}</p>}


                    {/* //* STEPS */}
                    <label>Instructions</label>
                    {
                        Object.keys(currSteps)?.map((step, index) => {
                            return <input key={index} type="text" value={currSteps[step]} name={step} onChange={stepsOnChange} />
                        })
                    }
                    <button type="button" onClick={addSteps}>Add instruction</button>
                    {errors.steps && <p>{errors.steps}</p>}


                    {/* //* IMAGE */}
                    <label>Image URL</label>
                    <input type="text" name="image" value={recipe.image} placeholder="insert URL"  onChange={recipeChangeHandler}/>
                </div>

                
                {/* //* DIETS */}
                <div className={styles.dietList}>
                    <label>Associated diets</label>
                        {
                            allDiets?.map((diet, index) => {
                                return (
                                    <div className={styles.singleCheckbox} key={index}>
                                        <input 
                                            className={styles.checkbox}
                                            type="checkbox"
                                            name="diets"
                                            value={diet}
                                            checked={checkedDiets[diet]}
                                            onChange={dietChangeHandler}
                                         />
                                        <p>{diet}</p>
                                    </div>
                                );
                            })
                        }
                </div>
                <button type="submit" disabled={Object.keys(errors).length}>Create Recipe</button>
            </form>
        </div>
    );
};

export default Form;