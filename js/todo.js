const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

// todo를 저장하기 위한 list
let toDos = [];

function saveToDos() {
  // JSON.stringify()를 통해 JS의 값이나 객체를 JSON 문자열로 변환할 수 있다.
  // localStorage에 toDos list를 저장한다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  // ToDo를 구분하기 위해 Date.now()를 id 값으로 하는 객체 형태로 저장한다.
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function deleteToDo(event) {
  // 이 경우 event.target이 button이므로, button의 parentElement인 li를 가져온다.
  const li = event.target.parentElement;
  // .remove()를 사용해 element를 삭제할 수 있다.
  li.remove();
  // toDos.filter()를 사용해 삭제 버튼을 클릭한 todolist의 id와 같은 원소를 삭제한 배열로 수정할 수 있다.(67번째 줄 참고)
  // li.id의 값은 string이기 때문에 parseInt하여 사용한다.
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos(); // 수정한 배열을 local storage에 저장한다.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // JSON.parse()를 통해 문자열을 JS값이나 객체로 변환할 수 있다.
  // 이 경우 문자열을 array로 변환한다.
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // array.forEach(function)을 통해 배열의 각 원소들을 사용해 함수를 실행할 수 있다.
  // 이때, 배열의 원소 하나하나를 function의 argument로 받아서 사용할 수 있다.
  // ex) parsedToDos.forEach(item => console.log(`This is the turn of ${item}`));
  parsedToDos.forEach(paintToDo);
}

// array.filter(function)을 사용하면 array의 원소 중 function을 통해 true가 return된 원소만 남는 새로운 array를 return한다.
const arr = [111, 1421, 554, 5422, 2111, 123, 3312, 474];
function arrayfilter(item) {
  return item >= 1000;
}
console.log(arr.filter(arrayfilter));
// 위의 경우 arr의 원소 중 1000보다 크거나 같은 원소만 남긴 배열을 보여준다.
const newArr = arr.filter(item => item >= 1000);
console.log(newArr);
// 위와 같이 나타낼 수도 있다.
