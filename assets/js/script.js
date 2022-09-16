//const apiKey = "cd1412ef701a22c31ed33a851981b439";
// var cityEl = document.querySelector("#city");
// var btnEl = document.querySelector("#btn");

// function mainFn() {
//  var cityVal = cityEl.value;


//  Coordinates API
 var url = `http://api.openweathermap.org/geo/1.0/direct?q=london&limit=1&appid=cd1412ef701a22c31ed33a851981b439`;
 fetch(url)
  .then(function (response) {
   return response.json();
  })
  .then(function (data) {
   console.log(data.lat)
  });

//  //Weather API
//  var url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API key}`;

//  fetch(url)
//  .then(function(response){
//          //gets response ready
//          return response.json();
//      })
//  .then(function(data){
//          //‘response’ is ready and is available as ‘data’.
//          console.log(data);
//      });
// }

// // Listener
// btnEl.addEventListener("click", mainFn);
