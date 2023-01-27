const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // const clickedClass = "clicked";
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // } 위의 과정을 아래의 코드(toggle)로 수행할 수 있다
  h1.classList.toggle("clicked");

  // const currentColor = h1.style.color;
  // let newColor;
  // if (currentColor === "blue") {
  //   newColor = "tomato";
  // } else {
  //   newColor = "blue";
  // }
  // h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
