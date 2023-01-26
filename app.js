// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// // class name이 "hello"인 요소를 배열의 형태로 반환
// console.log(hellos);

const h1 = document.querySelector("div.hello:first-child h1");
// querySelector는 CSS Selector를 사용하여 찾으려고 하는 요소 중 가장 처음 요소를 반환
// 해당하는 요소를 모두 반환하려면 queryselectorAll을 사용
console.dir(h1);

function handleTitleClick() {
  h1.style.color = "blue";
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI!");
}
function handleWindowOnline() {
  alert("All GOOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
// 위의 방법과 아래의 방법은 결과가 같다
// 위의 방법을 사용하면 .removeEventListener를 사용하여 EventListener를 제거할 수 있다.
// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
