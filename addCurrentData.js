import { assignDay } from "/assignDay.js";

export function addCurrentData(weatherData, city, stateCode, userAddress) {
    const currentDate = document.getElementById("date");
    const divCurrentTemp = document.getElementById("current-temp");
    const divLocation = document.getElementById("location");
    const divWeatherDescription = document.getElementById("weather-description");
    const divCurrentIcon = document.getElementById('current-weather-icon');

    let currentTemp = Math.round(weatherData.current.temp);
    divCurrentTemp.innerText = `${currentTemp}° F`;
    divWeatherDescription.innerText = `${weatherData.current.weather[0].description}`;
    let unixTimestamp = weatherData.hourly[0].dt;
    console.log(unixTimestamp);
    console.log(weatherData.hourly.length);

    if(!city && !stateCode) {
        divLocation.innerText = `${userAddress}`;
    } else {
        divLocation.innerText = `${city}, ${stateCode}`;
    }



    let curIcon = weatherData.current.weather[0].icon;
    let hUnixTimestamp = weatherData.daily[0].dt;
    //console.log(weatherData.daily[i].dt);
    let hRaw = new Date(hUnixTimestamp * 1e3);

    let dTime = hRaw.toLocaleDateString();
    let findDay = hRaw.getDay();
    console.log(findDay);
    let dDay = assignDay(findDay);
    console.log(dDay);
    divCurrentIcon.setAttribute("style", `background-image: url(http://openweathermap.org/img/wn/${curIcon}@2x.png)`);
    divCurrentIcon.classList.add('h-icon');


    currentDate.innerHTML = dDay + " " + dTime;
}
