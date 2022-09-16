const apiKey = "cd1412ef701a22c31ed33a851981b439";
var cityEl = document.querySelector("#city");
var btnEl = document.querySelector("#btn");

function mainFn() {
 var cityVal = cityEl.value;


//  Coordinates API
 var url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityVal}&limit=1&appid=${apiKey}`;
 fetch(url)
  .then(function (response) {
   return response.json();
  })
  .then(function (data) {
   console.log(data.lat)
  });
} 

// Listener
btnEl.addEventListener("click", mainFn);
