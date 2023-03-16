import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setformState] = useState(initialForm);

    
    
    const onInputChange = ({target}) =>{
        const {name, value} = target;

        setformState({
            ...formState,
            [ name ]: value
        });

    }

    //const onResetForm = (initialForm) =>{
        //if(initialForm != ''){
            //Convertimos los inputs (json) a un arreglo de arreglos
           // const inputsArray = Object.entries(formState);

            // Recorremos el arreglo y retornamos un nuevo arreglo de arreglos conservando el key
           // const clearInputsArray = inputsArray.map(([key]) => [key, '']);

            //Convertimos el arreglo de arreglos nuevamente a formato json
            //const inputsJson = Object.fromEntries(clearInputsArray);
           // setformState(inputsJson);
        //}
    //}

    const onResetForm = () =>{
       setformState(initialForm);
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm

    }
}
