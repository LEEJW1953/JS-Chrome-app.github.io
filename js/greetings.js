const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const link = document.querySelector("a");

function onLoginSubmit(event) {
  // form을 submit하면 기본적으로 브라우저는 새로고침을 한다.
  // EventListener가 기본으로 주는 event object를 argument 로 받고 event.preventDefault()를 실행하면 submit 받았을 때 브라우저의 기본동작을 막을 수 있다.
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

// function onLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
// }
// JS에서는 EventListener의 function에 기본적으로 첫번째 argument로 event에 대한 정보를 준다.
// link.addEventListener("click", onLinkClick);

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show rhe greetings
  paintGreetings();
}
