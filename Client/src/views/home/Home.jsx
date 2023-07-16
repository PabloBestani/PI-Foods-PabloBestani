import Grid from "../../components/grid/Grid";
import Filter from "../../components/filter/Filter";
import Pagination from "../../components/pagination/Pagination";
import styles from './home.module.css';
import usePaginate from '../../hooks/usePaginate';

function Home() {
    //! SACAR EVENTUALMENTE los indices, no hacen falta
    const { 
        previousPage, 
        nextPage, 
        visibleRecipes, 
        maxPages, 
        startIndex, 
        endIndex
    } = usePaginate(9);


    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <Pagination 
                previousPage={previousPage}
                nextPage={nextPage}
                maxPages={maxPages}
                startIndex={startIndex}
                endIndex={endIndex}
            />
            <Filter />
            <Grid visibleRecipes={visibleRecipes}/>
        </div>
    );
};

export default Home;