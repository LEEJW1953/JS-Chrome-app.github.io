const body = document.querySelector("body");
const h1 = document.querySelector("h1");
h1.style.color = "white";

function handleWindowResize() {
  if (window.innerWidth < 400) {
    body.style.backgroundColor = "#5A8BCF";
  } else if (400 <= window.innerWidth && window.innerWidth < 800) {
    body.style.backgroundColor = "#8653A7";
  } else {
    body.style.backgroundColor = "#E0BD45";
  }
}

window.addEventListener("resize", handleWindowResize);
