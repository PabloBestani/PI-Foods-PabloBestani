import { useSelector } from "react-redux";
import useFilter from '../../hooks/useFilter';
import styles from './filter.module.css'

export default function Filter() {
    const allDiets = useSelector((state) => state.allDiets);
    const {chosenOrigin} = useSelector((state) => state.activeFilters);
    const originOptions = ['All', 'API', 'Database'];
    const {
        shouldBeChecked,
        handleOriginChange,
        handleDietChange,
        handleReset,
    } = useFilter();



    

    return (
        <div className={styles.container}>
            <select value={chosenOrigin} onChange={handleOriginChange}>
                {
                    originOptions.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })
                }
            </select>
            <div className={styles.checkboxContainer}>
                {
                    allDiets?.map((diet, index) => {
                        return <div className={styles.singleCheckbox} key={index}>
                            <input 
                                type="checkbox" 
                                value={diet} 
                                checked={shouldBeChecked[diet]}
                                onChange={handleDietChange} 
                            />
                            <label>{diet}</label>
                        </div>
                    })
                }
            </div>
            <button onClick={handleReset}>Reset filters</button>
        </div>
    )
}