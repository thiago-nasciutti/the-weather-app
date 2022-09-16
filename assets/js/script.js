var apiKey = "cd1412ef701a22c31ed33a851981b439";
var cityEl = document.querySelector("#city");
var btnEl = document.querySelector("#btn");
var cityLat;
var cityLon;

function mainFn() {
 //  Coordinates API
 let cityVal = cityEl.value;
 var url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityVal}&limit=1&appid=${apiKey}`;
 fetch(url)
  .then((res) => {
   return res.json();
  })
  .then((data) => {
  cityLat = data[0].lat;
  cityLon = data[0].lon;
  });
}


function test(){
  console.log(cityLat)
}


test();


// Listener
btnEl.addEventListener("click", mainFn);
