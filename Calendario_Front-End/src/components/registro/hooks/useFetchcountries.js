import { useEffect,useState } from "react";
import { fetchCountries } from "../services/countries";

export function useFetchCountries(){
    const [countries,setCountries] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {

        const getCountries = async () => {
            setIsLoading(true);
            
            try {
                const data = await fetchCountries();
                setCountries(data);
            } catch (error) {
                console.log('Error fetch countries',error);
            } finally {
                setIsLoading(false);
            }
        }; 
        getCountries();
    },[]);

    return {countries,isLoading};
}