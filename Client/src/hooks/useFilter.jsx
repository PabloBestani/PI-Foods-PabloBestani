import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from '../redux/actions';


export default function useForm() {
    const dispatch = useDispatch();
    const [shouldBeChecked, setShouldBeChecked] = useState({});
    const {chosenOrigin, chosenDiets} = useSelector((state) => state.activeFilters);


    useEffect(() => {
        setActiveDiets();
    }, [chosenDiets]);
    

    function setActiveDiets() {
        const checkedDiets = {};
        chosenDiets.forEach((diet) => {
            return checkedDiets[diet] = true;
        });;
        setShouldBeChecked(checkedDiets);
    };

    function handleDietChange(e) {
        const checkedDiet = e.target.value;
        if (!chosenDiets.includes(checkedDiet)) {
            dispatch(actions.filterRecipes({
                chosenOrigin: chosenOrigin,
                chosenDiets: [...chosenDiets, checkedDiet]
            }));
        } else {
            const filtered = chosenDiets.filter((diet) => diet !== checkedDiet);
            dispatch(actions.filterRecipes({
                chosenOrigin: chosenOrigin,
                chosenDiets: filtered
            }));
        };
    };

    // Handler de filtro por origen
    function handleOriginChange(e) {
        const origin = e.target.value;
        dispatch(actions.filterRecipes({
            chosenOrigin: origin,
            chosenDiets: chosenDiets
        }));
    };


    // Handler de ordenamiento
    function handleOrderChange(e) {
        const order = e.target.value;
        dispatch(actions.orderRecipes(order));
    };

    
    function handleReset() {
        dispatch(actions.resetFilters());
    };

    return {
        shouldBeChecked,
        handleOriginChange,
        handleDietChange,
        handleOrderChange,
        handleReset,
    };
};

