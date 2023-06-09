import weather from "./modules/weather";
import view from "./modules/view";

const cityBtn = document.querySelector('#search');
const city = document.querySelector('#city');
const container = document.querySelector('.container');

cityBtn.addEventListener('click',async ()=>{
    const res = await weather.getData(city.value);
});

