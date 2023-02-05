// https://openweathermap.org/ 의 API KEY
const API_KEY = "19b9623a2025320a279068140ff3dd7b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `Weather : ${data.weather[0].main}
      Temp : ${data.main.temp} °C`;
      city.innerText = `Location : ${data.name}`;
    });
}
function onGeoError() {
  alert("Can't find your location.");
}
// 사용자의 위치 정보를 가져올 수 있다.
// onGeoOk 함수는 위치정보를 가져오는 데 성공했을 때, onGeoError 함수는 실패했을 때 실행하는 함수.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
