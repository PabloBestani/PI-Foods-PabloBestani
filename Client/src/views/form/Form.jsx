import { useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import styles from "./form.module.css";


function Form() {
    const allDiets = useSelector((state) => state.allDiets);
    const {
        submitHandler, 
        recipeChangeHandler, 
        dietChangeHandler,
        currSteps,
        addSteps,
        stepsOnChange
    } = useForm();


    return (
        <div className={styles.container}>
            <h1>Form</h1>

            <form className={styles.form} onSubmit={submitHandler}>
                <label>Recipe name</label>
                <input type="text" name="title" onChange={recipeChangeHandler}/>

                <label>Summary</label>
                <input type="text" name="summary" onChange={recipeChangeHandler}/>
                
                <label>Health Score</label>
                <input type="number" name="healthScore" onChange={recipeChangeHandler}/>

                <label>Instructions</label>
                {
                    Object.keys(currSteps)?.map((step, index) => {
                        return <input key={index} type="text" name={step} onChange={stepsOnChange} />
                    })
                }
                <button type="button" onClick={addSteps}>Add instruction</button>

                <label>Image URL</label>
                <input type="text" name="image" placeholder="insert URL"  onChange={recipeChangeHandler}/>

                <div className={styles.dietList}>
                    <label>Associated diets</label>
                        {
                            allDiets?.map((diet, index) => {
                                return (
                                    <div className={styles.dietContainer} key={index}>
                                        <input 
                                            className={styles.checkbox}
                                            type="checkbox"
                                            name="diets"
                                            value={diet}
                                            onChange={dietChangeHandler}
                                         />
                                        <label>{diet}</label>
                                    </div>
                                );
                            })
                        }
                </div>
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    );
};

export default Form;