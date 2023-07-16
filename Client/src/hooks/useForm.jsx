import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from '../redux/actions';


export default function useForm () {

    const dispatch = useDispatch();
    // Estado para validar y renderizar errores en el formulario
    const [errors, setErrors] = useState({});

    // Estados para controlar la receta a crear y sus dietas asociadas
    const [checkedDiets, setCheckedDiets] = useState([]);
    const [recipe, setRecipe] = useState({
        title: '',
        healthScore: 0,
        image: '',
        summary: '',
        steps: {}
    });

    // Estados para controlar la creacion de steps en el formulario
    const [stepCounter, setStepCounter] = useState(2);
    const [currSteps, setCurrSteps] = useState({
        step1: '',
        step2: ''
    });
    
    // Handler para el submit entero del form
    const submitHandler = (e) => {
        e.preventDefault();
        const steps = formatSteps();
        const fullRecipe = {
            ...recipe,
            steps,
            diets: [...checkedDiets]
        }
        dispatch(actions.createRecipe(fullRecipe));
        console.log(fullRecipe);
        //! QUE PASA SI la receta ya existe? me va a mandar el alert de creado igual?
        window.alert(`New recipe ${fullRecipe.title} created successfully!`)
    };

    // Handlers para control de la receta y sus dietas asociadas
    const recipeChangeHandler = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
    };

    const dietChangeHandler = (e) => {
        const checkedDiet = e.target.value;
        if (!checkedDiets.includes(checkedDiet)) {
            setCheckedDiets([...checkedDiets, checkedDiet])
        } else {
            const filtered = checkedDiets.filter((diet) => diet !== checkedDiet);
            setCheckedDiets([...filtered]);
        };
    };
    

    // Handlers para control de los steps que ser van creando
    const addSteps = () => {
        setCurrSteps({
            ...currSteps,
            [`step${stepCounter + 1}`]: '',
        })
        setStepCounter(stepCounter + 1);
    }

    const stepsOnChange = (e) => {
        setCurrSteps({
            ...currSteps,
            [e.target.name]: e.target.value
        })
    }

    const formatSteps = () => {
        // Armo un arreglo de los strings que escribio el usuario
        const strings = Object.values(currSteps);
        // Por cada string, creo un objeto con numero de paso y el string correspondiente
        const formattedSteps = strings?.map((string, index) => {
            return {
                number: index + 1,
                step: string
            }
        })
        // Retorno el arreglo de objetos ya formateados
        return formattedSteps;
    }


    return {
        submitHandler,
        recipeChangeHandler,
        dietChangeHandler,
        currSteps,
        addSteps,
        stepsOnChange
    }
}







