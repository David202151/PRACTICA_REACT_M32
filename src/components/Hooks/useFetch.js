import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (urlApi) =>{ 
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); 
    const [reloadIndex, setReloadIndex] = useState(0)
    const refetch = () => setReloadIndex (prev => prev + 1); 
    useEffect(()=> {
        setData(null);  
        setIsLoading(true); 
        setError(null);  
        if (!urlApi) { setIsLoading(false); return; }
        const fetchData = async () => {
            try{
                const response = await axios.get(urlApi); 
                setData(response.data); 
            }catch(err){
                setError(err); 
            }
            setIsLoading(false); 
        }; 
        fetchData(); 
    }, [urlApi, reloadIndex]); 
    return {data, isLoading, error, refetch}; 
}

export default useFetch; 