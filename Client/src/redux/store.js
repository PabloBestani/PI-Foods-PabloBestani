import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; //thunk es un middleware, una funcion de paso q se ejecuta antes de que se termine de solicitar info
import rootReducer from './reducer';


const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);

export default store;