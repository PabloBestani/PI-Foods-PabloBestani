import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';


function SearchBar() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    function onChange(e) {
        setInput(e.target.value);
    }
    
    function onClick() {
        dispatch(actions.setRecipesByName(input));
    }

    return (
        <div>
            <h3>SearchBar</h3>
            <input 
                type="text" 
                name="input" 
                placeholder="recipe name" 
                onChange={onChange}
            />
            <button onClick={onClick}>Search</button>
        </div>
    );
};

export default SearchBar;