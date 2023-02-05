const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // String.padStart(length, "fillstring")를 사용하여 문자의 앞에 지정한 길이가 될 때까지 지정한 문자를 추가한다.
  // String.padEnd()를 사용하면 문자의 뒤에 추가할 수 있다.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}
getClock();
// setInterval(function, time)을 사용하여 time(ms)의 간격으로 function을 실행 할 수 있다.
setInterval(getClock, 1000);
