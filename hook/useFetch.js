import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint,query) =>{
    const [data,setData]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] =useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          ...query
        },
        headers: {
          'X-RapidAPI-Key': '7a5cde1249msh54f2f7e026e6d36p146190jsn8ea407c3a4bd',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
    
      const fetchData = async() =>{
        setIsLoading(true);

        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        }catch(error){
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
      }


    useEffect(() =>{
        fetchData();
    },[]);

    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch};
}

export default useFetch;