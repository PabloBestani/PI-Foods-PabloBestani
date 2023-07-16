import { useSelector } from "react-redux";
import useFilter from '../../hooks/useFilter';

export default function Filter() {
    const allDiets = useSelector((state) => state.allDiets);
    const {chosenOrigin} = useSelector((state) => state.activeFilters);
    const chosenOrder = useSelector((state) => state.chosenOrder);
    const orderOptions = ['Select order', 'A-Z', 'Z-A', 'Healthiest', 'Least Healthy'];
    const originOptions = ['All', 'API', 'Database'];
    const {
        shouldBeChecked,
        handleOriginChange,
        handleDietChange,
        handleOrderChange,
        handleReset,
    } = useFilter();


    return (
        <div>
            <select value={chosenOrder} onChange={handleOrderChange}>
                {
                    orderOptions.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })
                }
            </select>
            <select value={chosenOrigin} onChange={handleOriginChange}>
                {
                    originOptions.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })
                }
            </select>
            {
                allDiets?.map((diet, index) => {
                    return <div key={index}>
                        <label>{diet}</label>
                        <input 
                            type="checkbox" 
                            value={diet} 
                            checked={shouldBeChecked[diet]}
                            onChange={handleDietChange} 
                        />
                    </div>
                })
            }
            <button onClick={handleReset}>Reset filters</button>
        </div>
    )
}