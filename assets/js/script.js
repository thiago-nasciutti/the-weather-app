// Selectors
let dateEl = document.querySelector("#date");
let cityEl = document.querySelector("#city");
let btnEl = document.querySelector("#btn");
let currentCityEl = document.querySelector("#currentCity");
let currentCardEl = document.querySelector("#currentCard");
let currentIconEl = document.querySelector(".currentIcon");

let currentTempEl = document.querySelector("#currentTemp");
let currentWindEl = document.querySelector("#currentWind");
let currentHumiEl = document.querySelector("#currentHumi");

let forecastDate0El = document.querySelector("#forecastDate0");
let forecastTemp0El = document.querySelector("#forecastTemp0");
let forecastWind0El = document.querySelector("#forecastWind0");
let forecastHumi0El = document.querySelector("#forecastHumi0");

let forecastDate1El = document.querySelector("#forecastDate1");
let forecastTemp1El = document.querySelector("#forecastTemp1");
let forecastWind1El = document.querySelector("#forecastWind1");
let forecastHumi1El = document.querySelector("#forecastHumi1");

let forecastDate2El = document.querySelector("#forecastDate2");
let forecastTemp2El = document.querySelector("#forecastTemp2");
let forecastWind2El = document.querySelector("#forecastWind2");
let forecastHumi2El = document.querySelector("#forecastHumi2");

let forecastTemp3El = document.querySelector("#forecastTemp3");
let forecastDate3El = document.querySelector("#forecastDate3");
let forecastWind3El = document.querySelector("#forecastWind3");
let forecastHumi3El = document.querySelector("#forecastHumi3");

let forecastDate4El = document.querySelector("#forecastDate4");
let forecastTemp4El = document.querySelector("#forecastTemp4");
let forecastWind4El = document.querySelector("#forecastWind4");
let forecastHumi4El = document.querySelector("#forecastHumi4");

//Moment.js
dateEl.textContent = moment().format("L");

//Function: get coordenates
getCoordenatesFn = () => {
  let cityVal = cityEl.value;
  let urlCoordinates = `http://api.openweathermap.org/geo/1.0/direct?q=${cityVal}&limit=1&appid=cd1412ef701a22c31ed33a851981b439`;

  fetch(urlCoordinates)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let cityLat = data[0].lat;
      let cityLon = data[0].lon;
      getCurrentWeatherFn(cityLat, cityLon);
      // getForecastFn(cityLat, cityLon);
    });
};
//Function: get currentWeather
getCurrentWeatherFn = (cityLat, cityLon) => {
  let urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&units=metric&appid=cd1412ef701a22c31ed33a851981b439`;
  console.log(urlCurrentWeather)
  fetch(urlCurrentWeather)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      currentCardEl.style.display = "block"
      currentCityEl.textContent = data.name;
      let currentIconCode = data.weather[0].icon;
      currentIconEl.setAttribute = ("src", `http://openweathermap.org/img/wn/${currentIconCode}@2x.png`);
      currentTempEl.textContent = data.main.temp + " °C";
      currentWindEl.textContent = data.wind.speed + " meter/sec";
      currentHumiEl.textContent = data.main.humidity + " %";
    });
};

//Function: get 5 day weather forecast
// getForecastFn = (cityLat, cityLon) => {
//   let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=metric&appid=cd1412ef701a22c31ed33a851981b439`;
//   console.log(urlForecast)
//   fetch(urlForecast)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       dt0 = data.list[0].dt;

//       forecastDate0El.textContent = data.list[7].dt_txt;
//       forecastTemp0El.textContent = data.list[7].main.temp + " °C";
//       forecastWind0El.textContent = data.list[7].wind.speed + " meter/sec";
//       forecastHumi0El.textContent = data.list[7].main.humidity + " %";

//       forecastDate1El.textContent = data.list[15].dt_txt;
//       forecastTemp1El.textContent = data.list[15].main.temp + " °C";
//       forecastWind1El.textContent = data.list[15].wind.speed + " meter/sec";
//       forecastHumi1El.textContent = data.list[15].main.humidity + " %";

//       forecastDate2El.textContent = data.list[23].dt_txt;
//       forecastTemp2El.textContent = data.list[23].main.temp + " °C";
//       forecastWind2El.textContent = data.list[23].wind.speed + " meter/sec";
//       forecastHumi2El.textContent = data.list[23].main.humidity + " %";

//       forecastDate3El.textContent = data.list[31].dt_txt;
//       forecastTemp3El.textContent = data.list[31].main.temp + " °C";
//       forecastWind3El.textContent = data.list[31].wind.speed + " meter/sec";
//       forecastHumi3El.textContent = data.list[31].main.humidity + " %";

//       forecastDate4El.textContent = data.list[39].dt_txt;
//       forecastTemp4El.textContent = data.list[39].main.temp + " °C";
//       forecastWind4El.textContent = data.list[39].wind.speed + " meter/sec";
//       forecastHumi4El.textContent = data.list[39].main.humidity + " %";

//     });
// };



// Listener
btnEl.addEventListener("click", getCoordenatesFn);
