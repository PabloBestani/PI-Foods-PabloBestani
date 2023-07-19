import { Link } from "react-router-dom";
import formatTextDetail from "../../utils/formatTextDetail";
import styles from './card.module.css';


function Card({recipe, detail}) {
    const {id, title, image, diets, healthScore, summary, steps} = recipe;
    const cleanSummary = formatTextDetail(summary);
    const cleanDiets = diets.join(', ');

    
    return (
        <div className={styles.container} >
            <h3>Card</h3>
            <span>{title}</span>
            <img src={image} alt={title} />
            <p>Diets: {cleanDiets}</p>
            {
                !detail &&
                    <Link to={`/detail/${id}`}>
                        <button>View</button>
                    </Link>

            }
            {
                detail && 
                    <div>
                        <span>Health Score: {healthScore}</span>
                        <p>{cleanSummary}</p>
                        {
                            steps?.map((step) => {
                                return <p key={step.number}>
                                    Step {step.number}: {step.step}
                                </p>
                            })
                        }
                    </div>
            }
        </div>
    );
};

export default Card;