import { Link } from "react-router-dom";
import styles from './card.module.css';


function Card({recipe, detail}) {
    const {id, title, image, diets} = recipe;
    if (detail) {
        //!FALTA EL DETAIL MAYOR
        // const {healthScore, summary, steps, vegetarian, vegan, glutenFree} = recipe;
    }
    return (
        <div className={styles.container} >
            <h3>Card</h3>
            <span>{title}</span>
            <img src={image} alt={title} />
            <span>Diets: {diets}</span>
            <Link to={`/detail/${id}`}>
                <button>View</button>
            </Link>
        </div>
    );
};

export default Card;