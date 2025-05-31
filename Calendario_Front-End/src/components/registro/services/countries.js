export async function fetchCountries(){
    const response = await fetch('http://localhost:8080/api/countries',{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    });

    if(!response.ok){
        throw new Error('Error al obtener los países');
    }

   return response.json();
}