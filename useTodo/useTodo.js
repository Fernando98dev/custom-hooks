import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

//esto es lo que hace el argumento init en la funcion useReducer
const init = () =>{
    return JSON.parse(localStorage.getItem('todos') || []);
  }

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    
    }, [todos])//cuando los todos cambian vuelvo a ejecutar el first

    const handleNewTodo = (todo) =>{

        //creo la accion
        const action = {
          type: '[TODO] Add Todo',
          payload: todo
        }
  
        //se la mando al reducer
        dispatch(action);
      }
  
      const handleDeleteTodo = (id) =>{
        dispatch({
          type: '[TODO] Remove Todo',
          payload: id
        });
  
      }
  
      const handleToggleTodo = (id) =>{
        //console.log(id);
        dispatch({
          type: '[TODO] Toggle Todo',
          payload: id
        });
  
      }

  return{
    ...todos,
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
