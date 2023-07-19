import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { useEffect } from "react";


export default function Order() {
    const dispatch = useDispatch();
    const chosenOrder = useSelector((state) => state.chosenOrder);
    const activeFilters = useSelector((state) => state.activeFilters);
    const orderOptions = ['Select order', 'A-Z', 'Z-A', 'Healthiest', 'Least Healthy'];

    useEffect(() => {
        dispatch(actions.orderRecipes(chosenOrder));
    }, [activeFilters])


    // Handler de ordenamiento
    function handleOrderChange(e) {
        const order = e.target.value;
        dispatch(actions.orderRecipes(order));
    };

    return (
        <div>
            <select value={chosenOrder} onChange={handleOrderChange}>
                {
                    orderOptions.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })
                }
            </select>
        </div>
    );
};





