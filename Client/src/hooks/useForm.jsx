import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../redux/actions';
import validateForm from "../utils/validateForm";


export default function useForm () {

    const dispatch = useDispatch();
    const allDiets = useSelector((state) => state.allDiets);
    // Estado para validar y renderizar errores en el formulario
    const [errors, setErrors] = useState({});

    // Estados para controlar la receta a crear y sus dietas asociadas
    const [checkedDiets, setCheckedDiets] = useState({});
    const [recipe, setRecipe] = useState({
        title: '',
        healthScore: 0,
        image: '',
        summary: ''
    });

    // Estados para controlar la creacion de steps en el formulario
    const [stepCounter, setStepCounter] = useState(2);
    const [currSteps, setCurrSteps] = useState({
        step1: '',
        step2: ''
    });

    useEffect(() => {
        // Comienzo seteando en false todas las checkboxes
        resetDietCheckboxes();
    }, []);

    useEffect(() => {
        setErrors(
            validateForm(recipe, currSteps)
        );
    }, [recipe, currSteps]);

    
    // Funcion que setea todos los valores de las checkboxes en false para resetearlas
    function resetDietCheckboxes() {
        let dietsToSet = {};
        // Por cada dieta global, seteo en un objeto las checkboxes que existen y que esten en false
        allDiets.forEach((diet) => {
            return dietsToSet[diet] = false;
        });
        // Guardo el objeto con los booleanos en el estado local
        setCheckedDiets(dietsToSet);
    };




    // Handler para control de la receta 
    const recipeChangeHandler = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });    
    };


    // Handler para control de las dietas asociadas
    const dietChangeHandler = (e) => {
        const checkedDiet = e.target.value;

        if (!checkedDiets[checkedDiet]) {
            setCheckedDiets({
                ...checkedDiets,
                [checkedDiet]: true
            });
        } else {
            setCheckedDiets({
                ...checkedDiets,
                [checkedDiet]: false
            });
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



    // Handler para el submit entero del form
    const submitHandler = (e) => {
        e.preventDefault();
        const steps = formatSteps();
        // Formateo las dietas para devolver solo un array de strings
        const diets = Object.keys(checkedDiets).filter((key) => checkedDiets[key]);
        let image = recipe.image;
        if (!image.length) image = 'https://i.pinimg.com/originals/9f/f6/5f/9ff65fb8fa416b35f1b197da6ca67940.jpg';
        const fullRecipe = {
            ...recipe,
            image,
            steps,
            diets
        }
        dispatch(actions.createRecipe(fullRecipe));

        //! QUE PASA SI la receta ya existe? me va a mandar el alert de creado igual?
        window.alert(`New recipe ${fullRecipe.title} created successfully!`);

        // Reseteo todos los estados locales y los inputs
        setRecipe({
            title: '',
            healthScore: 0,
            image: '',
            summary: ''
        });
        setStepCounter(2);
        setCurrSteps({
            step1: '',
            step2: ''
        });
        resetDietCheckboxes();
    };


    return {
        errors,
        recipe,
        currSteps,
        checkedDiets,
        submitHandler,
        recipeChangeHandler,
        dietChangeHandler,
        addSteps,
        stepsOnChange
    }
}







