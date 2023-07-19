import { useSelector } from "react-redux";
import Grid from "../../components/grid/Grid";
import Filter from "../../components/filter/Filter";
import Order from "../../components/order/Order";
import Pagination from "../../components/pagination/Pagination";
import styles from './home.module.css';
import usePaginate from '../../hooks/usePaginate';

function Home() {
    const showFilters = useSelector((state) => state.showFilters);
    const { 
        previousPage, 
        nextPage, 
        visibleRecipes, 
        maxPages
    } = usePaginate(9);


    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <Pagination 
                previousPage={previousPage}
                nextPage={nextPage}
                maxPages={maxPages}
            />
            <Order />
            {
                showFilters && <Filter />
            }
            <Grid visibleRecipes={visibleRecipes}/>
        </div>
    );
};

export default Home;