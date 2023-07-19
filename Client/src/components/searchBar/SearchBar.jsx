import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import styles from './searchBar.module.css';


function SearchBar() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    function onChange(e) {
        setInput(e.target.value);
    };
    
    function searchHandler() {
        dispatch(actions.setRecipesByName(input));
    };

    function resetHandler() {
        dispatch(actions.resetSearchRecipes());
        setInput('');
    }

    return (
        <div className={styles.container}>
            <input 
                type="text" 
                name="input" 
                value={input}
                placeholder="recipe name" 
                onChange={onChange}
            />
            <button onClick={searchHandler}>Search</button>
            <button onClick={resetHandler}>All</button>

        </div>
    );
};

export default SearchBar;