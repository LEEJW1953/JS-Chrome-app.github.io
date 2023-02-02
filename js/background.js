const images = ["0.jpeg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// document.createElement()를 통해 JS에서 HTML을 만들 수 있다.
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// .body.append()를 통해 HTML의 body의 맨 뒤에 추가할 수 있다.
// .body.prepend()를 사용하면 body의 맨 앞에 추가할 수 있다.
document.body.appendChild(bgImage);
