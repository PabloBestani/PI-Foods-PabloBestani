import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../redux/actions';


export default function usePaginate (gridContent) {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.currPage);
    const recipes = useSelector((state) => state.filteredRecipes);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(9);
    const [visibleRecipes, setVisibleRecipes] = useState([]);
    const [maxPages, setMaxPages] = useState(1);

    
    useEffect(() => {
        setStartIndex((page - 1) * gridContent);
        setEndIndex(page * gridContent);
    }, [page, recipes])
    
    
    useEffect(() => {
        setVisibleRecipes(recipes.slice(startIndex, endIndex));
        const amountOfPages = Math.ceil(recipes.length / gridContent);
        if (amountOfPages > 0) setMaxPages(amountOfPages)
        else setMaxPages(1);
    }, [recipes, startIndex])



    const previousPage = () => {
        if (page > 1) {
            dispatch(actions.decreasePage());
            setStartIndex(startIndex - gridContent);
            setEndIndex(endIndex - gridContent);
        };
    };

    const nextPage = () => {
        if (page < maxPages) {
            dispatch(actions.increasePage());
            setStartIndex(startIndex + gridContent);
            setEndIndex(endIndex + gridContent);
        };
    };



    return {
        previousPage,
        nextPage,
        visibleRecipes,
        maxPages
    }
}








