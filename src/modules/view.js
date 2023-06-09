const view = (()=>{
    function setSearch(data){
        if (!data) return;

        const locValue = document.getElementById("city-name");
        const tempValue = document.getElementById("temperature");
        const windValue = document.getElementById("wind");
        const pressureValue = document.getElementById("pressure");
        const humidityValue = document.getElementById("humidity");


        const city = data.location.name;
        const country = data.location.country;
        const temp = data.current.temp_c;
        const wind = data.current.wind_kph + " kph";
        const pressure = data.current.pressure_in + " inHg";
        const humidity = data.current.humidity + " %";

        

        locValue.textContent = city + ", " + country;
        tempValue.textContent = temp;
        tempValue.innerHTML += `<b>°C</b>`;
        windValue.textContent = wind;
        pressureValue.textContent = pressure;
        humidityValue.textContent = humidity;
    }
    return{
        setSearch
    }
})();

export default view;