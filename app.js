/* Global Variables */
let data = {};
let zipCode = "";
let countryCode = "";
let appid = "f85502e814aeb6af1a5a327bc9f2a161";

let inputField = document.getElementById("zip");
inputField.addEventListener("input", function() {
  zipCode = inputField.value;
});

function send() {
  console.log(zipCode);
}

//'https://api.openweathermap.org/data/2.5/weather?q="London,uk"&appid="cf4e7ee8689dbdad98a31e22b8e8ff03"'
//
fetch(
  'https://api.openweathermap.org/data/2.5/weather?zip={'
    + zipCode +
  '},{'
    + countryCode +
  '}&appid={'
    + appid +
  '}'
)
  .then(res => res.json())
  .then(res => {
    data = res;
    console.log(data);
  });


































// Create a new date instance dynamically with JS
//let d = new Date();
//let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();