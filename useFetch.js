import { useEffect, useState } from "react"
 
export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });
    
    const getFetch = async () => {

        setState({
            ...state,//desestructuro el state
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
        console.log(data);
    }
    
    useEffect(() => {
      //en first pongo lo que pasara cuando se monte pro primera ves el componente
      getFetch();
    
    }, [url])// al colocar el url como dependencia se disparara
    // el useeffect cada ves que cambie el url
    
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
