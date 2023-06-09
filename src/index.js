import weather from "./modules/weather";
import view from "./modules/view";

const cityBtn = document.querySelector('#search');
const city = document.querySelector('#city');
cityBtn.addEventListener('click', async()=>{
    if (city.value === "") return;
    const res = await weather.getData(city.value);
    view.setSearch(res);
    city.value = null;
});

