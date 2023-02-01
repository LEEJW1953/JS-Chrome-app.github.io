const clockTitle = document.querySelector(".js-clock");
const xmasDate = new Date("2023-12-25") - 9 * 60 * 60 * 1000;

function getTime() {
  const time = new Date();
  let dDay = Math.floor((xmasDate - time) / 1000);
  const days = Math.floor(dDay / (60 * 60 * 24));
  dDay -= days * (60 * 60 * 24);
  const hours = String(Math.floor(dDay / (60 * 60))).padStart(2, "0");
  dDay -= hours * (60 * 60);
  const minutes = String(Math.floor(dDay / 60)).padStart(2, "0");
  dDay -= minutes * 60;
  const seconds = String(Math.floor(dDay)).padStart(2, "0");
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
getTime();
setInterval(getTime, 1000);
