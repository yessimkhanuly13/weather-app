const weather = (()=>{
    async function getData(city){
        const api = `https://api.weatherapi.com/v1/current.json?key=a045b3f481734899a3183450232405&q=${city}`;
        try{
            const response = await fetch(api)
            const data = await response.json();
            console.log(data)
            return data;
        }
        catch(error){
            console.log(error);
            return null;
        } 
    }
    return {getData}
})();

export default weather;