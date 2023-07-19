import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from '../redux/actions';


export default function useForm() {
    const dispatch = useDispatch();
    // Estado local para ver cuales checkbox deberian ya comenzar chequeadas
    const [shouldBeChecked, setShouldBeChecked] = useState({});
    const {chosenOrigin, chosenDiets} = useSelector((state) => state.activeFilters);


    useEffect(() => {
        // Busca las dietas que estaban activas antes de montar el componente
        setActiveDiets();
    }, [chosenDiets]);
    

    function setActiveDiets() {
        const checkedDiets = {};
        // Por cada dieta global, seteo en un objeto cual checkbox deberia estar chequeada
        chosenDiets.forEach((diet) => {
            return checkedDiets[diet] = true;
        });;
        // Guardo el objeto con los booleanos en el estado local
        setShouldBeChecked(checkedDiets);
    };

    // Handler de filtro por dietas
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
    
    function handleReset() {
        dispatch(actions.resetFilters());
    };

    return {
        shouldBeChecked,
        handleOriginChange,
        handleDietChange,
        handleReset,
    };
};

