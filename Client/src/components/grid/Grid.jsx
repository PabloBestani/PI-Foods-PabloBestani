import Card from "../card/Card";
import styles from './grid.module.css';


function Grid({visibleRecipes}) {
    
    return (
        <div className={styles.container}>
            {
                visibleRecipes.map((recipe, index) => {
                    return <Card recipe={recipe} key={index} detail={false} />
                })
            }
        </div>
    );
};

export default Grid;