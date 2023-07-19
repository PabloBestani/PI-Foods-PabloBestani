import { Link } from "react-router-dom";
import formatTextDetail from "../../utils/formatTextDetail";
import styles from './card.module.css';


function Card({recipe, detail}) {
    const {id, title, image, diets, healthScore, summary, steps} = recipe;
    const cleanSummary = formatTextDetail(summary);

    
    return (
        <div className={detail && styles.detailContainer}>
            {detail && <h2>{title}</h2>}
            <div className={detail && styles.triptychContainer}>
                <div className={detail ? styles.detailCardLeft : styles.container}>
                    <div className={!detail && styles.cardLeft}>
                        <img src={image} alt={title} />
                        {!detail && <span><b>{title}</b></span>}
                    </div>

                    <div className={!detail && styles.cardRight}>
                        <div className={detail ? styles.detailDiets : styles.diets}>
                            <h4><b>Diets:</b></h4>
                            {
                                diets?.map((diet, index) => <p key={index}>{diet}</p>)
                            }
                        </div>

                        {
                            !detail &&
                            <Link to={`/detail/${id}`}>
                                    <button>View</button>
                                </Link>
                        }
                    </div>
                </div>
                {
                    detail && 
                        <>
                            <div className={styles.detailCardCenter}>
                                <h3>Health Score: {healthScore}</h3>
                                <p>{cleanSummary}</p>
                            </div>
                            <div className={styles.detailCardRight}>
                                {
                                    steps?.map((step) => {
                                        return <p key={step.number}>
                                            <b>Step {step.number}:</b> {step.step}
                                        </p>
                                    })
                                }
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Card;