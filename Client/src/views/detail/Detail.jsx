import Card from "../../components/card/Card";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../utils/apiUtils";
import { useEffect, useState } from "react";
import styles from './detail.module.css';

function Detail() {
    const [isLoading, setIsLoading] = useState(true);
    const [recipe, setRecipe] = useState({});
    const {idRecipe} = useParams();

    useEffect(() => {
        const executeGet = async() => {
            if(idRecipe) {
                const response = await getRecipeById(idRecipe);
                setRecipe(response);
                setIsLoading(false);
            };
        }
        executeGet();
    }, [idRecipe]);


    if (isLoading) return (
        <h2>Loading...</h2>
    )

    return (
        <div className={styles.container}>
            <h1>Detail</h1>
            <Card id={idRecipe} recipe={recipe} detail={true} />
        </div>
    );
};

export default Detail;