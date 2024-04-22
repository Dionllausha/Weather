console.log("Hello Class");


function getWeatherData() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '32eccb1a7a70ef4ace57db5920473509';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Weather data not found');
    }
    return response.json();
  }).then(data => {
    console.log('data: ', data);
    displayWeather(data);
  }).catch(error => {
    console.error("error fetching data: ", error);
    alert("Failed to fetch weather data.");
  });
}

function displayWeather(data) {
  const { name, main, weather, wind, coord } = data;
  const weatherResultDiv = document.getElementById('weatherResult');
  weatherResultDiv.innerHTML = `<h1>${name}</h1><p style=' border: 1px solid black; width:150px; height:110px; font-size:26px; border-radius :10px; background-color:#0000CDrgb;position:relative;left:95px;top:100px;'>Temperature: ${main.temp.toString().split('.')[0]} °C</p> <p style='position:relative;left:430px;bottom:171px; border:1px solid black; width:150px; height:110px; background-color: rgba(18, 25, 231, 0.458); border-radius :10px; font-size:26px;'>Weather: ${weather[0].main}</p><p style="border:1px solid black; width:150px;height:110px;border-radius:10px; background-color: rgba(18, 25, 231, 0.458);position:relative;left:430px;bottom:90px; font-size:26px;">Humidity : ${main.humidity}%</p><p style="border:1px solid black; width:150px;height:110px;border-radius:10px; background-color: rgba(18, 25, 231, 0.458);position:relative;left:620px;bottom:217px; font-size:26px;">Wind Speed : ${wind.speed}mph</p><p style="border:1px solid black; width:150px;height:110px;border-radius:10px; background-color: rgba(18, 25, 231, 0.458);position:relative;left:800px;bottom:344px; font-size:26px;">Latitude : ${coord.lat}</p><p style="border:1px solid black; width:150px;height:110px;border-radius:10px; background-color: rgba(18, 25, 231, 0.458);position:relative;left:620px;bottom:675px; font-size:26px;">Feels like: ${main.feels_like}°C</p><p style="border:1px solid black; width:150px;height:110px;border-radius:10px; background-color: rgba(18, 25, 231, 0.458);position:relative;left:800px;bottom:800px; font-size:26px;">Longtitude : ${coord.lon}</p>`

}


