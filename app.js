/*{
  "location": {
      "name": "London",
      "region": "City of London, Greater London",
      "country": "United Kingdom",
      "lat": 51.52,
      "lon": -0.11,
      "tz_id": "Europe/London",
      "localtime_epoch": 1607978922,
      "localtime": "2020-12-14 20:48"
  },
  "current": {
      "last_updated_epoch": 1607977811,
      "last_updated": "2020-12-14 20:30",
      "temp_c": 10.0,
      "temp_f": 50.0,
      "is_day": 0,
      "condition": {
          "text": "Light rain",
          "icon": "//cdn.weatherapi.com/weather/64x64/night/296.png",
          "code": 1183
      },
      "wind_mph": 6.9,
      "wind_kph": 11.2,
      "wind_degree": 180,
      "wind_dir": "S",
      "pressure_mb": 1001.0,
      "pressure_in": 30.0,
      "precip_mm": 0.2,
      "precip_in": 0.01,
      "humidity": 82,
      "cloud": 0,
      "feelslike_c": 7.8,
      "feelslike_f": 46.0,
      "vis_km": 10.0,
      "vis_miles": 6.0,
      "uv": 1.0,
      "gust_mph": 14.1,
      "gust_kph": 22.7
  }
}*/

/* Global Variables */
let data = {};
let countryName = "";
let key = "a257bd10771e4302928204435201412";

let inputField = document.getElementById("zip");
let temp = document.getElementById("temp");
let city = document.getElementById("city");
let result = document.getElementById("result");


inputField.addEventListener("input", function() {
  countryName = inputField.value;
});

function send() {
  fetch('http://api.weatherapi.com/v1/current.json?key=' + key + '&q=' + countryName + '')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      data = res;
      console.log(data.current.temp_c, data.current.temp_f);
      temp.innerHTML = data.current.temp_c;
      city.innerHTML = data.location.name;
      result.classList.remove("hide");
    });
}
