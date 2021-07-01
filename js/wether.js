const wether = document.querySelector(".weather__wether");
const city = document.querySelector(".weather__city");
const temp = document.querySelector(".weather__temp");

const API_KEY = "498acb49ec71d93e587076b90e599e04";

const checkWeather = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      wether.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
    });
};

const onGeoOK = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  checkWeather(url);
};

function onGeoError() {}

checkWeather(
  `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${API_KEY}&units=metric`
);

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
