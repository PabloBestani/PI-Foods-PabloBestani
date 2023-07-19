import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Form from './views/form/Form';
import NavBar from './components/navBar/NavBar';
import * as actions from './redux/actions';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actions.setAllRecipes());
    dispatch(actions.setAllDiets());
  }, [])


  return (
    <div className="App">
        {location.pathname !== '/' && <NavBar />}
      <Routes>

        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:idRecipe' element={<Detail />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
